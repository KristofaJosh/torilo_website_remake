import React from 'react';
import styled from "styled-components";
import {Typography} from "../../elements/typography";
import {Button} from "../../elements/button";
import {useHistory} from "react-router-dom";
import {Colors} from "../../../constants/colors";
import {fontSizes} from "../../../constants/fontsizes";

const AboutUs = () => {

    const history = useHistory();

    const goto = (path: string) => {
        history.push(path, {state: ''})
    };

    return (
        <Styling id={'aboutUs'}>
            <div className="container">
                <div className={'about_us-brief'}>
                    <Typography uppercase bold big>
                        about us
                    </Typography>
                    <Typography medium>
                        Torilo provides premium database technology solutions & outstanding services to our customer's
                        businesses.
                    </Typography>
                    <div>
                        <Typography bold500 medium2>
                            We provide high quality service that you expect 24/7.
                        </Typography>
                        <Typography>
                            Torilo is the go-to, dependable, dedicated, reputable team of on-demand trustworthy Database
                            specialists. We pride ourselves in our teams deep database expertise blended with our
                            passion to deliver an unrivalled level of personal service for our customers.
                        </Typography>
                    </div>
                    <div>
                        <Button text={'learn more'} onClick={()=> goto('/aboutUs')}/>
                    </div>
                </div>
            </div>
        </Styling>
    );
};


const Styling = styled.section`
background: ${Colors.orange};
padding: 2rem 0;

.about_us-brief {
    div > p:first-child {
        font-size: calc(2rem - 10px);
        text-transform: uppercase;
        margin-top: 20px;
    }
}

@media screen and (max-width: 900px){
    .container .about_us-brief {
        > p:first-child {
            font-size: calc(${fontSizes.big} - 10px);
        }
        p{
            text-align: center;
        }
        div:last-child {display: flex; justify-content: center;}
    }
}

`;

export default AboutUs;