import createDataContext from './createDataContext';
import drinksApi from '../api/drinks';

const drinksReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'getNonRedeemedDrinks':
            return { errorMessage: '', drinks: action.payload };
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        case 'getHistory':
            return { token: null, errorMessage: ''}
        case 'getFriends':
            return { token: null, errorMessage: ''}
        default:
            return state;
    };
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message'})
}

const getNonRedeemed = dispatch => async () => {
    try {
        console.log('Im here.....');
        const response = await drinksApi.get('/getNonRedeemedDrinks');
        console.log('response: ', response.data);
        dispatch({type: 'getNonRedeemedDrinks', payload: response.data });
    } catch (err) {
        console.log('err: ', err);
    }
    
}

export const { Provider, Context } = createDataContext(
    drinksReducer,
    {getNonRedeemed, clearErrorMessage},
    []
);