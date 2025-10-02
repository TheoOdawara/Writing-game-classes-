class Hero{
    constructor(name, age, heroClass, life){
        this.name = name;   
        this.age = age;
        this.heroClass = heroClass;
        this.health = 10;
    }
}

async function heroeCreator(questionAsync, heroes) {
    const heroName = await questionAsync("Name: ");
    const heroAge = await questionAsync("Age: ");
    const heroClass = await questionAsync("Class(mage, warrior, monk, ninja): ");
    const hero = new Hero(heroName, heroAge, heroClass);
    heroes.push(hero);
}

export {heroeCreator};
