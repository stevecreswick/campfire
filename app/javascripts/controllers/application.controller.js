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
          $rootScope.apiUrl = location.protocol + ( environment.apiUrl || '//localhost:3000' );

          console.log( $rootScope.apiUrl );
        },
        function( reason ) {
          $rootScope.apiUrl = location.protocol + '//localhost:3000';
          console.log( ' reason ', reason );

          console.log( $rootScope.apiUrl );
        }
      );

      $rootScope.logout = function() {
        $rootScope.currentUser = null;
        $cookies.remove( 'auth_token' );
      }
    }
  ]
);
