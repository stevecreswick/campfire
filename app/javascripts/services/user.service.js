export default angular.module( 'campfire' ).factory(
  'User',
  [
    '$http', '$q', '$cookies', '$rootScope', 'Operation',
    function( $http, $q, $cookies, $rootScope, Operation ) {
      return function( newUser ) {
        console.log(newUser);

        var createUser = function( user ) {
          Operation.create( '/users' ).then(
            function( success ) {

            },
            function( reason ) {

            }
          )
        };
      }
    }
  ]
);
