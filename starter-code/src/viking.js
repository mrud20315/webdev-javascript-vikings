// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }

    attack() {
        return this.strength
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
    }

}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    recieveDamage
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health > 0) {
            return ("A saxon has received " + damage + " points of damage");
        }
        else {
            return ("A saxon has died from a stab wound");
        }
    }

}



// War
class War {
    constructor() {
        this.VikingArmy = [];
        this.SaxonArmy = [];
    }
    addViking(Viking) {
        this.VikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.SaxonArmy.push(Saxon)
    }
    VikingAttack() {
        let Sax = this.SaxonArmy[Math.floor(Math.random() * this.SaxonArmy.length)];
        let Vik = this.VikingArmy[Math.floor(Math.random() * this.VikingArmy.length)];

        let attack = Sax.receiveDamage(Vik.attack(V.damage));

        if (Sax.health <= 0) {
            this.SaxonArmy.splice(Sax, 1)
        }
        return attack
    }

    SaxonAttack(){
        let Sax = this.VikingArmy[Math.floor(Math.random()* this.VikingArmy.length)]
        let Vik = this.SaxonArmy[Math.floor(Math.random()* this.SaxonArmy.length)]
    let hit = Sax.receiveDamage(D.attack(D.damage));
    if(Sax.health <= 0){
        this.VikingArmy.splice(Sax,1)
    }
    return hit
    }
    showStatus(){
        if(this.VikingArmy.length == 0){
            return 'Saxons have fought for their lives and survive another day..'
        }
        else if(this.SaxonArmy == 0){
            return 'Vikings have won the war of this day'
        }
        else{
            return 'Vikings and Saxons be fighting still till this very day, cause it take to long'
        }
    }


}

