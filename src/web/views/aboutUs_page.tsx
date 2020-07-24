import React from 'react';
import Footer from "../components/sections/footer";
import Header from "../components/molecules/headers";
import styled from "styled-components";
import {Typography} from "../components/elements/typography";

const AboutUsPage = () => {
    return (
        <>
            <Header differentPage/>
            <Styling>

                <div className={'container'}>
                    <div style={{padding:'2rem 0'}}>
                        <Typography bold big uppercase>About us</Typography>
                        <Typography bold500>
                            Torilo provides premium database technology solutions & outstanding services to our customer's businesses.
                        </Typography>
                        <div>
                            <Typography>
                                Torilo is the go-to, dependable, dedicated, reputable team of on-demand trustworthy
                                Database
                                specialists. We pride ourselves in our teams deep database expertise blended with our
                                passion to deliver
                                an unrivalled level of personal service for our customers.
                            </Typography>
                            <Typography>
                                Our satisfaction is derived from giving our customers unprecedented outsourcing
                                experience,
                                broad
                                expertise in technology and maintaining excellence in solving business challenges for
                                customers across
                                every sector.
                            </Typography>

                            <Typography>
                                Our speciality involves preparing, deploying and managing critical data systems for
                                various
                                businesses.
                                We recognize that business requirements are not be the same and different level of
                                services
                                may apply to
                                individual organisations, therefore at Torilo our packages are designed to allow
                                flexibility
                                thereby
                                ensuring that client’s individual needs are met by delivering enterprise-level services
                                to
                                businesses of
                                all sizes and kinds.
                            </Typography>


                            <Typography bold medium2 uppercase>Managed Database Services</Typography>
                            <Typography>
                                We provide 24*7*365 Database Administration support.
                            </Typography>
                            <Typography bold medium2 uppercase>
                                Consulting Services
                            </Typography>
                            <Typography>
                                We can help when your needs are changing or you meet new challenges or new requirements
                                which you do not
                                have the capacity for.
                            </Typography>
                            <Typography bold medium2 uppercase>
                                Professional Services
                            </Typography>
                            <Typography>
                                We help you to create your IT vision, develop the strategy required to achieve it and
                                successfully
                                deploy and support it.
                            </Typography>
                            <Typography bold medium2 uppercase>
                                Advisory Services
                            </Typography>
                            <Typography>
                                We are expert with advices on the services which we offers.
                            </Typography>
                        </div>
                    </div>
                </div>
            </Styling>
            <Footer/>
        </>
    );
};

const Styling = styled.div`
background: white;
min-height: 90vh;
`;

export default AboutUsPage;