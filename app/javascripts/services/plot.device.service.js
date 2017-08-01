export default angular.module( 'campfire' ).factory(
  'PlotDevice',
  [
    '$http', '$q',
    function( $http, $q ) {
        var PlotDevice = function( baseUrl ) {
          this.url = baseUrl || 'http://localhost:3000';
        }

        PlotDevice.prototype.createSnippet = function( newPlotDevice ) {
          var deferred = $q.defer();

          $http( {
            method: 'post',
            url: this.url + '/plot_devices',
            params: newPlotDevice
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

        PlotDevice.prototype.updateDevice = function( updatedDevice ) {
          var deferred = $q.defer();

          $http( {
            method: 'PUT',
            url: this.url + '/plot_devices',
            params: updatedDevice,
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

        return new PlotDevice;
    }
  ]
);
