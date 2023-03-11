import { actionTypes } from '../types';

export const setFooterVisibilty = (payload:boolean) => {
	return {
		type: actionTypes.IS_FOOTER_VISIBLE,
		payload
	};
};


