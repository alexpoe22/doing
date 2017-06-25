import { combineReducers } from 'redux';
import handleParks from './handleParks';
import handleSuggestion from './handleSuggestion';
import handleBars from './handleBars';
import handleLocation from './handleLocation';


export default combineReducers({
  handleParks,
  handleSuggestion,
  handleBars,
  handleLocation,
});
