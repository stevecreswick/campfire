export default angular.module( 'campfire' ).controller(
  'EditStoryController',
  [
    '$scope', '$rootScope', '$routeParams', 'StoryFeed',
    function( $scope, $rootScope, $routeParams, StoryFeed ) {
      const storyId = $routeParams[ 'story_id' ];

      StoryFeed.getStory( storyId ).then(
        function( success ) {
          $scope.editingStory = success.data;
        },
        function( error ) {
          console.log( error );
        }
      );

      $scope.addingSnippet = false;

      $scope.toggleNewSnippet = function() {
        $scope.addingSnippet = !$scope.addingSnippet;
      };

      $rootScope.$on( 'newPlotDeviceCreated', function( event, newPlotDevice ) {
        $scope.editingStory.plot_devices.push( newPlotDevice );
        $scope.toggleNewSnippet();
        $rootScope.$broadcast( 'runSuccessDevices' );
      } );
    }
  ]
);
