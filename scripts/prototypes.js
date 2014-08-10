

//Створити об'єкти монстри, які мають назву, поточний рівень життя та початковий рівень життя (що є однаковий для всіх монстриків одного типу). 
var Monsters = {
	constructor: function(name, hitpoints, damage) {
		this.name = name;
		this.hitpoints = hitpoints;
		this.damage = damage;
		this.healthOll = hitpoints;
		return this;
	},
	sayName: function() {
		console.log('привет, меня зовут ' + this.name);
	}
}



// Котомонстри, які вміють царапатись (життя ворога зменшує на 5) та мають початковий рівень життя 50,
var catoMonstr = Object.create(Monsters).constructor("Vasya", 50 , 5);


//Птахомонсти, які вміють клювати (життя ворога зменшує на 3) та мають початковий рівень життя 60.
var birdMonstr = Object.create(Monsters).constructor('Dodo', 60 , 3);

// монстр говорит свое имя
console.log(catoMonstr.sayName());


// фунция атаки монстров
function attack(attacking, protection) {
	protection.hitpoints -= attacking.damage;

	console.log("После атаки монстра " + attacking.name + ' у монстра ' + protection.name + " осталось " + protection.hitpoints + " хп из " + protection.healthOll);
}

attack(catoMonstr,birdMonstr);
