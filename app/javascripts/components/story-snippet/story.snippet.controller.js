export default angular.module( 'campfire' ).controller(
  'StorySnippetController',
  [
    '$scope', 'StoryFeed', '$routeParams',
    function( $scope, StoryFeed, $routeParams ) {

      console.log('snippet ', $scope.snippet);

    }
  ]
);
