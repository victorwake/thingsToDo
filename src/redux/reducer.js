import {THEME_CHANGE, THEME_LIGHT, THEME_DARK} from './action';

const initialState = {
    theme: 'light'
};

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case THEME_CHANGE:
            return {
                ...state,
                theme: action.theme
            };
        case THEME_LIGHT:
            return {
                ...state,
                theme: 'light'
            };
        case THEME_DARK:
            return {
                ...state,
                theme: 'dark'
            };
        default:
            return state;
    }
}