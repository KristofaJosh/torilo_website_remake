import React, {FunctionComponent, useState} from 'react';
import styled from "styled-components";
import {NavHashLink as NavLink} from 'react-router-hash-link';
import {Hamburger, Typography} from "../../elements";
import {useHistory} from "react-router-dom";
import {Colors} from "../../../constants/colors";
import {AiOutlineRollback} from "react-icons/all";


const Header: FunctionComponent<{ differentPage?: boolean }> = (props) => {
    const [toggled, setToggled] = useState(true);
    const {location: {hash}, goBack} = useHistory();

    type menuType = { name: string, link: string };


    const menus: menuType[] = [
        {name: 'home', link: 'home'},
        {name: 'services', link: 'services'},
        {name: 'about us', link: 'aboutUs'},
        {name: 'why torilo', link: 'whyTorilo'},
        {name: 'contact', link: 'contact'}];

    return (
        <Styling hamOpened={toggled}>
            <div className="container">
                <div className="header">
                    <span>
                        <img src={"/assets/images/logo.png"} alt=""/>
                    </span>
                    <span className={'menus'}>
                        {props.differentPage ?
                            <div style={{display: 'flex', alignItems: 'center', color: Colors.red, cursor: 'pointer'}}
                                 onClick={() => goBack()}>
                                <AiOutlineRollback style={{marginRight: '10px'}}/>
                                <Typography uppercase bold>go back</Typography>
                            </div> :
                            <div className={'links'}>
                                {
                                    menus.map((el, index) => (
                                        <NavLink key={index}
                                                 strict
                                                 to={"#" + el.link}
                                                 scroll={el => el.scrollIntoView({
                                                     behavior: 'smooth',
                                                     block: 'start',
                                                     inline: 'end'
                                                 })}
                                                 activeClassName={"#" + el.link === hash ? 'selected' : ''}>
                                            <Typography uppercase bold={"#" + el.link === hash}
                                                        onClick={() => setToggled(!toggled)}>{el.name}</Typography>
                                        </NavLink>
                                    ))
                                }
                            </div>

                        }
                        <div className="ham">
                            {props.differentPage ? null :
                                <Hamburger onClick={() => setToggled(!toggled)} state={toggled}/>}
                        </div>
                    </span>
                </div>
                <div className="mobile-header">
                    {props.differentPage ?
                        <div style={{display: 'flex', alignItems: 'center', color: Colors.red, cursor: 'pointer'}}
                             onClick={() => goBack()}>
                            <AiOutlineRollback style={{marginRight: '10px'}}/>
                            <Typography uppercase bold>go back</Typography>
                        </div>
                        :
                        menus.map((el, index) => (
                            <NavLink key={index}
                                     strict
                                     to={"#" + el.link}
                                     scroll={el => el.scrollIntoView({
                                         behavior: 'smooth',
                                         block: 'start',
                                         inline: 'nearest'
                                     })}
                                     activeClassName={"#" + el.link === hash ? 'selected' : ''}>
                                <Typography uppercase bold={"#" + el.link === hash}
                                            onClick={() => setToggled(!toggled)}>{el.name}</Typography>
                            </NavLink>
                        ))

                    }
                </div>
            </div>
        </Styling>
    );
};

const Styling = styled.div<{ hamOpened?: boolean }>`
background: white;
position: sticky;
top: 0;
z-index: 3;
box-shadow: 0px 0px 10px 1px black;

.header {
    display: flex;
    justify-content: space-between;
    padding 10px 0;
    span:first-child {
        width: 75px;
        img {width: 100%;}
    }
    .menus, .links {
        color: ${Colors.blue};
        display: flex;
        justify-content: space-between;
        align-items: center;
            p {margin: 0;}

        .links{
            width: 100%;
            max-width: 550px;
            a {margin-right: 15px;}
            .selected {
                color: ${Colors.red};
            }
        }
    }
}

.mobile-header, .ham {
    display: none;
    a {margin: 10px 0;}
        p {margin: 0;}

    .selected {color: ${Colors.red}; font-weight: 600 !important;}
}

.mobile-header {
    // padding: 10px 0;
    a{
        transition: all 0.5s;
        opacity: ${props => props.hamOpened ? '0' : '1'} !important;
        
    }
    transition: height ${props => props.hamOpened ? '0.3s' : '1.5s'};
    height: ${props => props.hamOpened ? '0' : '100%'};
    overflow: hidden;
}



@media screen and (max-width: 650px) {
    .header .menus { 

        .links {
            display: none;
            
        }
     }
     
    .header {
        span:first-child {
            width: 50px;
        }
    }
    
    .mobile-header, .ham {
        display: flex;
        flex-direction: column;
        transition: opacity 1s;
        a:first-child {
            transition: opacity 0.3s;
            opacity: 1;
        }
        a:nth-child(2){
            transition: opacity 0.6s;
            opacity: 1;
        }
        a:nth-child(3){
            transition: opacity 0.9s;
            opacity: 1;
        }
        a:nth-child(4){
            transition: opacity 1.2s;
            opacity: 1;
        }
        a:last-child {
            transition: opacity 1.5s;
            opacity: 1;
        }
    }
}

`;

export default Header;