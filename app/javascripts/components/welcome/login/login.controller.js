export default angular.module('campfire').controller(
  'LoginController',
  [
    '$scope', '$rootScope', '$cookies',
    function( $scope, $rootScope, $cookies ) {
      $scope.login = {
        username: null,
        password: null
      };

      $scope.loginSubmit = function() {
        $rootScope.session.login( $scope.login ).then(
          function( user ) {
            $rootScope.currentUser = user;
          },
          function( reason ) {
            $scope.error = "There was an error logging you in."
            console.log('login failed');
          }
        );
      }
    }
  ]
);
