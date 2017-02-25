export default angular.module( 'campfire' ).controller(
  'NewStoryController',
  [
    '$scope', '$rootScope', 'StoryFeed', '$q',
    function( $scope, $rootScope, StoryFeed, $q ) {
      $scope.newStory = {
        'user_id': $rootScope.currentUser.id
      };

      $scope.createNewStory = function() {
        StoryFeed.createStory( $scope.newStory ).then(
          function( success ){
            console.log('success');
            console.log(success.data.id);
            // $location.path( '/users');
            // Redirect to the edit page for the story
          },
          function( error ) {
            console.log('error');
          }
        );
      };
    }
  ]
);
