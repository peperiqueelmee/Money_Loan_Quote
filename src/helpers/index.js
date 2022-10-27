const formatMoney = (value) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return formatter.format(value);
}


const calculateTotalToPay = (quantity, term) => {
    let total;
    let interest;


    if (quantity < 5000) {
        interest = 1.5;
        total = quantity * interest;
    } else if (quantity >= 5000 && quantity < 10000) {
        interest = 1.4;
        total = quantity * interest;
    } else if (quantity >= 10000 && quantity < 15000) {
        interest = 1.3;
        total = quantity * interest;
    } else {
        interest = 1.2;
        total = quantity * interest;
    }


    if (term === 6) {
        interest = 1.1;
        total *= interest;
    } else if (term === 12) {
        interest = 1.2;
        total *= interest
    } else {
        interest = 1.3;
        total *= interest
    }

    
    return total;
}



export {
    formatMoney,
    calculateTotalToPay,
}