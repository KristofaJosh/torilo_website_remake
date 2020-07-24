import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {HashLink as Link} from 'react-router-hash-link';
import {Typography} from "../../elements/typography";
import {FiChevronsDown} from "react-icons/all";
import {fontSizes} from "../../../constants/fontsizes";

const Hero = () => {
    const [service, setService] = useState(0);
    const services_provided = ["DEDICATED SERVICES", "AVAILABILITY AND PERFORMANCE", "REDUCED DOWNTIME", "cost effective services"];
    let arr_size = services_provided.length;

    const clear_loop = setTimeout(() => {
        // eslint-disable-next-line
        let _ = service < arr_size - 1 ? setService(service + 1) : service;
    }, 5000);

    useEffect(() => {
        return () => clearTimeout(clear_loop);
    }, [clear_loop]);

    return (
        <Styling id={'home'} word_length={services_provided[service].length} arr_length={arr_size}>
            <div className="container">
                <div style={{display: 'flex', alignItems: "center", minHeight: '100vh'}}>
                    <div className="hero-text">
                        <div className="welcome">
                            <Typography uppercase bold big>
                                Never loose sleep over your business technology
                            </Typography>
                            <Typography medium2 uppercase bold500>
                                We provide
                            </Typography>
                            <Typography uppercase medium2 bold>
                                <span className={'animate-text'}>
                                    {services_provided[service]}
                                </span>
                            </Typography>
                            <Typography uppercase medium2 bold500>
                                {(arr_size - 1) === service ? 'for your business' : null}
                            </Typography>
                            <span className={'scroll-down'}>
                                <Link smooth to="#services">
                                    <FiChevronsDown style={{fontSize: '2rem'}}/>
                                </Link>
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </Styling>
    )

};

const Styling = styled.section<{ word_length?: number, arr_length: number }>`
color: white;
background: blue;
background: linear-gradient(#ff818142 20%, #003049c4 80%), url('/assets/images/background_1.jpg');
background-size: cover;
background-position: center;
min-height: 100vh;

.hero-text {
    padding: 1rem 0;
    text-align: center;

    .welcome {    
        > p { 
            :first-child {
                margin-bottom: 3rem;
            }
          
        }
        span {
            p {margin-right: 10px;}
        }
        
        .scroll-down {
            position: relative;
            top: 0px;
            animation-name: learn-more;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            animation-duration: alternate;
        }
        
        @keyframes learn-more {
            from {
                top: 0px;
            }
            to {
                top: 25px;
            }
        }
    }
}

@media screen and (max-width: 900px) {

    .welcome{
        > p { 
            :first-child {
                margin-bottom: 3rem;
                font-size: calc(${fontSizes.big} - 10px);
            }
            :nth-child(2), :nth-child(3), :nth-child(4){
                font-size: calc(${fontSizes.medium2} - 8px);
            }
        }
    }
}



`;

export default Hero;