import styled from "styled-components"
import { BUTTON_PADDING, BUTTON_BACKGROUND, BUTTON_BORDER, BUTTON_BORDER_HOVER, BUTTON_COLORS, BUTTON_BACKGROUND_HOVER } from "./constants"

type ButtonProps = {
    children: string,
    size: string,
    variant: string
 }


const Button = ( {size, variant, children }: ButtonProps ) => {     
    console.log(variant);
    
    return(
        <ButtonWrapper variant={variant} size={size} role='button'>{children}</ButtonWrapper>
    )
}

const ButtonBase = styled.div<{size: string, variant:string}>`
    position: relative;
    z-index: 10;
    background-color: #171ab1;
    border-radius: 4px;
    color: white;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    padding: ${props => BUTTON_PADDING[props.size as keyof typeof BUTTON_PADDING]}; 
    `
const ButtonWrapper = styled(ButtonBase)`
    background-color: ${props => BUTTON_BACKGROUND[props.variant as keyof typeof BUTTON_BACKGROUND]};
    border: ${props => BUTTON_BORDER[props.variant as keyof typeof BUTTON_BORDER]};
    color: ${props => BUTTON_COLORS[props.variant as keyof typeof BUTTON_COLORS]};

    &:hover{
        background-color: ${props => BUTTON_BACKGROUND_HOVER[props.variant as keyof typeof BUTTON_BACKGROUND_HOVER]};
    }
    &:focus{
       &:after{
              content: '';
              position: absolute;
              width: calc(100% + 10px);
              height: calc(100% + 10px); 
              left: -5px;
              top: -5px;
              /* border: 2px solid deeppink; */
              background-color: none;
              border: ${props => BUTTON_BORDER_HOVER[props.variant as keyof typeof BUTTON_BORDER_HOVER]};
              border-radius: 4px;
              z-index: -1;
       }
        /* outline: 2px double blue; */
        /* background-color: blue; */
        /* border-radius: 4px; */
    }
`
export default Button