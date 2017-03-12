export default angular.module( 'campfire' ).factory(
  'StoryParser',
  [
    '$http', '$q',
    function( $http, $q ) {
        var StoryParser = function( baseUrl ) {
          this.url = baseUrl || 'http://localhost:3000';
        }

/*
        // user
        //   - plot device - have story snippets
        //       - types
        //           - characters
        //   - story
        //     - tellings
        //       - story_snippets
                      * title
                      * description
                      * plot device
                          * type name
                          * message
                          * title
        //         - child_story_snippets


        Types:
          prose
            ( does not have a parent plot device )
            - dialogue
            ( prose with a parent plot device of
              type character )
          character
        {
          title:
          description:
          tellings: [
            {
              title:
              description:
              story_snippets: [
                0 {
                    title:
                    description:
                    plot_device: {
                      type_name: character
                      title: 'Steve'
                      child_plot_devices: [
                        // Dialoge is just a paragraph plot device that belongs to a character plot device
                        // A challenge is just a stat check plot device
                     ]
                    },
                    child_snippets: [
                      0 {
                          title:
                          description:
                          plot_device: {
                            type_name:
                            title:
                            message:
                          },
                          child_snippets: [
                            0 { },
                            1 { },
                            2 { }
                          ]
                        },
                      1 { },
                      2 { }
                    ]
                  },

                  1 {
                      title:
                      description:
                      plot_device: {
                        type_name:
                        title:
                        message:
                      },
                      child_snippets: [
                        0 { },
                        1 { },
                        2 { }
                      ]
                    }
              ]
            }
          ]
        }

    */



        return new StoryParser;
    }
  ]
);
