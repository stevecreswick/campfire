export default angular.module( 'campfire' ).controller(
  'ApplicationController',
  [
    '$scope', '$rootScope', 'Session', '$location',
    function( $scope, $rootScope, Session, $location ) {
      var environments = require( './../../../environments.js' );
      var environment;

      if ( environments ) {
        $location.host() === 'localhost' ?
          environment = environments[ 'development' ] :
          environment = environments[ 'production' ];

        if ( environment ) {
          $rootScope.session = new Session( environment[ 'apiUrl' ] );

          $rootScope.session.checkForUser().then(
            function( user ) {
              $rootScope.currentUser = user;
            },
            function( reason ) {
              $location.path( '/' );
            }
          );
        }
        else {
          console.error( 'No API URL Found.' )
        }
      }
    }
  ]
);
