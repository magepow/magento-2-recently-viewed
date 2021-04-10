
/**
 *
 * @copyright Copyright © 2020 Magepow. All rights reserved.
 * @author    @copyright Copyright (c) 2014 Magepow (<https://www.magepow.com>)
 * @license <https://www.magepow.com/license-agreement.html>
 * @Author: magepow<support@magepow.com>
 * @github: <https://github.com/magepow>
 */
define([
    'ko',
    'underscore',
    'Magento_Ui/js/grid/listing',
    "jquery",
    'mage/storage',
    'mage/url',
    'magepow/slick'
], function (ko, _, Listing, $, storage, url, slick) {
    'use strict';
    var mixin = {
        addSlickSlider : function(){
            $(".magepow-recently-viewed").slick({
               arrows: true, autoplay: true, autoplaySpeed: 3000, dots: false, infinite: true, padding: 15, responsive: [{breakpoint: 1921, settings: {slidesToShow: 5}}, {breakpoint: 1920, settings: {slidesToShow: 5}}, {breakpoint: 1480, settings: {slidesToShow: 4}}, {breakpoint: 1200, settings: {slidesToShow: 4}}, {breakpoint: 992, settings: {slidesToShow: 3}}, {breakpoint: 768, settings: {slidesToShow: 3}}, {breakpoint: 576, settings: {slidesToShow: 2}}, {breakpoint: 481, settings: {slidesToShow: 1}}, {breakpoint: 361, settings: {slidesToShow: 1}}, {breakpoint: 1, settings: {slidesToShow: 1}}], rows: 1 , slidesToShow: 5, speed: 300, vertical: false, verticalSwiping: false
            });
        }

    };
    return function (target) { 
        return target.extend(mixin);
    };

});
