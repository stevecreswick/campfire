export default angular.module( 'campfire' ).controller(
  'StoryController',
  [
    '$scope', 'StoryFeed', '$routeParams', '$filter', '$document',
    function( $scope, StoryFeed, $routeParams, $filter, $document ) {

      StoryFeed.getStory( $routeParams[ 'story_id' ] ).then(
        function( success ) {
          $scope.story = success.data;

          if ( $scope.story ) {
            $scope.plotDeviceDisplayed = [];
            $scope.plotDeviceDisplayed.push( $scope.story.plot_devices[ 0 ] );
          }
        },
        function( error ) {
          console.log( error );
        }
      );

      $scope.chooseInput = function( userInput ) {
        var filterOptions = {
          arrayToFilter: $scope.story.plot_devices,
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

      $document.on( 'keyup', function( event ) {
        var lastIndex     =   $scope.plotDeviceDisplayed.length - 1,
            plotDevice    =   $scope.plotDeviceDisplayed[ lastIndex ],
            inputIndex    =   parseInt( event.key ) - 1;

        if ( plotDevice.user_inputs[ inputIndex ] ) {
          $scope.chooseInput( plotDevice.user_inputs[ inputIndex ] );
          $scope.$apply();
        }
      } );

      $scope.$on( '$destroy', function() {
        $document.unbind( 'keyup' );
      } );
    }
  ]
);
