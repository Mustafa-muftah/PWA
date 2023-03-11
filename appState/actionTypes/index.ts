
import { actionTypes } from '../types';

export interface isFooterVisible {
	type: actionTypes.IS_FOOTER_VISIBLE;
	payload: boolean;
}


export type globalActions = isFooterVisible ;
