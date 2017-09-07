export default angular.module( 'campfire' ).factory(
  'Session',
  [
    '$http', '$q', '$cookies', '$rootScope',
    function( $http, $q, $cookies, $rootScope ) {
      const authToken = $cookies.get( 'auth_token' );

      var storeAccessToken = function( user ) {
        if ( !authToken ) {
          const expireDate = new Date();
          expireDate.setFullYear( expireDate.getFullYear() + 1 );

          $cookies.put(
            'auth_token',
            user.auth_token,
            { 'expires': expireDate }
          );
        }
      };

      var Session = function( baseUrl ) {
        this.url = baseUrl || location.protocol  + '//localhost:3000';
      };

      Session.prototype.login = function( loginInfo ) {
        var deferred = $q.defer();

         $http( {
           method: 'post',
           url: this.url + '/login',
           params: loginInfo
         } ).then(
           function( success ) {
             deferred.resolve( success.data );
             storeAccessToken( success.data );
           },
           function( error ) {
             deferred.reject( error );
           }
         );

        return deferred.promise;
      };

      Session.prototype.checkForUser = function() {
        const deferred = $q.defer();

        if ( authToken ) {
          this.login( { 'auth_token': authToken } ).then(
            function( user ) {
              deferred.resolve( user );
            },
            function( error ) {
              deferred.reject( error );
            }
          );
        }
        else {
          deferred.reject( 'No authorization token present.' );
        }

        return deferred.promise;
      };

      Session.prototype.logout = function() {
        $rootScope.currentUser = null;
        $cookies.remove( 'auth_token' );
      };

      return Session;
    }
  ]
);
