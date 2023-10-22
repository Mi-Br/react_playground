export const COLORS = {   
    primary: "hsl(240deg 100% 60%)",
    primaryLight: "hsl(235deg 100% 62%)",
    white: "hsl(0deg 0% 100%)",
    offwhite: "hsl(235deg 85% 97%)",
    gray: "hsl(240deg 10% 50%)",
    transparentGray15: "hsl(240deg 10% 50% / 0.15)",
    transparentGray75: "hsl(240deg 10% 50% / 0.75)",
    black: "hsl(0deg 0% 0%)"
}


export const BUTTON_PADDING = {
    small: '8px 16px',
    medium: '16px 24px',
    large: '20px 36px',    
}

export const BUTTON_BACKGROUND = {
    fill: COLORS.primary,
    outline: COLORS.white,
    ghost: "transparent",    
}


export const BUTTON_BACKGROUND_HOVER = {
    fill: COLORS.primaryLight,
    outline: COLORS.offwhite,
    ghost: COLORS.transparentGray15,    
}


export const BUTTON_BORDER = {
    fill: '2px solid ' + COLORS.primary,
    outline: '2px solid ' + COLORS.primary,
    ghost: "none",    
}

export const BUTTON_BORDER_HOVER = {
    fill: '2px solid ' + COLORS.primary,
    outline: '2px solid ' + COLORS.primary,
    ghost: '2px solid ' + COLORS.gray,    
}


export const BUTTON_COLORS = {
    fill: COLORS.white,
    outline: COLORS.primary,
    ghost: COLORS.gray,    
}


  