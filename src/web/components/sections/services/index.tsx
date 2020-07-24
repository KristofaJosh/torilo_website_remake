import React from 'react';
import styled from "styled-components";
import {services} from "../../../constants/data/services";
import {Typography} from "../../elements/typography";
import {
    FcSalesPerformance,
    GiArmorUpgrade,
    GiTeamIdea,
    GrCloudSoftware,
    GrDatabase,
    GrUserWorker,
    IoMdCodeWorking,
    MdSecurity
} from "react-icons/all";
import {Colors} from "../../../constants/colors";
import {fontSizes} from "../../../constants/fontsizes";

const Services = () => {


    const setIcon: any = {
        database: <GrDatabase/>,
        professional: <GrUserWorker/>,
        software: <IoMdCodeWorking/>,
        solutions: <GrCloudSoftware/>,
    };

    return (
        <div>
            <Styling id={'services'}>
                <div className="container">
                    <Typography bold big uppercase>Services</Typography>
                    <div className={'each-service'}>
                        {
                            services.map((el, index) => (
                                <div key={index + el.name} style={{textAlign: 'center'}}>
                                    <Typography big>{setIcon[el.tag || '']}</Typography>
                                    <Typography bold500 medium uppercase>{el.name}</Typography>
                                    <Typography small>{el.description}</Typography>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Styling>
            <Styling2>
                <div className="container">
                    <div className={'service-list'}>
                        <div className={'service-item'}>
                            <GiArmorUpgrade style={{color: '#34d293'}}/>
                            <Typography bold500 capitalize>
                                Database Upgrade & Migrations
                            </Typography>
                        </div>
                        <div className={'service-item'}>
                            <FcSalesPerformance/>
                            <Typography bold500>
                                Monitoring & Performance Tuning
                            </Typography>
                        </div>
                        <div className={'service-item'}>
                            <MdSecurity style={{color: Colors.red}}/>
                            <Typography bold500>
                                Security & Auditing
                            </Typography>
                        </div>
                        <div className={'service-item'}>
                            <GiTeamIdea style={{color: '#3ab0e2'}}/>
                            <Typography bold500>
                                Business Intelligence
                            </Typography>
                        </div>
                    </div>
                </div>
            </Styling2>
        </div>
    );
};

const Styling = styled.section`
background: white;
color: ${Colors.blue};
padding: 2rem 0;

.each-service {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    padding: 2rem 0;
}

@media screen and (max-width: 1120px){
     .each-service {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
    .container {
        p:first-child {
            text-align: center;
        }
    }
}
@media screen and (max-width: 900px){
    .container {
        p:first-child {
            font-size: calc(${fontSizes.big} - 10px);
        }
    }
}
`;

const Styling2 = styled.div`
background: transparent;
box-shadow: 0px 0px 13px 0px inset;
backdrop-filter: blur(.95px);


.service-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 0;
    p {margin: 0;}
    color: ${Colors.blue};
    font-weight: 500;
    
    .service-item {
        text-align: center;
        svg {
            color: ${Colors.blue};
            font-size: 50px;
            margin-bottom: 10px;
        }
    }
}

@media screen and (max-width: 900px){
    .service-list {
        flex-direction: column;
        p {margin-bottom: 10px;}
        p last-child {margin-bottom: 0;}
        
        .service-item {
            margin-bottom: 20px;
           
        }
    }
}

`;

export default Services;