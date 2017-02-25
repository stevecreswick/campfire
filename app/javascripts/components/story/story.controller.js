export default angular.module( 'campfire' ).controller(
  'StoryController',
  [
    '$scope', 'StoryFeed', '$routeParams',
    function( $scope, StoryFeed, $routeParams ) {

      StoryFeed.getStory( $routeParams[ 'story_id' ] ).then(
        function( success ) {
          $scope.story = success.data;
          console.log( $scope.story );
        },
        function( error ) {
          console.log(error);
        }
      );
    }
  ]
);
