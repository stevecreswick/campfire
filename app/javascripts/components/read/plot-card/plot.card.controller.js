export default angular.module( 'campfire' ).controller(
  'PlotCardController',
  [
    '$scope', '$rootScope', 'PlotDevice', '$routeParams', '$filter',
    function( $scope, $rootScope, PlotDevice, $routeParams, $filter ) {
      $scope.plotDevice = $scope.plotDevice || {};
    }
  ]
);
