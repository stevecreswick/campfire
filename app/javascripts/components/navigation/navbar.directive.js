import navbarTemplate from 'html-loader!./navbar.template.html'

export default angular.module( 'campfire' ).directive(
  'navbar',
  [
    function() {
      return {
        restrict: 'A',
        template: navbarTemplate,
        controller: 'NavbarController',
        link: function( scope, element, attrs ) {

        }
      }
    }
  ]
)
