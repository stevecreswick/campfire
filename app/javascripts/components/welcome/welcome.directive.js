import welcomeTemplate from 'html-loader!./welcome.view.html'

export default angular.module( 'campfire' ).directive(
  'welcome',
  [
    function() {
      return {
        restrict: 'E',
        template: welcomeTemplate,
        controller: 'WelcomeController',
        link: function( scope, element, attrs ) {

        }
      }
    }
  ]
)
