// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
import "../css/application.scss"
const images = require.context('../images', true)
const imagePath = (name) => images(name, true)
var jQuery = require('jquery')

// include jQuery in global and window scope (so you can access it globally)
// in your web browser, when you type $('.div'), it is actually refering to global.$('.div')
global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;
import "animate"
import "animsition/dist/js/animsition.min"
import "bootstrap"
//= require toastr
import "bootstrap/dist/css/bootstrap.css"
import "countdowntime"
import "daterangepicker/daterangepicker"
import "daterangepicker/daterangepicker.css"
import "isotope/dist/isotope.min.css"
import "animsition/dist/css/animsition.min.css"
import "fontawesome/index"
import "font-awesome/css/font-awesome.min.css"
import "hamburgers/dist/hamburgers.css"
import "jquery"
import "jqueryui/jquery-ui.css"
import "lightbox2"
import "lightbox2/dist/css/lightbox.min.css"
import "magnific-popup/dist/magnific-popup.css"
import "magnific-popup"
// import "parallax100"
import "perfect-scrollbar"
import "perfect-scrollbar/css/perfect-scrollbar.css"
import "select2"
import "select2/dist/css/select2.min.css"
import "slick"
import "sweetalert"

console.log('Hello World from Web packer');

$(".js-select2").each(function () {
    $(this).select2({
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next('.dropDownSelect2')
    });
})

// require("../theme-files/vendor/daterangepicker/moment.js")

$('.parallax100').parallax100();

$('.gallery-lb').each(function () { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
            enabled: true
        },
        mainClass: 'mfp-fade'
    });
});

$('.js-addwish-b2').on('click', function (e) {
    e.preventDefault();
});
$('.js-addwish-b2').each(function () {
    var nameProduct = $(this).parent().parent().find('.js-name-b2').html();
    $(this).on('click', function () {
        swal(nameProduct, "is added to wishlist !", "success");

        $(this).addClass('js-addedwish-b2');
        $(this).off('click');
    });
});

$('.js-addwish-detail').each(function () {
    var nameProduct = $(this).parent().parent().parent().find('.js-name-detail').html();

    $(this).on('click', function () {
        swal(nameProduct, "is added to wishlist !", "success");

        $(this).addClass('js-addedwish-detail');
        $(this).off('click');
    });
});


$('.js-addcart-detail').each(function () {
    var nameProduct = $(this).parent().parent().parent().parent().find('.js-name-detail').html();
    $(this).on('click', function () {
        swal(nameProduct, "is added to cart !", "success");
    });
});


$('.js-pscroll').each(function () {
    $(this).css('position', 'relative');
    $(this).css('overflow', 'hidden');
    var ps = new PerfectScrollbar(this, {
        wheelSpeed: 1,
        scrollingThreshold: 1000,
        wheelPropagation: false,
    });

    $(window).on('resize', function () {
        ps.update();
    })
});

