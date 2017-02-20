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
             url: this.url + '/stories'
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

        return new StoryFeed;
    }
  ]
);
