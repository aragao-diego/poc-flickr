(function(){
    'use strict';

    angular
        .module('pocFlickr')
        .config(configRoutes);

    /* @ngInject */
    function configRoutes($ocLazyLoadProvider, $stateProvider, $urlRouterProvider){
        $stateProvider
            .state('app.flickr', {
                url: '/flickr',
                abstract: true,
                template: '<ui-view style="width: 100%; height: 100%";/>',
                resolve:  {
                }
            })
            .state('app.flickr.consulta', {
                url: '/consulta',
                templateUrl: 'modules/flickr/views/flickr-consulta.view.html',
                resolve:  {
                }
            });
    }
})();
