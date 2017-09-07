export default angular.module( 'campfire' ).controller(
  'StoryController',
  [
    '$scope', 'StoryFeed', '$routeParams', '$filter', '$document', '$attrs', 'Operation',
    function( $scope, StoryFeed, $routeParams, $filter, $document, $attrs, Operation ) {
      const STORY_URL = '/stories/' + $routeParams[ 'story_id' ];

      Operation.query( STORY_URL ).then(
        function( response ) {
          $scope.story = response.data;

          if ( $scope.story ) {
            $scope.plotDeviceDisplayed = [];
            $scope.plotDeviceDisplayed.push( $scope.story.plot_devices[ 0 ] );
          }
        },
        function( reason ) {
          console.error( reason );
        }
      );

      $scope.storyIndex = 0;

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

      $scope.chooseInput = function( userInput ) {
        var filterOptions = {
          arrayToFilter: $scope.story.plot_devices,
          idToFind: userInput.success_id
        };

        var nextDevice = $filter( 'findById' )( filterOptions );

        if ( nextDevice ) {
          $scope.plotDeviceDisplayed.push( nextDevice );
          $scope.storyIndex = $scope.plotDeviceDisplayed.length - 1;
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
