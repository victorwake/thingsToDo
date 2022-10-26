
export const THEME_CHANGE = 'THEME_CHANGE';
export const THEME_LIGHT = 'THEME_LIGHT';
export const THEME_DARK = 'THEME_DARK';

export const themeChange = (theme) => {
    if (theme === 'light') {
        return {
            type: THEME_LIGHT
        };
    } else if (theme === 'dark') {
        return {
            type: THEME_DARK
        };
    }
};

export  const themeLight = () => {
    return {
        type: THEME_LIGHT,
        theme: 'light'
    }
};

export  const themeDark = () => {
    return {
        type: THEME_DARK,
        theme: 'dark'
    } 
};