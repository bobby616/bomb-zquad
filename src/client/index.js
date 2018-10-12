import $ from 'jquery';
import {
    caloriesFunc
} from '../calculations';

$(document).ready(function () {
    console.log('Roskata e pich');

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

    $("#calc-water-submit-id").on("click", function () {
        const age = $("#water-calc-id").val();
        const kilos = $("#kilos-calc-id").val();
        console.log(typeof (Number(age)));
        


        if (age === null || age.length === 0 || (typeof (Number(age)) !== "number")) {
            throw new Error("Invalid age!");
        }

        if (kilos === null || kilos.length === 0 || typeof (Number(age)) !== "number") {
            throw new Error("Invalid kilos!");
        }

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

        $("#result-calc-id").val(result);
    });

    // calculator for calories

    $('#submit').on('click', function () {
        const gender = $("input[type=radio][name=gender]:checked").val();
        let age = $('#ageId').val();
        let kilograms = $('#kilogramsId').val();

        age = parseInt(age, 10);
        kilograms = parseInt(kilograms, 10);

        let result = caloriesFunc(gender, age, kilograms);
        $('#result').val(result);
    });

});