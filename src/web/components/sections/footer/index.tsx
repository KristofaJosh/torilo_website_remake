import React from 'react';
import {
    AiOutlineGoogle,
    AiTwotoneMail,
    FaMobile,
    FcCallTransfer,
    FcOnlineSupport,
    FiFacebook,
    FiLinkedin,
    GoLocation,
    GrLocation,
    RiTwitterLine
} from "react-icons/all";
import styled from "styled-components"
import {Typography} from "../../elements/typography";
import ContactUS from "../contactform";
import {Colors} from "../../../constants/colors";
import {fontSizes} from "../../../constants/fontsizes";
import {address_details, enquiry_info} from "../../../constants/data/contact_address";
import {Link} from "react-router-dom";


const Footer: React.FunctionComponent<any> = () => {
    const current_year = new Date().getFullYear();

    const socialsList = [
        {link: '#', icon: <GoLocation/>},
        {link: 'https://www.facebook.com/pages/Torilo/342476222608897', icon: <FiFacebook/>},
        {link: '#', icon: <AiOutlineGoogle/>},
        {link: 'https://www.linkedin.com/company/torilo', icon: <FiLinkedin/>},
        {link: 'https://twitter.com/ToriloLTD', icon: <RiTwitterLine/>},
    ];


    return (
        <Styling id={"contact"}>
            <section style={{background: Colors.red, color: Colors.blue, padding: '2rem 0'}}>
                <div className="container">
                    <div className="form-address">
                        <div className="address">
                            {address_details.map((el, index) => (
                                <div key={index} className={'address-format address-' + index}>
                                    <Typography bold uppercase>{el.place}</Typography>
                                    <Typography bold500><span><FaMobile/></span>{' ' + el.phone}</Typography>
                                    <Typography bold500><span><GrLocation/></span>{' ' + el.address}</Typography>
                                </div>
                            ))}
                        </div>
                        <div className="form">
                            <ContactUS/>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{boxShadow: '0px 0px 9px 0px black inset', backdropFilter: 'blur(.95px)'}}>
                <div className={'container'}>
                    <div className={'enquiry-info'} style={{color: 'white'}}>
                        <span><AiTwotoneMail/><Typography bold medium><a
                            href={"mailto:" + enquiry_info.email}>{enquiry_info.email}</a></Typography></span>
                        <span><FcCallTransfer/><Typography bold medium><a
                            href={"tel:+44" + enquiry_info.enquiry}>{enquiry_info.enquiry}</a></Typography></span>
                        <span><FcOnlineSupport/><Typography bold medium><a
                            href={"tel:+44" + enquiry_info.support}>{enquiry_info.support}</a></Typography></span>
                    </div>
                </div>
            </section>
            <section style={{background: Colors.blue, color: 'white'}}>
                <div className="container">
                    <div className={'copyright-socials'}>
                        <div className={'copyright'}>
                            <Typography small capitalize><strong>Copyright</strong> &copy; <strong>2014</strong> &ndash;
                                <strong>{current_year + ' '}</strong>
                                <span style={{marginRight: '5px'}}><Link to={'/tAndC'}>terms and conditions apply</Link></span>&bull;
                                <span style={{marginLeft: '5px'}}><Link
                                    to={'/cookie'}>Cookie Policy</Link></span></Typography>
                        </div>
                        <div className={'socials'}>
                            {
                                socialsList.map((el, index) => (
                                    <a key={index} href={el.link}>
                                        {el.icon}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

        </Styling>
    );
};

const Styling = styled.section`

.form-address {
    display: grid;

    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "address form";
    grid-gap: 10px;
    padding: 1rem 0;
    
    .form {
        margin-bottom: 20px;
    }
        
    
    .address {
        display: grid;
        grid-template-rows: auto;
        grid-gap: 20px;
        p:first-child {font-size: ${fontSizes.medium}; margin-bottom: 13px;}
        
        .address-format {
            p {
                display: flex;
                align-items: center;
                span {margin-right: 10px;}
            }
        }
    }
}

@media screen and (max-width: 1017px){
    .form-address {
        grid-auto-flow: row;
        grid-template-areas: 
            "form form"
            "address address";
            
        .form {
            grid-area: form;
        }
        .address {
            grid-area: address;
        }
    }
}

@media screen and (max-width: 700px){
    .form-address {
        .address {
            grid-template-rows: 1fr;
            grid-template-areas: 
                "address-0 address-0 address-0"
                "address-1 address-1 address-1"
                "address-2 address-2 address-2";
            .address-0 {grid-area: address-0}
            .address-1 {grid-area: address-1}
            .address-2 {grid-area: address-2}
        }
    }
}

.enquiry-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    p {margin: 0; display: flex; align-items: center;}
    svg {font-size: 30px;}
    span {
        display: flex;
        svg {
            margin-right: 20px;
        }
    }
}


.copyright-socials, .socials {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    line-height: 24px;
    p {margin: 0;}
    .socials {
        display: grid;
        grid-auto-flow: column;
        grid-gap: 30px;
    }
}


@media screen and (max-width: 900px) {
    .copyright-socials {
        flex-direction: column-reverse;
        align-items: flex-start;
        .copyright, .socials {
            margin-bottom: 10px;
        }
    }
    .enquiry-info {
        flex-direction: column;
        align-items: flex-start;
        span {
            margin-bottom: 10px;
            &:last-child {margin-bottom: 0;}
        }
    }
}

`;


export default Footer;