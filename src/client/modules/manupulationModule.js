import $ from 'jquery';
import * as validation from '../modules/validationModule';
import * as exception from '../modules/exceptionModule';
import * as calculator from '../modules/calculatorsLogicModule';

const manupulateDOM = function () {
  $(document).ready(function () {

    // Go to Home page
    $('#home').on('click', function () {
      $('#about').removeClass('nav-item active');
      $('#calc').removeClass('nav-item active');
      $('#muscles').removeClass('nav-item active');

      $('#home').addClass('nav-item active');
      $('div.view').hide();
      $('#show-home-page').show();
    });

    // go to Muscle groups
    $('#muscle-groups').on('click', function () {
      $('#about').removeClass('nav-item active');
      $('#calc').removeClass('nav-item active');
      $('#home').removeClass('nav-item active');
      $('#muscles').addClass('nav-item active');
      $('div.view').hide();
      $('#show-muscle-group-page').show();

      const showVideo = function (id, videoId) {
        $(id).on('click', function () {
          $(videoId).toggle();
        });
      }
      // button for abs
      showVideo('#abs1', '#abs');

      // button for back
      showVideo('#back1', '#back');

      // button for biceps
      showVideo('#biceps1', '#biceps');

      // button for calfs
      showVideo('#calfs1', '#calfs');

      // button for chest
      showVideo('#chest1', '#chest');

      // button for forearms
      showVideo('#forearms1', '#forearms');

      // button for shoulders
      showVideo('#shoulders1', '#shoulders');

      // button for legs
      showVideo('#legs1', '#legs');

      // button for triceps
      showVideo('#triceps1', '#triceps');
    });

    // go to About us
    $('#about-us').on('click', function () {
      $('#about').removeClass('nav-item');
      $('#calc').removeClass('nav-item active');
      $('#muscles').removeClass('nav-item active');
      $('#home').removeClass('nav-item active');

      $('#exercise').removeClass('nav-item active');
      $('#about').addClass('nav-item active');
      $('div.view').hide();
      $('#show-constact-us').show();
    });

    // go to Calculations
    $('#calculations').on('click', function () {
      $('#calc').removeClass('nav-item');
      $('#home').removeClass('nav-item active');
      $('#about').removeClass('nav-item active');
      $('#muscles').removeClass('nav-item active');

      $('#calc').addClass('nav-item active');
      $('div.view').hide();
      $('#show-calculations').show();
      $('#result-calc-id').val('Result');
      $('#result').val('Result');
      $('.errClass').hide();

      /* Clear first calculator */
      $('#genderMale').prop('checked', false);
      $('#genderFemale').prop('checked', false);
      $('#ageId').val('');
      $('#kilogramsId').val('');
      $('#result').val('Result');

      /* Clear second calculator */
      $('#water-calc-id').val('');
      $('#kilos-calc-id').val('');
      $('#result-calc-id').val('Result');
    });

    // calculator for calories
    $('#submit').on('click', function () {
      $('.errClass').hide();

      const gender = $('input[type=radio][name=gender]:checked').val();
      const age = $('#ageId').val();
      const kilograms = $('#kilogramsId').val();

      if (gender === undefined) {
        $('#genderError1').show();
        throw new exception.InvalidGenderException();
      }

      if (!validation.areAgesValid(age)) {
        $('#ageError1').show();
        throw new exception.InvalidAgeException();
      }

      if (!validation.areKilosValid(kilograms)) {
        $('#kilosError1').show();
        throw new exception.InvalidWeightException();
      }

      const result = calculator.caloriesFunc(gender, age, kilograms);
      $('#result').val(`The minimum calorie intake for you is ${result.toFixed(2)} calories `);
    });

    // Water calculator per day
    $('#calc-water-submit-id').on('click', function () {
      $('.errClass').hide();

      const age = $('#water-calc-id').val();
      const kilos = $('#kilos-calc-id').val();

      if (!validation.areAgesValid(age)) {
        $('#ageError').show();
        throw new exception.InvalidAgeException();
      }

      if (!validation.areKilosValid(kilos)) {
        $('#kilosError').show();
        throw new exception.InvalidWeightException();
      }

      const result = calculator.waterCalculator(age, kilos);

      $('#result-calc-id').val(`The perfect amout of water intake for you is ${result.toFixed(2)} liters`);
    });

    $('#calorie-calc-btn-id').on('click', function () {
      $('div.view-calculator').hide();
      $('#first-calc-id').show();
    });

    $('#water-calculator-btn-id').on('click', function () {
      $('div.view-calculator').hide();
      $('#second-calc-id').show();
    });
  });
};

export {
  manupulateDOM,
};