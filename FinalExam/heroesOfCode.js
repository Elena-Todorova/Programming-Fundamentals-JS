function heroesOfCode(input) {

    function createHero(heroName, heroHp, heroMp) {
        let hero = {
            name: heroName,
            HP: heroHp,
            MP: heroMp,
            castspell(neededMP, spellName) {
                if (this.MP >= neededMP) {
                    this.MP -= neededMP;
                    console.log(`${this.name} has successfully cast ${spellName} and now has ${this.MP} MP!`);
                } else {
                    console.log(`${this.name} does not have enough MP to cast ${spellName}!`);
                }
            },
            takeDamage(damage, attacker) {
                this.HP -= Number(damage);
                if(this.HP > 0) {
                    console.log(`${this.name} was hit for ${damage} HP by ${attacker} and now has ${this.HP} HP left!`);
                } else {
                    console.log(`${this.name} has been killed by ${attacker}!`);
                    playersObj.delete(this.name)
                }
            },
            recharge(amount) {
                let difference = Math.min(200 - this.MP, amount);
                this.MP += difference;
                console.log(`${this.name} recharged for ${difference} MP!`);
            },
            heal(amount) {
                let difference = Math.min(100 - this.HP, amount);
                this.HP += difference;
                console.log(`${this.name} healed for ${difference} HP!`);
            },
            finalPrint() {
                console.log(`${this.name}\n  HP: ${this.HP}\n  MP: ${this.MP}`);
            }
        }
        return hero;
    }
    let numHeroes = Number(input.shift());

    let players = input.splice(0, numHeroes);

    let playersObj = new Map();

    for (const player of players) {
        let [heroName, Hp, Mp] = player.split(' ');
        let heroHp = Number(Hp);
        let heroMp = Number(Mp);
        let hero = createHero(heroName, heroHp, heroMp);
        playersObj.set(heroName, hero);
    }

    for (const commands of input) {
        let [command, name, value, other] = commands.split(' - ');
        switch(command) {
            case 'CastSpell': {
                let hero = playersObj.get(name);
                let neededMP = Number(value);
                let spellName = other;
                hero.castspell(neededMP, spellName);
            }break;
            case 'TakeDamage': {
                let hero = playersObj.get(name);
                let damage = Number(value);
                let attacker = other;
                hero.takeDamage(damage, attacker);
            }
            break;
            case 'Recharge': {
                let hero = playersObj.get(name);
                let amount = Number(value);
                hero.recharge(amount);
            }
            break;
            case 'Heal': {
                let hero = playersObj.get(name);
                let amount = Number(value);
                hero.heal(amount);
            }
            break;
            case 'End': {
                for (const hero of playersObj.values()) {
                    hero.finalPrint();
                }
            }
            return;
        }   
    }
}

heroesOfCode(['2',

    'Solmyr 85 120',

    'Kyrre 99 50',

    'Heal - Solmyr - 10',

    'Recharge - Solmyr - 50',

    'TakeDamage - Kyrre - 66 - Orc',

    'CastSpell - Kyrre - 15 - ViewEarth',

    'End'])