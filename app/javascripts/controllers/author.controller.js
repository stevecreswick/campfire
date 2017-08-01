export default angular.module( 'campfire' ).controller(
  'AuthorController',
  [
    '$scope', '$rootScope', '$routeParams', 'Operation',
    function( $scope, $rootScope, $routeParams, Operation ) {

      Operation.query( '/users/' + $routeParams[ 'username' ] ).then(
        function( response ) {
          $scope.author = response.data;
        },
        function( error ) {
          console.log(error);
        }
      );

      $scope.editing = false;

      $scope.editAuthor = function() {
        $scope.editing = !$scope.editing;
        $scope.editingAuthor = angular.copy( $scope.author );
      };

      $scope.submitEditedUser = function() {
        console.log( $scope.editingAuthor );

        Operation.update( '/users', $scope.editingAuthor ).then(
          function( response ) {
            console.log( response );
            $scope.author = response.data
            $scope.editing = false;
          },
          function( error ) {
            console.log(error);
          }
        );
      };

      // Profile Bottom
      $scope.showStories = true;
      $scope.showFollowers = false;
      $scope.showFollowing = false;

      $scope.changeView = function( section ) {
        if ( section === 'stories' ) {
          $scope.showStories = true;
          $scope.showFollowers = false;
          $scope.showFollowing = false;
        }
        else if ( section === 'followers' ) {
          $scope.showStories = false;
          $scope.showFollowers = true;
          $scope.showFollowing = false;
        }
        else if ( section === 'following' ) {
          $scope.showStories = false;
          $scope.showFollowers = false;
          $scope.showFollowing = true;
        }
      };

    }
  ]
);
