/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  ADD_TO_CART,
  DELETE_CART,
  GET_NUMBER_CART,
  INCREASE_QUANTITY,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  cartAr: [],
  numberCart: 0,
  totalPrice: 0,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case ADD_TO_CART:
        {
          const itemIndex = state.cartAr.findIndex(
            item => item.title === action.product.title,
          );

          if (itemIndex >= 0) {
            state.cartAr[itemIndex].quantity += 1;
          } else {
            const cartNew = {
              id: action.product.id,
              quantity: 1,
              title: action.product.title,
              img: action.product.img,
              price: action.product.price,
              totalPrice: action.product.price,
            };
            return Object.assign({}, state, {
              cartAr: state.cartAr.concat(cartNew),
              numberCart: state.numberCart + 1,
            });
          }
        }
        break;
      case GET_NUMBER_CART:
        return {
          ...state,
        };

      case DELETE_CART: {
        state.cartAr = state.cartAr.filter(
          x => x.title !== action.product.title,
        );
        break;
      }
      case INCREASE_QUANTITY:
        return {
          ...state,
          cartAr: state.cartAr.map(item => ({
            title: item.title,
            inCart:
              item.title === action.product.title
                ? item.inCart + action.product.quantity
                : item.inCart,
          })),
        };
    }
  });

export default appReducer;
