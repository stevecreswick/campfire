export default angular.module( 'campfire' ).controller(
  'StoryFeedController',
  [
    '$scope', 'StoryFeed',
    function( $scope, StoryFeed ) {
      StoryFeed.query().then(
        function( success ) {
          $scope.stories = success.data.stories;
          console.log('storiess');
          console.log( $scope.stories );
        },
        function( error ) {
          console.log('stroy err');
          console.log(error);
        }
      )
    }
  ]
);
