export default angular.module( 'campfire' ).controller(
  'NewStoryController',
  [
    '$scope', '$rootScope', 'StoryFeed', '$location',
    function( $scope, $rootScope, StoryFeed, $location ) {
      $scope.newStory = {};

      $scope.createNewStory = function() {
        $scope.newStory[ 'user_id' ] = $rootScope.currentUser.id;

        StoryFeed.createStory( $scope.newStory ).then(
          function( success ){
            const storyId           = success.data.id,
                  editStoryRedirect = '/' + $rootScope.currentUser.username +
                                      '/' + storyId +
                                      '/edit';

            $location.path( editStoryRedirect );
          },
          function( error ) {
            console.log('error creating new story');
          }
        );
      };
    }
  ]
);
