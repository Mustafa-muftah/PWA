import { actionTypes } from '../types';
import produce from 'immer';
import { globalActions } from '../actionTypes';

export const initialState: {
	isFooterVisible: boolean;
} = {
	isFooterVisible: false,
};

export const globalReducer = produce(
	(state = initialState, action: globalActions) => {
		switch (action.type) {
			case actionTypes.IS_FOOTER_VISIBLE:
				state.isFooterVisible = action.payload;
				return state;
			default:
				return state;
		}
	},
	initialState
);
