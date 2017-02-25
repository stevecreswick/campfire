import homeTemplate from 'html-loader!./home.view.html'

export default angular.module( 'campfire' ).directive(
  'home',
  [
    function() {
      return {
        restrict: 'E',
        template: homeTemplate,
        controller: 'HomeController',
        link: function( scope, element, attrs ) {

        }
      }
    }
  ]
)
