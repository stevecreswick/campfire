export default angular.module( 'campfire' ).factory(
  'Session',
  [
    '$http', '$q', '$cookies',
    function( $http, $q, $cookies ) {
        var Session = function( baseUrl ) {
          this.url = baseUrl || 'http://localhost:3000';
        }

        Session.prototype.login = function( loginInfo ) {
          var deferred = $q.defer();

           $http( {
             method: 'post',
             url: this.url + '/login',
             params: loginInfo
           } ).then(
             function( success ) {
               deferred.resolve( success );
               console.log('success ', success);
             },
             function( error ) {
               deferred.reject( error );
               console.log('error ', error);
             }
           );

          return deferred.promise;
        }

        return new Session;
    }
  ]
);
