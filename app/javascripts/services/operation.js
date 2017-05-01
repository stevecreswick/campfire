export default angular.module( 'campfire' ).factory(
  'Operation',
  [
    '$http', '$q',
    function( $http, $q ) {
        var Operation = function( baseUrl ) {
          this.url = baseUrl || 'http://localhost:3000';
        }

        Operation.prototype.query = function( slug, filters ) {
          var deferred = $q.defer();

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
