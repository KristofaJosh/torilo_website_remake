import React, {ChangeEvent, FunctionComponent} from 'react';
import styled, {css} from "styled-components";
import {fontSizes} from "../../../constants/fontsizes";
import {Colors} from "../../../constants/colors";

interface InputInterface {
    id?: any,
    name: string,
    value: string,
    type?: string,
    placeholder?: string,
    onChange: (e: string | ChangeEvent<any>) => void,
    onBlur?: (e: string | ChangeEvent<any>) => void,
    error?: any;
    errorColor?: string;
    capitalize?: boolean;
}

export const Input: FunctionComponent<InputInterface> = ({id, name, value, type, placeholder, onChange, ...props}) => {

    return (
        <Styling {...props}>
            <input id={id} type={type || "text"}
                   onChange={onChange}
                   placeholder={placeholder}
                   value={value} name={name}/>
            <small style={{color: props.errorColor || Colors.red}}>{props.error}</small>
        </Styling>
    );
};

export const Textarea: FunctionComponent<InputInterface> = ({id, name, value, type, placeholder, onChange, ...props}) => {
    return (
        <Styling>
            <textarea name={name} id={id} onChange={onChange}
                      placeholder={placeholder}
                      value={value}/>
            <small style={{color: props.errorColor || Colors.red}}>{props.error}</small>
        </Styling>
    );
};

const Styling = styled.div<{ capitalize?: boolean }>`
width: 100%;

input, textarea {
   padding: 0.7rem  0.5rem; 
   width: 100%;
    border: none;
    margin: .5rem 0;
    border-radius: 5px;
    font-size: inherit;
}

${props => props.capitalize && css`
    input, textArea {
        text-transform: capitalize;
    }
`};

textarea {
    font-family: inherit;
    font-size: ${fontSizes.default};
    min-height: 200px;
}

small {color: ${Colors.red};}

`;
