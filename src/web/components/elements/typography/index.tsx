import React from 'react';
import styled, {css} from 'styled-components'
import {fontSizes} from "../../../constants/fontsizes";

interface TypographyInterface {
    children?: any;
    small?: boolean;
    bold?: boolean;
    bold500?: boolean;
    mediumBig?: boolean;
    medium2?: boolean;
    capitalize?: boolean;
    uppercase?: boolean;
    medium?: boolean;
    semiBig?: boolean;
    big?: boolean;
    onClick?: any;
    style?: object;
}

export const Typography: React.FunctionComponent<TypographyInterface> = (
    {children, ...props}
) => {
    return (<Styling {...props}>{children}</Styling>);
};

const Styling = styled.p<TypographyInterface>`
font-weight: inherit;
font-size: ${fontSizes.default};

${props => props.bold500 && css`
    font-weight: 500;
`}
${props => props.bold && css`
    font-weight: 600;
`}
${props => props.capitalize && css`
    text-transform: capitalize;
`}
${props => props.uppercase && css`
    text-transform: uppercase;
`}
${props => props.big && css`
    font-size: ${fontSizes.big};
`}
${props => props.medium2 && css`
    font-size: ${fontSizes.medium2};
`}
${props => props.mediumBig && css`
    font-size: ${fontSizes.mediumBig};
`}
${props => props.semiBig && css`
    font-size: ${fontSizes.semiBig};
`}
${props => props.medium && css`
    font-size: ${fontSizes.medium};

`
}${props => props.small && css`
     font-size: ${fontSizes.small};
`};

`;