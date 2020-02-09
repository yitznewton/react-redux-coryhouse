import {LOAD_AUTHORS_SUCCESS} from './actionTypes';
import * as authorApi from '../../api/authorApi';

export function loadAuthors() {
  return (dispatch) => {
    return authorApi.getAuthors().then(authors => {
      dispatch({ type: LOAD_AUTHORS_SUCCESS, authors });
    }).catch(error => {
      throw error;
    });
  };
}

