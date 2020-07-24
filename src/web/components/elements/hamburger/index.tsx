import React, {FunctionComponent} from 'react';
import styled from "styled-components";
import {Colors} from "../../../constants/colors";



export const Hamburger: FunctionComponent<any> = ({onClick, state}) => {
    return (
        <Styling onClick={onClick}>
            <div/>
            <div/>
            <div/>
        </Styling>
    );
};

const Styling = styled.div<{onClick?: any, state?: boolean}>`

div {
    background: ${Colors.red};
    width: 31px;
    height: 3px;
    margin: 0.25rem;
}
`;
