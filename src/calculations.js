import $ from 'jquery';

let caloriesFunc = function calculate(gender, age, kilograms) {
    let calories = 0;
    if (gender === 'male') {
        if (age >= 3 && age <= 9) {
            calories = (22.7 * kilograms) + 495;
        } else if (age >= 10 && age <= 17) {
            calories = (17.5 * kilograms) + 651;
        } else if (age >= 18 && age <= 29) {
            calories = (15.3 * kilograms) + 679;
        } else if (age >= 30 && age <= 60) {
            calories = (11.6 * kilograms) + 879;
        } else if (age >= 61 && age <= 120) {
            calories = (13.5 * kilograms) + 487;
        }else{
            throw new Error('Invalid input');
        }
    } else if (gender === 'female') {
        if (age >= 3 && age <= 9) {
            calories = (22.5 * kilograms) + 499;
        } else if (age >= 10 && age <= 17) {
            calories = (12.2 * kilograms) + 746;
        } else if (age >= 18 && age <= 29) {
            calories = (14.7 * kilograms) + 496;
        } else if (age >= 30 && age <= 60) {
            calories = (8.7 * kilograms) + 829;
        } else if (age >= 61 && age <= 120) {
            calories = (10.5 * kilograms) + 596;
        }else{
            throw new Error('Invalid input2');
        }
    }

    return calories;
}

export {caloriesFunc};

