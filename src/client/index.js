import $ from 'jquery';
import {calculator} from 'calculator.js';

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

});