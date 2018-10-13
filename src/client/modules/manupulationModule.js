import $ from 'jquery';
import * as validation from "../modules/validationModule";
import * as exception from "../modules/exceptionModule";
import * as calculator from "../modules/calculatorsLogicModule";

const manupulateDOM = function () {
    $(document).ready(function () {
        console.log("bachka li ne nbachka oli a ?A a? A?");
        

        // back to Home
        $('#exercises').on('click', function () {
            console.log('sadsa');
            $('#about').removeClass('nav-item active');
            $('#calc').removeClass('nav-item active');
            $('#exercise').addClass('nav-item active');
            $('div.view').hide();
            $('#show-home-page').show();
        });

        // go to About us
        $('#about-us').on('click', function () {
            $('#about').removeClass('nav-item');
            $('#calc').removeClass('nav-item active');
            $('#exercise').removeClass('nav-item active');
            $('#about').addClass('nav-item active');
            $('div.view').hide();
            $('#show-constact-us').show();
        });

        // go to Calculations
        $('#calculations').on('click', function () {
            $('#calc').removeClass('nav-item');
            $('#exercise').removeClass('nav-item active');
            $('#about').removeClass('nav-item active');
            $('#calc').addClass('nav-item active');
            $('div.view').hide();
            $('#show-calculations').show();
        });

        // calculator for calories
        $('#submit').on('click', function () {
            const gender = $("input[type=radio][name=gender]:checked").val();
            let age = $('#ageId').val();
            let kilograms = $('#kilogramsId').val();

            age = parseInt(age, 10);
            kilograms = parseInt(kilograms, 10);

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
                } else {
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
                } else {
                    throw new Error('Invalid input2');
                }
            }

            let result = calories;
            $('#result').val(result);
        });

        // Water calculator per day 
        $("#calc-water-submit-id").on("click", function () {
            const age = $("#water-calc-id").val();
            const kilos = $("#kilos-calc-id").val();

            if (!validation.areAgesValid(age)) {
                throw new exception.InvalidAgeException();
            }

            if (!validation.areKilosValid(kilos)) {
                throw new exception.InvalidWeightException();
            }

            let result = calculator.waterCalculator(age, kilos);

            $("#result-calc-id").val(result);
        });

    });
};

export {
    manupulateDOM
};