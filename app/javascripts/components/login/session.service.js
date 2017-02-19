export default angular.module( 'campfire' ).factory(
  'Session',
  [
    '$http', '$q',
    function( $http, $q ) {
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
             },
             function( error ) {
               deferred.reject( error );
             }
           );

          return deferred.promise;
        }

        return new Session;
    }
  ]
);
