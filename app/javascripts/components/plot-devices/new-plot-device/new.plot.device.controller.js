export default angular.module( 'campfire' ).controller(
  'NewPlotDeviceController',
  [
    '$scope', '$rootScope', 'PlotDevice', '$routeParams',
    function( $scope, $rootScope, PlotDevice, $routeParams ) {
      $scope.newPlotDevice = {};

      $scope.createNewSnippet = function() {
        $scope.newPlotDevice[ 'type_name' ]  =   'prose';
        $scope.newPlotDevice[ 'story_id' ]   =   $scope.editingStory.id;

        PlotDevice.createSnippet( $scope.newPlotDevice ).then(
          function( success ) {
            $rootScope.$broadcast( 'newPlotDeviceCreated', $scope.newPlotDevice )
            $scope.$destroy();
          },
          function( error ) {
            console.log('error ', error);
          }
        );
      };
    }
  ]
);
