export default angular.module( 'campfire' ).controller(
  'ApplicationController',
  [
    '$scope', '$rootScope', '$cookies', 'Session', '$http',
    function( $scope, $rootScope, $cookies, Session, $http ) {
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

      $http.post( '/environment' ).then(
        function( response ) {
          var environment = response.data;
          var apiUrl = environment.apiUrl || 'localhost:3000';

          console.log(apiUrl);
        },
        function( reason ) {
          console.log( ' reason ', reason );
        }
      );

      $rootScope.logout = function() {
        $rootScope.currentUser = null;
        $cookies.remove( 'auth_token' );
      }
    }
  ]
);
