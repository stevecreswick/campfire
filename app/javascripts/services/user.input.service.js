export default angular.module( 'campfire' ).factory(
  'UserInput',
  [
    '$http', '$q',
    function( $http, $q ) {
        var UserInput = function( baseUrl ) {
          this.url = baseUrl || 'http://localhost:3000';
        }

        UserInput.prototype.createInput = function( newInput ) {
          var deferred = $q.defer();

          $http( {
            method: 'post',
            url: this.url + '/user_inputs',
            params: newInput
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

        return new UserInput;
    }
  ]
);
