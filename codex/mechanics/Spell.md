# Concept

The spell represents the process by which the mage ties together magical forces using mystical language. 
Spell is the core of the game. Every player builds the spell out of [[Runes]]. Every player can have exactly one spell in their area at the time. If player starts his turn and has no spell they have to start building new spell. The process of building the spell is thematically called [[Spell#Weaving|Weaving]]. 
The spells can be [[Spell#Release|Released]] by the player to attack other player or to help themself in longer term. 
# Rules

- Every spell must have at least one [[Core Tiles|Core tile]] with [[Shard Tokens|Shard]] token, but can have more. 
- Spell can contain multiple [[Core Tiles]] with same [[Shard Tokens]]. 
- The whole of the spell must be connected at all times. If, for any reason, parts of the spell becomes disconnected, the player must decide which part to keep. Only the part containing [[Core Tiles|Core tile]] can be kept. All the other parts [[Spell#Collapse|Collapse]].
- Size of the spell is not limited in any way. Spell can contain any number of [[Rune Tiles]].
- Each game turn, the player has to either continue [[Spell#Weaving|Weaving]] the spell or [[Spell#Release|Release]] the spell.
- If its not possible to [[Spell#Weaving|Weave]] the spell anymore, it has to be [[Spell#Release|Released]].
# Weaving

This is the process of building the spell out of [[Rune Tiles]]. Each turn, player can decide to add a new tile to the spell. Selecting the tile has to adhere to [[Runes|Rune offer]] rules and can trigger a [[Ripple]]. If it does, effects of the [[Ripple]] will be resolved first, only then player can add the tile to the current spell. 
After the [[Rune Tiles|Rune Tile]] is added to the spell, the player can use the runes in the spell to form one or more [[Spell#Formulas|Formulas]]. The player may acquire one [[Incantations|Incantation]] whose Formula requirement is satisfied by one of the Formulas created by the tile they just added. If multiple valid Formulas are created, the player can choose only one of them to acquire an [[Incantations|Incantation]].
If the [[Incantations|Incantation]] is acquired, the player has to decide to either add it to the [[Spell#Spell deck|Spell deck]] or to the [[Incantations#Active Effects|Active Effects]]. If player chooses to add the [[Incantations|Incantation]] to the [[Incantations#Active Effects|Active Effects]], the [[Incantation Cards|Incantation Card]] has to be marked by [[Focus Tokens|Focus token]] to clearly mark the connection between the current spell and the Incantation. Such Incantations are then called [[Spell#Focused Effects|Focused]]. 

## Adding [[Core Tiles]]

Its possible to extend the Spell by another Spell [[Core Tiles]]. To do so, player still has to choose one [[Rune Tiles|Rune Tile]] from the offer but, instead of attaching the selected [[Rune Tiles|Rule Tile]] to the spell, this tile gets returned to the [[Rune Tile Bag]]. 
After that, player takes new [[Core Tiles|Core Tile]] form the supply and attaches it to the Spell. Finally, player has to choose one of the available [[Shard Tokens]] on the [[Domain Boards]] and place it on the [[Core Tiles|Core Tile]]  
# Formulas

Formulas are sequences of [[Runes]] that are formed in the spell. They are used for acquisition of [[Incantations]] during the [[Spell#Weaving|Weaving]] of the spell. Each Formula is formed by a sequence of one or more connected [[Rune Tiles]] that is read from a [[Core Tiles|Core Tile]] with a [[Shard Tokens|Shard token]] toward the last added [[Rune Tiles|Rune Tile]]. The last added tile is always part of the Formula.

A Formula only exists at the moment when a new [[Rune Tiles|Rune Tile]] is added to the spell and before the [[Incantation Cards|Incantation Card]] is selected. It does not exist in a meaningful way after that.

Most of the time, when [[Rune Tiles]] are added to the spell, multiple Formulas are created, but only one of them can be used each turn and most of them will usually be useless as no [[Incantations]] will require them. Each Formula has to be "read" in the direction starting from the [[Core Tiles|Core Tile]], leading towards the last added tile, it has to contain the last added tile and cannot contain any tile multiple times.

## Examples

Lets assume following example:
![[formula_example]]

By adding the tile **X** following valid Formulas were created:

> A -> X 
> A -> X  -> D
> A -> X  -> D -> E
> A -> X  -> D -> E -> B
> X 
> X  -> D
> X  -> D -> E
> X  -> D -> E -> B

>[!WARNING] Invalid Formulas
> D -> E -> B : does not contain the last added tile
> X -> A : goes "against" the direction of the Formula.  

>[!TODO] TODO: Inconsistent ruling on "self crossing" Formulas
> What about X -> D -> A ??? Its valid in terms of direction and containing the last added tile, but it feels wrong to use tile that "had to be crossed" on the way from the spell core to the "start" of the Formula itself...
# Spell deck

This is a deck of [[Incantation Cards]] placed in [[Game Layout#Player Area|Player Area]]. It serves as a "payload" of the spell and is used during the [[Spell#Release|Release]]. Cards in this deck are face down and are not public. Only the owner of the spell can take a look at the card in this deck. Every time, new [[Incantation Cards]] are acquired, the player can choose to put them into Spell Deck. [[Incantations]] in spell deck has no influence on the game, before the [[Spell#Release|Release]] of the spell.  
# Focused Effects

These are [[Incantation Cards]] placed directly into the [[Incantations#Active Effects|Active Effects]] by the player. This typically happens during the [[Spell#Weaving|Weaving]] of the spell. All of these [[Incantation Cards]] has to be marked by [[Focus Tokens]] that tells the player, that this specific Incantation is directly tied to the spell itself. These Incantations can be lost trough [[Ripple]] event, any other source of [[Spell#Collapse|Collapse]] or when the spell is [[Spell#Release|Released]].
# Release

Every turn, player can decide to release the spell instead of continuing the [[Spell#Weaving|Weaving]]. If they do, following has to happen:
- [[Incantations#Status Deck|Status Deck]] of ANY player has to be chosen as a target of the spell.
- All the cards from the [[Spell#Spell deck|Spell deck]] are shuffled into the target [[Incantations#Status Deck|Status Deck]].
- All the [[Spell#Focused Effects||Focused Effects]] are discarded.
- All the [[Rune Tiles]] are returned back to the [[Rune Tile Bag]].
- All the [[Core Tiles]] are returned to their supply.
- For each of the [[Shard Tokens]] present in the spell before the release player HAS to [[Resonance#Acquiring Resonance|acquire the Resonance]] card of the [[Domains|Domain]] to which the [[Shard Tokens|Shard token]] belongs. 
- Put all acquired [[Resonance Cards]] and [[Shard Tokens]] from the released spell to the [[Game Layout#Player Area|Player Area]].
- If the [[Initiative - Tension token]] is not turned to its [[Initiative - Tension token#Relieved side|Relieved side]] yet, turn it to that side. 
# Collapse

If for any reason any number of [[Rune Tiles]] becomes disconnected (Most common reason will be the [[Ripple]] event.) form the rest of the spell, the collapse of that tile(s) is triggered and needs to get resolved immediately. To resolve the collapse the player has to return the affected [[Rune Tiles]] to the [[Rune Tile Bag]] and has to discard on of his [[Incantation Cards]] following these rules:
- Find all the [[Incantation Cards]] between your [[Spell#Focused Effects|Focused Effects]] and [[Spell#Spell deck|Spell deck]] with their [[Spell#Formulas|Formula]] requirement ENDS with the same [[Runes|Rune]] as the collapsed tile provides. Choose one of them and discard it. 
- If no [[Incantation Cards]] was found during the first step, try to find all [[Incantation Cards]] between your [[Spell#Focused Effects|Focused Effects]] and [[Spell#Spell deck|Spell deck]] with their [[Spell#Formulas|Formula]] requirement CONTAINS with the same [[Runes|Rune]] as the collapsed tile provides.

## Collapse of the [[Core Tiles]]

In certain situations the [[Core Tiles]] of the spell can collapse as well. If this happens proceed in similar manner to the spell [[Spell#Release|Release]] procedure:
- Return the collapsed [[Core Tiles]] to their supply.
- For each of the [[Shard Tokens]] present on the collapsed [[Core Tiles]] player HAS to [[Resonance#Acquiring Resonance|acquire the Resonance]] card of the [[Domains|Domain]] to which the [[Shard Tokens|Shard token]] belongs. 
- Put all acquired [[Resonance Cards]] and [[Shard Tokens]] from the collapsed [[Core Tiles]] to the [[Game Layout#Player Area|Player Area]].
  
>[!TODO] TODO: Should the Collapse of the [[Core Tiles]] be more severe?
>It might be interesting to consider making this type of collapse different from the controlled one. Maybe the player could be forced to take another [[Shard Tokens|Shard token]] from the [[Domain Boards]] and additional [[Resonance]]?
> SOLUTION?: Keep the process the same as during the [[Spell#Release|Release]] but flip the [[Resonance Cards]] after. 
