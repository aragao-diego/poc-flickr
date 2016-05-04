(function(){
    'use strict';

    angular
        .module('pocFlickr')
        .config(configRoutes);

    /* @ngInject */
    function configRoutes($ocLazyLoadProvider, $stateProvider, $urlRouterProvider){
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            templateUrl: 'layouts/main.view.html',
            resolve:  {
            }
        });

        $urlRouterProvider.otherwise('flickr/consulta');
    }
})();
