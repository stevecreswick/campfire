import angular from 'angular'
import ngRoute from 'angular-route'
import ngCookies from 'angular-cookies'

import indexTemplate from 'html-loader!./../index.html'
import showTemplate from 'html-loader!./templates/show.html'

export default angular.module( 'campfire', [ ngRoute, ngCookies ] )
.config( [
    '$locationProvider', '$routeProvider', '$httpProvider',
    function( $locationProvider, $routeProvider, $httpProvider ) {
      $routeProvider.when(
        '/',
        {
          template: indexTemplate
        }
      );

      $routeProvider.when(
        '/stories/:story_id',
        {
          template: showTemplate
        }
      );

      $routeProvider.otherwise( {
        template: showTemplate
      } );

      $locationProvider.html5Mode( true ).hashPrefix( '!' );
    }
]);
