export default angular.module( 'campfire' ).controller(
  'PreviewStoryController',
  [
    '$scope', '$rootScope', 'StoryFeed', '$location', '$filter',
    function( $scope, $rootScope, StoryFeed, $location, $filter ) {
      console.log($scope.editingStory);
      // $scope.newStory = {};
      //
      // $scope.createNewStory = function() {
      //   $scope.newStory[ 'user_id' ] = $rootScope.currentUser.id;
      //
      //   StoryFeed.createStory( $scope.newStory ).then(
      //     function( success ){
      //       const storyId           = success.data.id,
      //             editStoryRedirect = '/' + $rootScope.currentUser.username +
      //                                 '/' + storyId +
      //                                 '/edit';
      //
      //       $location.path( editStoryRedirect );
      //     },
      //     function( error ) {
      //       console.log('error creating new story');
      //     }
      //   );
      // };
      $scope.previewTale = false;

      $scope.previewStory = function() {
        $scope.previewTale = !$scope.previewTale;

        if ( $scope.editingStory ) {
          $scope.plotDeviceDisplayed = [];
          $scope.plotDeviceDisplayed.push( $scope.editingStory.plot_devices[ 0 ] );
        }
      };


      $scope.chooseInput = function( userInput ) {
        var filterOptions = {
          arrayToFilter: $scope.editingStory.plot_devices,
          idToFind: userInput.success_id
        };

        var nextDevice = $filter( 'findById' )( filterOptions );

        if ( nextDevice ) {
          $scope.plotDeviceDisplayed.push( nextDevice );
        }
        else {
          console.log( 'The next text could not be found.' );
        }
      };
      // $scope.$watch( 'editingStory', function( story ) {
      //   // $scope.editingStory.plot_devices.push( newPlotDevice );
      //   // $scope.toggleNewSnippet();
      //   // $rootScope.$broadcast( 'runSuccessDevices' );
      // } );
    }
  ]
);
