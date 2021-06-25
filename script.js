'use strict';

class Rectangle {
    constructor(height, width) {
        this.height = height; // свойства, которые появятся в нашем новом экземпляре объекта
        this.width = width;
    }
    // метод
    calcArea() {
        return this.height * this.width;
    }
}
// создаем подкласс, который примет в сеья наследование Rectangle и позволит создать
// еще один шаблон, но уже уровенм пониже. Для указания на наследство от Rectangle
// мы используем
class ColoredRectangleWithText extends Rectangle {
    constructor(height, widht, text, bgColor) {
        super(height, widht); // конструктор для родительского класса.
        // он повторяет тот же набор свойств, что есть у родителя
        // иначе пришлось бы копипастить все свойства родителя
        // главное правило в применении super() - он должен стоять в самом начале тела конструктора.
        // В скобках мы указываем какие свойства родителя мы хотим перенести в этот подкласс.
        // Дальше дописываем недостающие свойства
        this.text = text;
        this.bgColor = bgColor;
    }
    // даный подкласс наследует от родителя все его методы. Добавим еще один
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello Alex', 'blue');

div.showMyProps();
console.log(div.calcArea());


// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());