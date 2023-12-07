// 은행 계좌 관리 시스템
// Account 클래스 생성
// 속성: accountNumber(문자열)

class Account {
  constructor(public accountNumber: string = '', private balance: number = 0 ) {

  }
  deposit(amount: number) {
    this.balance += amount;
    console.log(`${this.accountNumber}에 ${amount}원 입금되어 현재잔액 ${this.balance}입니다.`)
  }
  withdraw(amount: number) {
    if (this.balance >= amount){
      this.balance -= amount;  
      console.log(`${this.accountNumber}에 ${amount}원 출금되어 현재잔액 ${this.balance} 되었습니다.`);
    } else {
      console.log('잔액이 충분하지 않습니다.')
    }
  }
  getBalance(){
    console.log(`현재 잔액 ${this.balance}원 입니다.`)
  }
}

const account1 = new Account('주민1',);
account1.deposit(1000);
account1.withdraw(500);
account1.getBalance();

account1.withdraw(200);
account1.getBalance();

account1.withdraw(400);
account1.getBalance();

