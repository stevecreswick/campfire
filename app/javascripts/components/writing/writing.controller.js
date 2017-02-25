export default angular.module( 'campfire' ).controller(
  'WritingController',
  [
    '$scope', '$rootScope', 'StoryFeed',
    function( $scope, $rootScope, StoryFeed ) {

      $scope.$watch( 'currentUser', function( user ) {
        if ( user ) {
          StoryFeed.query( { 'user_id': user.id } ).then(
            function( success ) {
              console.log('query was run');
              $scope.userStories = success.data.stories;
            },
            function( error ) {
              console.error( 'No data returned for feed.' );
            }
          );
        }
      } );

      $scope.query = function() {
        // Query Function for Infinite Scroll
      };
    }
  ]
);
