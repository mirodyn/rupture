int runs = 100000;
int deckSize = 10;
int drawCount = 2;
int doubleSkullCount = 2;
int skullCount = 3;
int doubleHearthCount = 1;
int hearthCount = 2;
int fixedHearthCount = 1;
int deathCount = 0;
int aliveCount = 0;
string? cmd = null;

if (deckSize < (skullCount + doubleSkullCount + hearthCount + doubleHearthCount)){
    Console.WriteLine("Incorrect deck composition!");
    return;
}

while (cmd?.ToLower() != "q")
{
    aliveCount = 0;
    deathCount = 0;
    for ( int i = 0; i<runs; i++){
        List<int> deck = BuildDeck(skullCount,doubleSkullCount,hearthCount,doubleHearthCount,deckSize);
        // Console.WriteLine("deck:");
        // foreach(int num in deck)
        //     {
        //         Console.Write(num);

        //     }
        //     Console.WriteLine();
        if (deck.Take(drawCount).Sum() - fixedHearthCount < 0)
        {
            deathCount++;
        }
        else
        {
            aliveCount++;
        }

    }
    Console.WriteLine($"Result after {runs} runs:");
    Console.WriteLine($"Alive {aliveCount} times");
    Console.WriteLine($"Death {deathCount} times");
    double prob = (double)aliveCount / (double)runs;
    Console.WriteLine($"Probability of survival: {prob.ToString()}");
    cmd = Console.ReadLine();
}


static List<int> BuildDeck( int skullCount,
                            int doubleSkullCount,
                            int hearthCount,
                            int doubleHearthCount,
                            int deckSize){
    List<int> result = new List<int>();

    for (int i = 0; i < skullCount; i++) result.Add(1);
    for (int i = 0; i < doubleSkullCount; i++) result.Add(2);
    for (int i = 0; i < hearthCount; i++) result.Add(-1);
    for (int i = 0; i < doubleHearthCount; i++) result.Add(-2);
    int remains = deckSize - result.Count;
    for (int i = 0; i < remains; i++) result.Add(0);
    return result.Shuffle().ToList();
}


