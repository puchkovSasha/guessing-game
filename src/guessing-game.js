class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.max = max;
        this.min = min;

    }

    guess() {
        return (this.aver = Math.ceil((this.max+this.min)/2));
    }

    lower() {
        this.max = this.aver;
    }

    greater() {
        this.min = this.aver;
    }
}

module.exports = GuessingGame;
