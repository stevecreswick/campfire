export default angular.module( 'campfire' ).controller(
  'StoryController',
  [
    '$scope', 'StoryFeed', '$routeParams',
    function( $scope, StoryFeed, $routeParams ) {

      StoryFeed.getStory( $routeParams[ 'story_id' ] ).then(
        function( success ) {
          $scope.story = success.data;

          if ( $scope.story ) {
            $scope.plotDeviceDisplayed = [];

            $scope.plotDeviceDisplayed.push( $scope.story.plot_devices[ 0 ] );
          }
        },
        function( error ) {
          console.log(error);
        }
      );


    }
  ]
);
