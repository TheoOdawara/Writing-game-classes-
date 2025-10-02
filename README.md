# Writing Game Classes

This project is a simple text-based RPG challenge implemented in JavaScript. The goal is to create and manage heroes, simulate attacks, and demonstrate basic object-oriented programming concepts.

## Features
- Create heroes with custom names, ages, and classes (mage, warrior, monk, ninja)
- Store 2 heroes in an array
- Simulate attacks between heroes, reducing health
- Display messages for attack actions and hero status
- End the atack when a hero dies

## How to Run
1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Open a terminal in the project folder.
3. Run the program:
   ```
   node src/index.js
   ```
4. Follow the prompts to create heroes and perform attacks.

## File Structure
- `src/models/hero.js`: Hero class and hero creation logic
- `src/actions/atack.js`: Attack functions and action messages
- `src/index.js`: Main program loop and user interaction

## Example
```
Type 1 to atack a hero, 0 to stop atacking or 2 to atack again
Type the hero who will attack:
Name: Arthur
Age: 30
Class(mage, warrior, monk, ninja): warrior
Type the hero who will be attacked:
Name: Merlin
Age: 50
Class(mage, warrior, monk, ninja): mage
Type the damage dealt:
10
Merlin recieve 10 damage! Remaining health: 0
Merlin is dead.
```

## License
This project is for educational purposes and does not have a specific license.
