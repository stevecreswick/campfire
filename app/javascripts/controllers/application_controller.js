export default angular.module( 'campfire' ).controller(
  'ApplicationController',
  [
    '$scope', '$rootScope', '$cookies', 'Session',
    function( $scope, $rootScope, $cookies, Session ) {
      $rootScope.currentUser = null;

      const authToken = $cookies.get( 'auth_token' );

      if ( authToken ) {
        Session.login( { 'auth_token': authToken } ).then(
          function( success ) {
            $rootScope.currentUser = success.data;
          },
          function( error ) {
            console.log( error );
          }
        )
      }

      $rootScope.logout = function() {
        $rootScope.currentUser = null;
        $cookies.remove( 'auth_token' );
      }
    }
  ]
);
