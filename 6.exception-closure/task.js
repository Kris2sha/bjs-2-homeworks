function parseCount (value) {
    const number = Number.parseInt (value, 10);
    if (number) {
        return number;
    } 
    throw new Error ("Невалидное значение");
}

function validateCount (value) {
    try{
        return parseCount(value);
    }
    catch (err) {
        return err;
    }
}

///////////////////////////////////////////////////

class Triangle {
    constructor (a,b,c) {
        if (((a + b) < c) || (( a + c) < b) || ((b + c) < a)) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter () {
        return this.a + this.b + this.c;
    }

    getArea () {
        const p = 0.5 * this.getPerimeter();
        return parseFloat(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3));
    }
}

function getTriangle (a,b,c) {
    try {
        return new Triangle (a,b,c);
    }
    catch (err) {
        const erTriangle = new Object();
        erTriangle.getArea = function() {return "Ошибка! Треугольник не существует";};
        erTriangle.getPerimeter = function () {return "Ошибка! Треугольник не существует";};
        return erTriangle;
    }
}