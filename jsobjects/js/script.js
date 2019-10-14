//task1
var skill = {
    name: "html",
    level: 5,
    fullname: function () {
        return this.name + "-" + this.level;
    }
}
console.log('"' + skill.fullname() + '"');
//task2
var String = function (name) {

    this.name = name;
};

String.prototype.Upper = function () {

    return this.name.charAt(0).toUpperCase() + this.name.charAt(1) + this.name.charAt(2) + this.name.charAt(3) + this.name.charAt(4) + this.name.charAt(5) + this.name.charAt(6)+this.name.charAt(7) + this.name.charAt(8) +  this.name.charAt(9).toUpperCase();
}

var me = new String("Kotsinskyi");

console.log(me.Upper());
//task3


var calculator = {
    add() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    info() {
        this.a = +prompt("VALUE 1");
        this.b = +prompt("VALUE 2");
    }
}
calculator.info();
alert("ADDED VALUES = " + calculator.add());
alert("mULTYPLYING VALUES = " + calculator.mul());

