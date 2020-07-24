import React from 'react';
import styled from "styled-components";
import {Typography} from "../../elements/typography";
import {why_torilo} from "../../../constants/data/why_torilo";
import {fontSizes} from "../../../constants/fontsizes";
import {Button} from "../../elements/button";
import {useHistory} from "react-router-dom";
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

const WhyTorilo = () => {


    const history = useHistory();

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

    const goto = (path: string) => {
        history.push(path)
    };

    return (
        <Styling id={'whyTorilo'}>
            <div className="container">
                <div className={'why-context'}>
                    <Typography bold uppercase big>why torilo</Typography>
                    <Typography medium bold500>
                        Our passion lies in our blend of world-class talent with a reliable ITIL process, smart
                        communication strategy and a set of operating principles.
                    </Typography>
                    <div style={{margin: '20px 0'}} className={'why-torilo-items'}>
                        {
                            why_torilo.map((el, index) => (
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        textAlign: 'center'
                                    }}
                                    key={index+el.tag}
                                >
                                    <Typography big>{getIcon[el.tag]}</Typography>
                                    <Typography key={el.title + index}>{el.title}</Typography>
                                </div>
                            ))
                        }
                    </div>
                    <div className={'button'}>
                        <Button text={'learn more'} onClick={() => goto('/whyUs')}/>
                    </div>
                </div>
            </div>
        </Styling>
    );
};

const Styling = styled.section`
background: white;
padding: 2rem 0;
box-shadow: 0px 0px 9px 0px inset;
backdrop-filter: blur(.95px);

.why-context {
    padding-bottom: 7rem 0;
    
    .why-torilo-items {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 20px;
    }
    
}

@media screen and (max-width: 1020px) {

}


@media screen and (max-width: 900px){
    .why-context {
        > p:first-child {
            font-size: calc(${fontSizes.big} - 10px);
        }
        p{
            text-align: center;
        }
        .why-torilo-items {grid-template-columns: 1fr 1fr;}
        
        .button {display: flex; justify-content: center;}
    }
}

@media screen and (max-width: 500px){
 .why-context {
    .why-torilo-items {grid-template-columns: 1fr;}
 }
}
`;

export default WhyTorilo;