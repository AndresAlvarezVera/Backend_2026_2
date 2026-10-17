class Punto{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return `(${this.x}, ${this.y})`;
    }
    mover(dx, dy){
        this.x += dx;
        this.y += dy;
    }
}

const p1 = new Punto(2, 3);
console.log(p1);
p1.mover(1, -1);
console.log(p1);