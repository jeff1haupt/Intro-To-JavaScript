const Mercedes = {
    model: "C-Class", // each of these represents property
    year: 2022,
    msrp: 43500,
    calculatePayment: function(down) {
        let monthlyPayment = (this.msrp-down) * (.05/12) * (Math.pow((1 + (.05/12)), 60))/ ((Math.pow((1 + (.05/12)), 60)) - 1)
        return monthlyPayment;
    }
}

console.log(Mercedes.model);
console.log(`$${Mercedes.calculatePayment(0).toFixed(2)} is the monthly payment with $0 down`);

const Kia = {
    model: "K5",
    year: 2022,
    msrp: 23790,
    calculatePayment: function(down) {
        let monthlyPayment = (this.msrp-down) * (.05/12) * (Math.pow((1 + (.05/12)), 60))/ ((Math.pow((1 + (.05/12)), 60)) - 1)
        return monthlyPayment;
    }
}

console.log(Kia.model)
console.log(`The ${Kia.year} Kia ${Kia.model} will cost you $${Kia.calculatePayment(0).toFixed(2)} a month with $0 down`);