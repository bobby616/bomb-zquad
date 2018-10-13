const waterCalculator = function (age, kilos) {
    let result = 0;

    if (age >= 0 && age < 16) {
        result = kilos * 0.035;
    } else if (age < 31) {
        result = kilos * 0.040;
    } else if (age < 55) {
        result = kilos * 0.035;
    } else if (age < 66) {
        result = kilos * 0.030;
    } else {
        result = kilos * 0.020;
    }

    return result;
}


export {
    waterCalculator
};