import {
  SHOW_ALERT, HIDDEN_ALERT
} from '../types';

const initialState = {
  alert: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}