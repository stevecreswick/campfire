export default angular.module( 'campfire' ).controller(
  'PlotCardController',
  [
    '$scope', '$rootScope', 'PlotDevice', '$routeParams', '$filter', '$attrs',
    function( $scope, $rootScope, PlotDevice, $routeParams, $filter, $attrs ) {
      $scope.plotDevice = $scope.plotDevice || {};

      if ( $attrs.backTracking === 'true' ) {
        $scope.backTracking = true;
      }
    }
  ]
);
