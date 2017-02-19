import angular from 'angular'
import uirouter from 'angular-ui-router'

import routes from './stories.routes.js'
import storiesList from './stories-list/stories-list.component'
import StoriesService from './stories.service'

export default angular.module( 'campfire.stories', [ uirouter ] )
  .config( routes )
  .component( 'storiesList', storiesList )
  .service( 'StoriesService', StoriesService )
  .name
