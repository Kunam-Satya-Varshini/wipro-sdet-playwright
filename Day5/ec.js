class BankAccount{
    #balance = 0;
    deposit(amount){
        if (amount > 0){
            this.#balance=this.#balance+amount;
            console.log(`Deposited $${amount} , balance is ${this.#balance}`);
        }
        else{
            console.log(`invalid amount`);
        }
    }
    withdraw(amount){
        if(amount>0 && amount<= this.#balance){
            this.#balance = this.#balance - amount;
            console.log(`debited $${amount} , new balance is${this.#balance}`)
        }
        else{
            console.log(`invalid request`);
        }
    }
    getBalance(){
        return this.#balance;
    }
}
const Vaccount = new BankAccount();
Vaccount.deposit(1000);
Vaccount.withdraw(350);

