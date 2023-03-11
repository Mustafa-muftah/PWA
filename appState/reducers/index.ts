import { combineReducers } from 'redux';
import { globalReducer } from './globalReducers';


export const Reducers = combineReducers({
	global: globalReducer,
});

export type RootState = ReturnType<typeof Reducers>;
