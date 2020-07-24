import React from 'react';
import styled, {css} from "styled-components";
import {Colors} from "../../../constants/colors";
import {Typography} from "../typography";
import {fontSizes} from "../../../constants/fontsizes";

interface ButtonInterface {
    text: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: any;
}

interface ButtonStyleInterface {
    secondary?: boolean;
    disabled?: boolean;
    loading?: boolean;
}

export const Button: React.FunctionComponent<ButtonInterface> = ({text, onClick}) => {

    return (
        <Styling type={'submit'} onClick={onClick}>
            <Typography capitalize bold uppercase>{text}</Typography>
        </Styling>
    );
};

const Styling = styled.button<ButtonStyleInterface>`
border: none;
border-radius: 10px;
background: ${Colors.blue};
padding: .6rem .8rem;
color: white;
outline: none;
cursor: pointer;
p {margin: 0; font-size: ${fontSizes.small};}

${props => props.secondary && css`
`}

`;