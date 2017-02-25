export default angular.module( 'campfire' ).factory(
  'StoryFeed',
  [
    '$http', '$q',
    function( $http, $q ) {
        var StoryFeed = function( baseUrl ) {
          this.url = baseUrl || 'http://localhost:3000';
        }

        StoryFeed.prototype.query = function( filters ) {
          var deferred = $q.defer();

           $http( {
             method: 'get',
             url: this.url + '/stories',
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

        // Refactor Query So Get Story is not needed
        StoryFeed.prototype.getStory = function( id ) {
          var deferred = $q.defer();

           $http( {
             method: 'get',
             url: this.url + '/stories/' + id
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

        StoryFeed.prototype.createStory = function( newStory ) {
          var deferred = $q.defer();

          $http( {
            method: 'post',
            url: this.url + '/stories',
            params: newStory
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

        return new StoryFeed;
    }
  ]
);
