export default angular.module( 'campfire' ).controller(
  'EditStoryController',
  [
    '$scope', '$rootScope', '$routeParams', 'Operation',
    function( $scope, $rootScope, $routeParams, Operation ) {
      const STORY_URL = '/stories/' + $routeParams[ 'story_id' ];

      Operation.query( STORY_URL ).then(
        function( response ) {
          $scope.editingStory = response.data;
        },
        function( reason ) {
          console.error( reason );
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
