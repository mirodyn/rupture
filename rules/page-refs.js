// Resolves <span class="pageref" data-target="some-id"></span> placeholders
// to the printed page number of the .page containing the element with that id.
// Runs once on load and mutates the DOM to plain text, so it plays fine with
// browser print / "Save as PDF" - by the time you print, nothing here is left
// live, just the resolved numbers.

(function () {
    const pages = Array.from(document.querySelectorAll('.page:not(.cover)'));

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
})();