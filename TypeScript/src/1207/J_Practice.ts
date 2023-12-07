{
//! 직원 관리 시스템


class Employee {
  constructor(public name: string, public id: number) {}
  displayInfo(): void {
    console.log(`이름:${this.name}님 id는${this.id}입니다.`);
  }
}





class Manager extends Employee {
  private subordinates: Employee[]= [];


  constructor(name: string, id: number){
    super(name, id);
  }

  addSubordinate(employee: Employee){
    this.subordinates.push(employee)
  }
  listSubordinates():void{
    console.log(`Manager: ${this.name}`);
    this.subordinates.forEach(employee => employee.displayInfo());
  }
}

const manager = new Manager('lsa',123123);

const employee1 = new Employee("안상현1",12344);
const employee2 = new Employee("안상현2",12355);

manager.addSubordinate(employee1);
manager.addSubordinate(employee2);

manager.listSubordinates();




















}