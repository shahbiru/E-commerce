import * as type from "../type";

interface User {
  uid: string;
  name: string | null;
  email: string | null;
  password: string | null;
}

interface UserState {
    user: string | null;
    loading: boolean;
    error: string | null;
  }

const initialState : UserState = {
    user: null,
    loading: false,
    error: null,
  };

const signup = (state = initialState, action: { type: string; payload?: User }) => {
  switch (action.type) {
    case type.GET_USERS:
      return {
        ...state,
        user: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default signup;

  
