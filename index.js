class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
  

    Attack() {
        let attack;

        switch (this.type) {
            case "mage":
                attack = "magic";
                break;
            case "warrior":
                attack = "sword";
                break;
            case "monge":
                attack = "martial arts";
                break;
            case "ninja":
                attack = "shuriken";
                break;
        }

        console.log(`The ${this.type} attacked using ${attack}`);
   }  
}
  
const hero1 = new Hero("Merlim","3992","mage");
const hero2 = new Hero("Dimitri","29","warrior");
const hero3 = new Hero("Aang","192","monge");
const hero4 = new Hero("Naruto","25","ninja");

hero1.Attack();
hero2.Attack();
hero3.Attack();
hero4.Attack();