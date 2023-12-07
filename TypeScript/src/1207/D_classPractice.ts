// 도형 계산 클래스

// Shape으로 클래스 생성





class Car {
  // model: string;
  // year: number;

  // constructor (model: string, year: number) {
  //   this.model = model;
  //   this.year = year;
  // }
  constructor (public model: string, public year: number) {}
  getModelAndYear(){
    console.log(`This car is a ${this.model} form ${this.year}.`);
  }
}

const car1 = new Car('Tesla Model 3', 2023);
car1.getModelAndYear(); // 함수호출
