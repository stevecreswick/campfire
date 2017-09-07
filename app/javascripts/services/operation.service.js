export default angular.module( 'campfire' ).factory(
  'Operation',
  [
    '$http', '$q', '$cookies',
    function( $http, $q, $cookies ) {
      const authToken = $cookies.get( 'auth_token' );

        var Operation = function( baseUrl ) {
          this.url = baseUrl || 'http://localhost:3000';
        }

        Operation.prototype.query = function( slug, filters ) {
          var deferred = $q.defer();
          var filters = filters || {};

          if ( authToken ) {
            filters[ 'auth_token' ] = authToken;
          }

           $http( {
             method: 'get',
             url: this.url + slug,
             params: filters
           } ).then(
             function( success ) {
               deferred.resolve( success );
             },
             function( error ) {
               deferred.reject( error );
             }
           );

          return deferred.promise;
        };

        Operation.prototype.write = function( slug, updated ) {
          var deferred = $q.defer();

          if ( authToken ) {
            updated[ 'auth_token' ] = authToken;

            $http( {
              method: 'POST',
              url: this.url + slug,
              params: updated,
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            } ).then(
              function( success ) {
                deferred.resolve( success );
              },
              function( error ) {
                deferred.reject( error );
              }
            );
          }
          else {
            console.error( 'Request Not Sent: An authorization token was not found.' );
          }

          return deferred.promise;
        };

        Operation.prototype.create = function( slug, updated ) {
          var deferred = $q.defer();

          $http( {
            method: 'POST',
            url: this.url + slug,
            params: updated,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          } ).then(
            function( success ) {
              deferred.resolve( success );
            },
            function( error ) {
              deferred.reject( error );
            }
          );

          return deferred.promise;
        };

        Operation.prototype.update = function( slug, updated ) {
          var deferred = $q.defer();

          $http( {
            method: 'PUT',
            url: this.url + slug,
            params: updated,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          } ).then(
            function( success ) {
              deferred.resolve( success );
            },
            function( error ) {
              deferred.reject( error );
            }
          );

          return deferred.promise;
        };

        return new Operation;
    }
  ]
);
