import modalPopSlice from 'features/modalPopUp/modalPopSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  modal: modalPopSlice,
});
export default rootReducer;
