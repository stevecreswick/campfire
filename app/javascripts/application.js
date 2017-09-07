import angular from 'angular'
import ngRoute from 'angular-route'
import ngCookies from 'angular-cookies'
import ngInfiniteScroll from 'ng-infinite-scroll'

import indexTemplate from 'html-loader!./../index.html'
import showTemplate from 'html-loader!./templates/show.html'
import writingTemplate from 'html-loader!./templates/write.html'
import editStoryTemplate from 'html-loader!./templates/edit.html'
import authorTemplate from 'html-loader!./templates/author.html'
import authorsTemplate from 'html-loader!./templates/authors.html'

export default angular.module(
  'campfire',
  [ ngRoute, ngCookies, ngInfiniteScroll ] )
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

        $routeProvider.when(
          '/write',
          {
            template: writingTemplate
          }
        );

        $routeProvider.when(
          '/:username/:story_id/edit',
          {
            template: editStoryTemplate
          }
        );

        $routeProvider.when(
          '/authors/:username',
          {
            template: authorTemplate
          }
        );

        $routeProvider.when(
          '/authors',
          {
            template: authorsTemplate
          }
        );

        $routeProvider.otherwise( {
          template: showTemplate
        } );

        $locationProvider.html5Mode( true ).hashPrefix( '!' );
      }
  ]
).run( function( $rootScope  ) {

} );
