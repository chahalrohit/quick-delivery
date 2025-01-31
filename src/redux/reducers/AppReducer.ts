import * as types from '../../actions/types';

export interface appStateIF {
  name: string;
  showLocation: boolean;
  openCount: number;
}

const initialState: appStateIF = {
  name: '',
  showLocation: false,
  openCount: 0
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.INIT_APP:
    case types.GO_TO_DETAILS:
      return { ...state, ...action.payload };
    case types.SHOW_LOCATION_MODAL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
