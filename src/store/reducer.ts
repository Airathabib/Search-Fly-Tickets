import { combineReducers } from "@reduxjs/toolkit";

import filtersReducer from '../handlers/filters/filterSlice';
import ticketsReducer from '../handlers/ticketsHandlers/ticketsSlice';


const reducer = combineReducers({
	filters: filtersReducer,
	tickets: ticketsReducer,
})

export default reducer;
