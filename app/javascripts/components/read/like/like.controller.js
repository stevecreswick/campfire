export default angular.module( 'campfire' ).controller(
  'LikeController',
  [
    '$scope', 'Operation',
    function( $scope, Operation ) {
      $scope.likeStory = function() {
        var slug = '/stories/' + $scope.story.id + '/likes';
        var like = {
          value: 1,
          user_id: $scope.currentUser.id
        };

        Operation.write( slug, like ).then(
          function( response ) {
            console.log(response);
          },
          function( reason ) {
            console.error( reason );
          }
         );
      };
    }
  ]
);
