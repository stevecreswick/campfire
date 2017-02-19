import angular from 'angular'
import ngRoute from 'angular-route'
import ngCookies from 'angular-cookies'

import homeTemplate from 'html-loader!./templates/home.html'
import showTemplate from 'html-loader!./templates/show.html'
import loginTemplate from 'html-loader!./components/login/login.view.html'

export default angular.module( 'campfire', [ ngRoute, ngCookies ] )
.config( [
    '$locationProvider', '$routeProvider', '$httpProvider',
    function( $locationProvider, $routeProvider, $httpProvider ) {
      $routeProvider.when(
        '/',
        {
          template: homeTemplate
        }
      );

      // $routeProvider.when(
      //   '/login',
      //   {
      //     template: loginTemplate
      //   }
      // );

      $routeProvider.otherwise( {
        template: showTemplate
      } );

      $locationProvider.html5Mode( true ).hashPrefix( '!' );
    }
]);
