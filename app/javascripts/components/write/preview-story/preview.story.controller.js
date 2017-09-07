export default angular.module( 'campfire' ).controller(
  'PreviewStoryController',
  [
    '$scope', '$rootScope', 'StoryFeed', '$location', '$filter', '$timeout',
    function( $scope, $rootScope, StoryFeed, $location, $filter, $timeout ) {
      $scope.inputsChosen = [];
      $scope.storyIndex = 0;

      var resetSelectedInputs = function( plotDevice ) {
        console.log(plotDevice);
        var userInputs = plotDevice.user_inputs;

        if ( userInputs.length > 0 ) {
          for ( var i = 0; i < userInputs.length; i++ ) {
            userInputs[ i ].selected = false;
          }
        }
      };

      $scope.$watch( 'editingStory', function( story ) {
        if ( story ) {
          $scope.plotDeviceDisplayed = [];
          $scope.plotDeviceDisplayed.push( story.plot_devices[ 0 ] );
        }
      } );

      $scope.resetStory = function() {
        if ( $scope.editingStory ) {
          $scope.plotDeviceDisplayed = [];
          $scope.storyIndex = 0;
          $scope.plotDeviceDisplayed.push( $scope.editingStory.plot_devices[ $scope.storyIndex ] );

          for ( var i = 0; i < $scope.editingStory.plot_devices.length; i++ ) {
            resetSelectedInputs( $scope.editingStory.plot_devices[ i ] );
          }
        }
      };

      // --------
      $scope.previousCard = function() {
        if ( $scope.storyIndex > 0 ) {
          $scope.storyIndex--;
        }
      };

      $scope.nextCard = function() {
        if ( $scope.storyIndex < $scope.plotDeviceDisplayed.length - 1 ) {
          $scope.storyIndex++;
        }
      };

      $scope.chooseInput = function( userInput, index ) {
        var filterOptions = {
          arrayToFilter: $scope.editingStory.plot_devices,
          idToFind: userInput.success_id
        };

        resetSelectedInputs( $scope.plotDeviceDisplayed[ $scope.storyIndex ] );
        userInput.selected = true;

        var nextDevice = $filter( 'findById' )( filterOptions );

        if ( nextDevice ) {
          nextDevice.inputChosen = userInput;

          if ( $scope.storyIndex === $scope.plotDeviceDisplayed.length - 1 ) {
            // Add to the end of the array
            $scope.plotDeviceDisplayed.push( nextDevice );
            $scope.storyIndex = $scope.plotDeviceDisplayed.length - 1;
            $scope.inputsChosen.push( index );
          }
          else {
            // Remove all inputs after this one, then add
            $scope.plotDeviceDisplayed.length = $scope.storyIndex + 1;
            $scope.plotDeviceDisplayed.push( nextDevice );

            $scope.storyIndex = $scope.plotDeviceDisplayed.length - 1;

            $scope.inputsChosen.length = $scope.storyIndex - 1;
            $scope.inputsChosen.push( index );
          }
        }
        else {
          console.log( 'The next text could not be found.' );
        }
      };
    }
  ]
);
