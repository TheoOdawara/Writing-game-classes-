import {heroeCreator} from './models/hero.js';
import {atack, atackType} from './actions/atack.js';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function questionAsync(query){
    return new Promise(resolve => rl.question(query, resolve));
};

const heroes = [];
(async function main(){
    let option = "1";
    while (option !== "0"){
        option = await questionAsync("Type 1 to atack a hero, 0 to stop atacking or 2 to atack again\n");
        if (option === "1") {
            console.log("Type the hero who will attack:");
            await heroeCreator(questionAsync, heroes);
            console.log("Type the hero who will be attacked:");
            await heroeCreator(questionAsync, heroes);
            console.log("Type the damage dealt: ");
            const damage = await questionAsync("Type the damage: ");
            await atack(heroes[1], damage);
            await atackType(heroes[0], heroes[1]);
        } else if (option == "2"){
            const damage = await questionAsync("damage: ");
            const controler = await atack(heroes[1], damage);
            if (controler === 0){
                option = "0";
            }
            await atackType(heroes[0], heroes[1]);
        };
    }
    rl.close();
})();

