export default angular.module( 'campfire' ).controller(
  'AuthorsController',
  [
    '$scope', '$rootScope', 'Operation',
    function( $scope, $rootScope,  Operation ) {
      console.log('authors controller');

      Operation.query( '/users' ).then(
        function( response ) {
          console.log( response );
          $scope.authors = response.data.users;
        },
        function( error ) {
          console.log(error);
        }
      );
    }
  ]
);
