export default class StoriesService {
  constructor( $http ) {
    this.$http = $http

    console.log('in stories service');
  }

  getStories() {
    return this.$http.get( 'https://raw.githubusercontent.com/PokemonGOAPI/PokemonDataGraber/master/output.json' )
  }

}
