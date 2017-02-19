import campfireTemplate from 'html-loader!./campfire.view.html'

export default angular.module( 'campfire' ).directive(
  'campfire',
  [
    function() {
      return {
        restrict: 'E',
        template: campfireTemplate,
        controller: 'CampfireController',
        link: function( scope, element, attrs ) {

        }
      }
    }
  ]
)
