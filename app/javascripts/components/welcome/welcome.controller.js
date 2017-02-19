export default angular.module( 'campfire' ).controller(
  'WelcomeController',
  [
    '$scope', '$rootScope',
    function( $scope, $rootScope ) {
      console.log('home controller');
    }
  ]
);
