(function(){
    'use strict';

    angular.module('pocFlickr.flickr.services', [] );
    angular.module('pocFlickr.flickr.routes', ['ui.router', 'oc.lazyLoad']);

    angular
        .module('pocFlickr.flickr', [
            'pocFlickr.flickr.services',
            'pocFlickr.flickr.routes'
        ]);
})();
