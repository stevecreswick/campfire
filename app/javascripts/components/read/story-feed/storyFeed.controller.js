export default angular.module( 'campfire' ).controller(
  'StoryFeedController',
  [
    '$scope', 'StoryFeed',
    function( $scope, StoryFeed ) {

      // Add ability to query by a users post
      
      StoryFeed.query().then(
        function( success ) {
          $scope.stories = success.data.stories;
        },
        function( error ) {
          console.error( 'No data returned for feed.' );
        }
      )

      $scope.query = function() {
        // Query Function for Infinite Scroll
      };
    }
  ]
);
