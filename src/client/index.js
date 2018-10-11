import $ from 'jquery';

$(document).ready(function () {
    $('#exercises').on('click', function () {
        $('#about').removeClass('nav-item active');
        $('#exercise').addClass('nav-item active');
        $('div.view').hide();
        $('#show-home-page').show();
    });
});