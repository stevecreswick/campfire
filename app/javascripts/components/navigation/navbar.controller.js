export default angular.module( 'campfire' ).controller(
  'NavbarController',
  [
    '$scope', '$rootScope', '$location',
    function( $scope, $rootScope, $location ) {
      $scope.logout = function() {
        $rootScope.session.logout();
        $location.path( '/' );
      };
    }
  ]
);
