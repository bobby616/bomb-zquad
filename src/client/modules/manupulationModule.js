import $ from 'jquery';
import * as validation from '../modules/validationModule';
import * as exception from '../modules/exceptionModule';
import * as calculator from '../modules/calculatorsLogicModule';

const manupulateDOM = function() {
  $(document).ready(function() {
    // back to Home
    $('#exercises').on('click', function() {
      $('#about').removeClass('nav-item active');
      $('#calc').removeClass('nav-item active');
      $('#exercise').addClass('nav-item active');
      $('div.view').hide();
      $('#show-home-page').show();
    });

    // go to About us
    $('#about-us').on('click', function() {
      $('#about').removeClass('nav-item');
      $('#calc').removeClass('nav-item active');
      $('#exercise').removeClass('nav-item active');
      $('#about').addClass('nav-item active');
      $('div.view').hide();
      $('#show-constact-us').show();
    });

    // go to Calculations
    $('#calculations').on('click', function() {
      $('#calc').removeClass('nav-item');
      $('#exercise').removeClass('nav-item active');
      $('#about').removeClass('nav-item active');
      $('#calc').addClass('nav-item active');
      $('div.view').hide();
      $('#show-calculations').show();
    });

    // calculator for calories

    $('#submit').on('click', function() {
      const gender = $('input[type=radio][name=gender]:checked').val();
      const age = $('#ageId').val();
      const kilograms = $('#kilogramsId').val();

      if (!validation.areAgesValid(age)) {
        throw new exception.InvalidAgeException();
      }

      if (!validation.areKilosValid(kilograms)) {
        throw new exception.InvalidWeightException();
      }

      const result = calculator.caloriesFunc(gender, age, kilograms);
      $('#result').val(result);
    });

    // Water calculator per day
    $('#calc-water-submit-id').on('click', function() {
      const age = $('#water-calc-id').val();
      const kilos = $('#kilos-calc-id').val();

      if (!validation.areAgesValid(age)) {
        throw new exception.InvalidAgeException();
      }

      if (!validation.areKilosValid(kilos)) {
        throw new exception.InvalidWeightException();
      }

      const result = calculator.waterCalculator(age, kilos);

      $('#result-calc-id').val(result);
    });
  });
};

export {
  manupulateDOM,
};
