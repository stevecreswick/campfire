export default angular.module( 'campfire' ).controller(
  'PlotDeviceController',
  [
    '$scope', '$rootScope', 'PlotDevice', '$routeParams', '$filter',
    function( $scope, $rootScope, PlotDevice, $routeParams, $filter ) {
      $scope.plotDevice = $scope.plotDevice || {};
    }
  ]
);
