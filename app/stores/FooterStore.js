import alt from '../alt';
import FooterActions from '../actions/FooterActions';

// https://github.com/ethan-deng/Redux-vs-Alt#storesreducer

class FooterStore {
 constructor() {
   // glue to bind actions to their handlers defined here in the store
   this.bindActions(FooterActions);
   this.characters = [];
   // ^^ becomes part of the state, so when FooterStore.getState() is called from component, it receuves the current state of the store as specified here
 }

// action hanndler (on-)getTopCharactersSuccess, which updates the store w/ new data for top 5 characters
  // there's a store listener in the footer component which listens for this updates and re-renders UI
 onGetTopCharactersSuccess(data) {
   this.characters = data.slice(0, 5);
 }

 // action handler (on-)getTopCharactersFail
 onGetTopCharactersFail(jqXhr) {
   // handle multiple response formats, fallback to HTTP status code number
    // toastr is a JS notification library (http://codeseven.github.io/toastr/demo.html)
   toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
 }
}

export default alt.createStore(FooterStore);