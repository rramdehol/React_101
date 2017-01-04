class Triangle{
	constructor(side1, side2, side3){
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}
	get area(){
	  return this.calcArea();
	}
	get perimeter(){
	  return this.calcPerimeter();
	}
	calcArea(){
		let s = ((this.side1+this.side2+this.side3)/2);
		let area = Math.sqrt(s*(s-this.side1)*(s-this.side2)*(s-this.side3));
		return area;
	}
	calcPerimeter(){
	  return this.side1+this.side2+this.side3;
	}
}

class EquilateralTriangle extends Triangle{
  constructor(side){
    // this.side = side;
    super(side,side,side);
  }
}

var myEquilateralTriangle = new EquilateralTriangle(3);
var regularTriangle = new Triangle(3,4,5);
console.log(myEquilateralTriangle.area);
console.log(myEquilateralTriangle.perimeter);
console.log(regularTriangle.area);
console.log(regularTriangle.perimeter);