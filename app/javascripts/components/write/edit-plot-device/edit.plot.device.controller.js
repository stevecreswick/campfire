export default angular.module( 'campfire' ).controller(
  'EditPlotDeviceController',
  [
    '$scope', '$rootScope', 'PlotDevice', '$routeParams', '$filter',
    function( $scope, $rootScope, PlotDevice, $routeParams, $filter ) {
      $scope.plotDevice = $scope.plotDevice || {};
      $scope.editingDevice = angular.copy( $scope.plotDevice );

      $scope.updateDevice = function() {
        console.log('updating device');

        PlotDevice.updateDevice( $scope.editingDevice ).then(
          function( success ) {
            $scope.plotDevice = success.data

            $rootScope.$broadcast( 'plotDeviceUpdated', success.data );
          },
          function( reason ) {
            console.error( reason );
          }
        )
      };

      $rootScope.$on( 'newUserInputCreated', function( event, newUserInput ) {
        if ( newUserInput.plot_device_id === $scope.plotDevice.id ) {
          $scope.plotDevice.user_inputs.push( newUserInput );
        }
      } );
    }
  ]
);
