export default angular.module( 'campfire' ).controller(
  'EditStoryController',
  [
    '$scope', '$routeParams', 'StoryFeed',
    function( $scope, $routeParams, StoryFeed ) {
      const storyId = $routeParams[ 'story_id' ];

      StoryFeed.getStory( storyId ).then(
        function( success ) {
          $scope.editingStory = success.data;

          debugger;

          // $scope.storySnippets = $scope.editingStory.tellings[ 0 ][ 'story_snippets' ];
          //
          // console.log($scope.storySnippets);
        },
        function( error ) {
          console.log(error);
        }
      );
    }
  ]
);
