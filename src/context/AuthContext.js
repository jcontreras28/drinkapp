import createDataContext from './createDataContext';
import AsyncStorage from "@react-native-community/async-storage";
import drinksApi from '../api/drinks';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        case 'signout':
            return { token: null, errorMessage: ''}
;        default:
            return state;
    };
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('Main');
    } else {
        navigate ('Signup');
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message'})
}

const signup = (dispatch) => async ({ email, password, username, verifyPassword }) => {
    console.log('in signup');
    if (password !== verifyPassword) {
        dispatch({ type: 'add_error', payload: 'Passwords do not match' });
        return;
    }
    try {
        const response = await drinksApi.post('/signup', { email, password, username });
        console.log('response: ', response);
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('Main');
    } catch (err) {
        console.log('in err: ', err);
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' });
    }
};

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await drinksApi.post('signin', { email, password })
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token });
        navigate('Main');
    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign in'
        })
    } 
}


const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout '});
    navigate ('Signin');
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: ''}
);