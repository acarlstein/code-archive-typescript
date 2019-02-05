/// <reference path="../../../Assets/Utilities.ts" />

module Patterns.Behavioral {

    export class ATM {
        log : Log = new Log();
        amount : number;

        constructor(amount : number) {
            this.amount = amount;
            this.log.add("[Account: $" + amount + "]");
        }

        deposit(amount : number) : ATM {
            this.amount += amount;
            this.log.add("Deposit: $" + amount);   
            return this;
        }

        balance() : number {
            this.log.add("Balance: $" + this.amount);      
            return this.amount;
        }

        useBill(billAmount : number) : ATM {
            var count = Math.floor(this.amount / billAmount);
            this.amount -= count * billAmount;
            this.log.add("Dispense: " + count + " bills of $" + billAmount + " bills");
            return this;
        }
        
    }
    
}

function run() {
    console.log("Run ATM");
    
    var atm = new Patterns.Behavioral.ATM(378);
    
    atm.useBill(100);
    atm.balance();
    
    atm.deposit(200).balance();
    
    atm.useBill(100).useBill(50).useBill(20).useBill(10).useBill(5).useBill(1);
   
    atm.log.show();
}