export default angular.module('campfire').controller(
  'LoginController',
  [
    '$scope', '$rootScope', 'Session', '$cookies',
    function( $scope, $rootScope, Session, $cookies ) {

      var storeAccessToken = function( user ) {
        const expireDate = new Date();
        expireDate.setFullYear( expireDate.getFullYear() + 1 );

        $cookies.put(
          'auth_token',
          user.auth_token,
          { 'expires': expireDate }
        );
      };

      $scope.loginSubmit = function() {
        var loginInfo = {
          username: $scope.username,
          password: $scope.password
        };

        Session.login( loginInfo ).then(
          function( success ) {
            const user = success.data;

            $rootScope.currentUser = user;
            storeAccessToken( user );
          },
          function( error ) {
            $scope.error = "There was an error logging you in."
            console.log('login failed');
          }
        );
      }
    }
  ]
);
