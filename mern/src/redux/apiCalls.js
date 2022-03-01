import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { deleteProductFailure,deleteProductStart,deleteProductSuccess} from "./cartRedux";
import { publicRequest } from "../RequestMethod";

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};
