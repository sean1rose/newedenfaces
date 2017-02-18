import alt from '../alt';

class FooterActions {
  constructor() {
    // actions to hit the reducer store
    this.generateActions(
      'getTopCharactersSuccess',
      'getTopCharactersFail'
    );
    /* ^ IS EQUIVALENT TO...
    getTopCharactersSuccess(payload) {
      this.dispatch(payload);
    }

    getTopCharactersFail(payload) {
      this.dispatch(payload);
    }
    */
  }

  getTopCharacters() {
    // action fetches data, then action to notify store whether fetch was (un)successful
    $.ajax({ url: '/api/characters/top' })
      .done((data) => {
        // if successful -> update the store and re-render the component w/ new data
        this.actions.getTopCharactersSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getTopCharactersFail(jqXhr);
      });
  }
}

export default alt.createActions(FooterActions);