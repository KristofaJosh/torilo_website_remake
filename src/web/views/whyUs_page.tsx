import React from 'react';
import Footer from "../components/sections/footer";
import Header from "../components/molecules/headers";
import {why_torilo} from "../constants/data/why_torilo";
import {Typography} from "../components/elements/typography";
import styled from "styled-components";
import {
    FaChartLine,
    FaUserTie,
    FiUsers,
    GiFreemasonry,
    GrSupport,
    GrUserExpert,
    RiCustomerService2Line,
    TiChartPie
} from "react-icons/all";


const WhyUsPage = () => {

    const getIcon: any = {
        customer: <FiUsers/>,
        communication: <RiCustomerService2Line/>,
        professionalism: <FaUserTie/>,
        expertise: <GrUserExpert/>,
        support: <GrSupport/>,
        transition: <FaChartLine/>,
        strategy: <TiChartPie/>,
        flexibility: <GiFreemasonry/>,
    };


    return (
        <div>
            <Header differentPage/>
            <Styling>
                <div className={'container'}>
                    <div>
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <Typography uppercase big bold>Why us</Typography>
                        </div>
                        <div>
                            {
                                why_torilo.map((el, index) => (
                                    <div key={index} className={'items'}
                                         style={{
                                             display: 'flex',
                                             alignItems: 'center',
                                             flexDirection: 'column',
                                             justifyContent: 'center',
                                             textAlign: 'center'
                                         }}
                                    >
                                        <Typography uppercase bold big>{getIcon[el.tag]}</Typography>
                                        <Typography medium uppercase bold>{el.title}</Typography>
                                        <Typography>{el.description}</Typography>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </Styling>
            <Footer/>
        </div>
    );
};

const Styling = styled.div`
background: white;
min-height: 90vh;
padding: 2rem 0;
`;

export default WhyUsPage;