import { SHOW_ALERT, HIDDEN_ALERT } from '../types';

export function showAlertAction(alert) {
  return (dispatch) => {
    dispatch(showAlert(alert));
  };
}

const showAlert = (alert) => ({
  type: SHOW_ALERT,
  payload: alert
});


export function hiddenAlertAction() {
  return (dispatch) => {
    dispatch(hiddenAlert());
  };
}

const hiddenAlert = () => ({
  type: HIDDEN_ALERT
});
