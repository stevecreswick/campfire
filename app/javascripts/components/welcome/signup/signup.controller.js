export default angular.module('campfire').controller(
  'SignupController',
  [
    '$scope', '$rootScope', 'Session', '$cookies', 'Operation',
    function( $scope, $rootScope, Session, $cookies, Operation ) {
      $scope.signup = {
        username: null,
        password: null,
        passwordConfirm: null
      };

      $scope.signupSubmit = function() {
        Operation.create( '/users', $scope.signup ).then(
          function( success ) {
            console.log('IT WORKED ', success);
          },
          function( reason ) {
            console.log( 'It DIDN ', reason );
          }
        )


        // This is a Login
        // Session.login( loginInfo ).then(
        //   function( success ) {
        //     const user = success.data;
        //
        //     $rootScope.currentUser = user;
        //     storeAccessToken( user );
        //   },
        //   function( error ) {
        //     $scope.error = "There was an error logging you in."
        //     console.log('login failed');
        //   }
        // );
      }
    }
  ]
);
