(function(){
    'use strict';

    angular.module('pocFlickr.routes', ['ui.router', 'oc.lazyLoad']);

    angular
        .module('pocFlickr', [
            'ngMaterial',
            'pocFlickr.routes'
        ]);
})();
