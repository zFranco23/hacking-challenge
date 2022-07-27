import { getRandomNumber } from "../../utils/number";
import { getCarsApi, getUserApi } from "./api";

const TYPES = {
  UPDATE_USER: "UpdateUser",
  FETCH_USER: "FetchUser",
  FETCH_USER_SUCCESS: "FetchUserSuccess",
  FETCH_USER_ERROR: "FetchUserError",
  FETCH_CAR: "fetchCar",
  FETCH_CAR_SUCCESS: "fetchCarSuccess",
  FETCH_CAR_ERROR: "fetchCarError",
};

const updateUser = (payload) => ({
  ...payload,
  type: TYPES.UPDATE_USER,
});

const fetchUser = () => ({
  type: TYPES.FETCH_USER,
});

const fetchUserSuccess = (payload) => ({
  ...payload,
  type: TYPES.FETCH_USER_SUCCESS,
});

const fetchUserError = (payload) => ({
  ...payload,
  type: TYPES.FETCH_USER_ERROR,
});

const fetchCar = () => ({
  type: TYPES.FETCH_CAR,
});

const fetchCarSuccess = (payload) => ({
  ...payload,
  type: TYPES.FETCH_CAR_SUCCESS,
});

const fetchCarError = (payload) => ({
  ...payload,
  type: TYPES.FETCH_CAR_ERROR,
});

//actions
const fetchUserFn = () => {
  return async (dispatch) => {
    dispatch(fetchUser());
    getUserApi()
      .then(({ data }) => {
        const n = getRandomNumber();
        dispatch(fetchUserSuccess({ user: data[n - 1] }));
      })
      .catch((err) => dispatch(fetchUserError()));
  };
};

const fetchCarFn = () => {
  return async (dispatch) => {
    dispatch(fetchCar());
    getCarsApi({ limit: 10, page: 0 })
      .then(({ data }) => {
        const n = getRandomNumber();
        dispatch(fetchCarSuccess({ car: data[n - 1] }));
      })
      .catch((err) => dispatch(fetchCarError()));
  };
};

//actiosn creators
export const actions = {
  fetchUserFn,
  fetchCarFn,
  updateUser,
};

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.FETCH_USER:
      return { ...state, isFetchingUser: true };
    case TYPES.FETCH_USER_SUCCESS:
      return { ...state, isFetchingUser: false, user: action.user };
    case TYPES.FETCH_USER_ERROR:
      return {
        ...state,
        isFetchingUser: false,
        fetchUserError: "Error al obtener el user",
      };
    case TYPES.FETCH_CAR:
      return { ...state, isFetchingCar: true };
    case TYPES.FETCH_CAR_SUCCESS:
      return { ...state, isFetchingCar: false, car: action.car };
    case TYPES.FETCH_CAR_ERROR:
      return {
        ...state,
        isFetchingCar: false,
        fetchCarError: "Error al obtener el carro",
      };
    case TYPES.UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.info },
      };

    default:
      return state;
  }
};
