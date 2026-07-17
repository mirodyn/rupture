// Resolves anything that needs to know which printed page an element ends up
// on: cross-references (<span class="pageref" data-target="some-id">) and the
// index (headings marked with data-toc get listed in #toc).
// Runs once on load and mutates the DOM to plain text/elements, so it plays
// fine with browser print / "Save as PDF" - by the time you print, nothing
// here is left live, just the resolved content.

(function () {
    const pages = Array.from(document.querySelectorAll('.page:not(.cover)'));

    // Alternate left/right by position, starting with left (cover excluded),
    // instead of relying on a hand-typed class per page.
    pages.forEach(function (page, index) {
        page.classList.add(index % 2 === 0 ? 'left' : 'right');
    });

    function pageNumberOf(target) {
        const page = target.closest('.page');
        const index = pages.indexOf(page);
        return index === -1 ? '?' : index + 1;
    }

    document.querySelectorAll('.pageref').forEach(function (ref) {
        const targetId = ref.dataset.target;
        const target = targetId ? document.getElementById(targetId) : null;

        if (!target) {
            console.warn('pageref: no element with id "' + targetId + '" found');
            ref.textContent = '?';
            return;
        }

        ref.textContent = pageNumberOf(target);
    });

    const toc = document.getElementById('toc');
    if (toc) {
        document.querySelectorAll('[data-toc]').forEach(function (heading) {
            const entry = document.createElement('li');
            entry.className = 'toc-entry';

            // Indent deeper heading levels further right (h2 = 0, h3 = 1, ...).
            const level = parseInt(heading.tagName.slice(1), 10) - 2;
            entry.style.setProperty('--toc-level', level);

            const label = document.createElement('span');
            label.className = 'toc-label';
            label.textContent = heading.textContent;

            const leader = document.createElement('span');
            leader.className = 'toc-leader';

            const number = document.createElement('span');
            number.className = 'toc-page';
            number.textContent = pageNumberOf(heading);

            entry.appendChild(label);
            entry.appendChild(leader);
            entry.appendChild(number);
            toc.appendChild(entry);
        });
    }
})();