
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

    return Listing.extend({
        defaults: {
            additionalClasses: '',
            filteredRows: {},
            limit: 5,
            listens: {
                elems: 'filterRowsFromCache',
                '${ $.provider }:data.items': 'filterRowsFromServer'
            }
        },

        options:{
            gridSlider: '.magepow-recently-viewed'

        },

        /** @inheritdoc */
        initialize: function () {
            var self = this;
            this._super();
            this.filteredRows = ko.observable({});
            this.initProductsLimit();            
        },


        /**
         * Initialize product limit
         * Product limit can be configured through Ui component.
         * Product limit are present in widget form
         *
         * @returns {exports}
         */
        initProductsLimit: function () {
            if (this.source['page_size']) {
                this.limit = this.source['page_size'];
            }

            return this;
        },

        /**
         * Initializes observable properties.
         *
         * @returns {Listing} Chainable.
         */
        initObservable: function () {
            this._super()
                .track({
                    rows: []
                });

            return this;
        },

        /**
         * Sort and filter rows, that are already in magento storage cache
         *
         * @return void
         */
        filterRowsFromCache: function () {
            this._filterRows(this.rows);
        },

        /**
         * Sort and filter rows, that are come from backend
         *
         * @param {Object} rows
         */
        filterRowsFromServer: function (rows) {
            this._filterRows(rows);

        },

        /**
         * Filter rows by limit and sort them
         *
         * @param {Array} rows
         * @private
         */
        _filterRows: function (rows) {
            this.filteredRows(_.sortBy(rows, 'added_at').reverse().slice(0, this.limit));
            
        },


        addSlickSlider: function() {
            var self = this;
            $(self.options.gridSlider).slick({
               arrows: true, autoplay: true, autoplaySpeed: 3000, dots: false, infinite: true, padding: 15, responsive: [{breakpoint: 1921, settings: {slidesToShow: 5}}, {breakpoint: 1920, settings: {slidesToShow: 5}}, {breakpoint: 1480, settings: {slidesToShow: 4}}, {breakpoint: 1200, settings: {slidesToShow: 4}}, {breakpoint: 992, settings: {slidesToShow: 3}}, {breakpoint: 768, settings: {slidesToShow: 3}}, {breakpoint: 576, settings: {slidesToShow: 2}}, {breakpoint: 481, settings: {slidesToShow: 1}}, {breakpoint: 361, settings: {slidesToShow: 1}}, {breakpoint: 1, settings: {slidesToShow: 1}}], rows: 1 , slidesToShow: 5, speed: 300, vertical: false, verticalSwiping: false
            });
        },

        /**
         * Can retrieve product url
         *
         * @param {Object} row
         * @returns {String}
         */
        getUrl: function (row) {
            return row.url;
        },

        /**
         * Get product attribute by code.
         *
         * @param {String} code
         * @return {Object}
         */
        getComponentByCode: function (code) {
            var elems = this.elems() ? this.elems() : ko.getObservable(this, 'elems'),
                component;
            component = _.filter(elems, function (elem) {
                return elem.index === code;
            }, this).pop();
            
            return component;
        },
      

    });
});
