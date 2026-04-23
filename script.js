const name = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;

let health = 80;
let mana = 120;
let attack = 45;
let defense = 30;

function calculateDamage(attack, defense) {
    const damage = attack - defense;
    return damage < 0 ? 0 : damage;
}

const isAlive = (health) => health > 0;

const canCastSpell = (currentMana, spellCost, isStunned) => {
    return currentMana >= spellCost && !isStunned;
};

function getPresentation(name, characterClass, level) {
    return `${name} — ${characterClass} (Nivel ${level})`;
}

// Simulación de combate
const enemyDefense = 20;
const spellCost = 50;
const isStunned = false;

console.log("Damage:", calculateDamage(attack, enemyDefense));
console.log("Is Alive:", isAlive(health));
console.log("Can Cast Spell:", canCastSpell(mana, spellCost, isStunned));
console.log("Presentation:", getPresentation(name, characterClass, level));