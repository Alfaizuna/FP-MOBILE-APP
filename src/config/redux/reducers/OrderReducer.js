
const initialState = {
  dataOrder:[]
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_ORDER':
      return {
        ...state,
        dataOrder: action.data,
      };
    // case SIGN_OUT:
    //   return {
    //     ...state,
    //     loginStatus: false,
    //     userLogin: {},
    //   };
    default:
      return state;
  }
};

export default OrderReducer;
