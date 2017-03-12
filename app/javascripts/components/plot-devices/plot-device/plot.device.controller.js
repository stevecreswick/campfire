export default angular.module( 'campfire' ).controller(
  'PlotDeviceController',
  [
    '$scope', '$rootScope', 'PlotDevice', '$routeParams', '$filter',
    function( $scope, $rootScope, PlotDevice, $routeParams, $filter ) {
      $scope.plotDevice = $scope.plotDevice || {};

      $rootScope.$on( 'newUserInputCreated', function( event, newUserInput ) {
        if ( newUserInput.plot_device_id === $scope.plotDevice.id ) {
          $scope.plotDevice.user_inputs.push( newUserInput );
        }
      } );
    }
  ]
);
