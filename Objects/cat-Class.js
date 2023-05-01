function cat(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const el of arr) {
        let [name, age] = el.split(" ")

        let cat = new Cat(name, age)

        cat.meow()
    }

}

cat(['Candy 1', 'Poppy 3', 'Nyx 2'])