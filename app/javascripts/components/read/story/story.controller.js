export default angular.module( 'campfire' ).controller(
  'StoryController',
  [
    '$scope', '$rootScope', 'StoryFeed', '$routeParams', '$filter',
    '$document', '$attrs', 'Operation',
    function( $scope, $rootScope, StoryFeed, $routeParams, $filter,
              $document, $attrs, Operation
    ) {
      const STORY_URL = '/stories/' + $routeParams[ 'story_id' ];
      $scope.userStory = false;

      var checkUserStory = function() {
        var currentUserId   =   $rootScope.currentUser.id,
            storyUserId     =   $scope.story.author.id;



        currentUserId === storyUserId ?
          $scope.userStory = true :
          $scope.userStory = false;
      };

      Operation.query( STORY_URL ).then(
        function( response ) {
          $scope.story = response.data;
          console.log(response);
          if ( $scope.story ) {
            $scope.plotDeviceDisplayed = [];
            $scope.plotDeviceDisplayed.push( $scope.story.plot_devices[ 0 ] );
            checkUserStory();
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
