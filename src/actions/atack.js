import {option} from './index.js';


async function atack(hero, damage) {
    hero.health -= damage;
    console.log(`${hero.name} recieve ${damage} damage! Remaining health: ${hero.health}`);
    if (hero.health <= 0){
        console.log(`${hero.name} is dead.`);
        return option == "0";
    };
}


async function atackType(hero1, hero2){
    switch (hero1){
    case "mage":
        console.log(`Hero ${hero1.name} class ${hero1.heroClass}, atacked ${hero2.name} with an spell`);
        break;
    case "warrior":
        console.log(`Hero ${hero1.name} class ${hero1.heroClass}, atacked ${hero2.name} with a sword`);
        break;
    case "monk":
        console.log(`Hero ${hero1.name} class ${hero1.heroClass}, atacked ${hero2.name} with martial arts`);
        break;
    case "ninja":
        console.log(`Hero ${hero1.name} class ${hero1.heroClass}, atacked ${hero2.name} with an shuriken`);
        break;
    }
};


export {atack, atackType};