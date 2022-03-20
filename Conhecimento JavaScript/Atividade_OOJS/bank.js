class BankAccount {
    constructor(agency, number, type, amount) {
        this.agency = agency;
        this.number = number;
        this.type = type;
        // getter e setter, add um _ na frente
        this._amount = 0;   
    }

    get amount() {
        return this._amount;
    }

    set saldo(value) {
        this._amount = value;
    }

    take(value) {
        if (value > this._amount) {
            return "Operação negada"
        }
        this._amount = this._amount - value;

        return this._amount;
    }

    deposit(value) {
        this._amount = value + this._amount;

        return this._saldo;
    }
}

class Account extends BankAccount {
    constructor(agency, number, creditcard) {
        super(agency, number);
        this.type = 'current'
        this._creditcard = creditcard; 
    }

    get creditcard() {
        return this._creditcard;
    }

    set creditcard(value) {
        this._creditcard = value;
    }
}

class SavingsAccount extends BankAccount {
    constructor(agency, number) {
        super(agency, number);
        this.type = 'savings'
    }
}

class UniversityAccount extends BankAccount {
    constructor(agency, number) {
        super(agency, number);
        this.type = 'college'
    }

    take(value) {
        if(value > 500) {
            return "Invalid Operation!"
        }

        this._amount = this._amount - value
    }
}
    
    