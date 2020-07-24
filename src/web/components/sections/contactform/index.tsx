import React, {FunctionComponent} from 'react';
import styled from "styled-components";
import {Formik} from "formik";
import {Button, Input, Textarea, Typography} from "../../elements";
import {Colors} from "../../../constants/colors";


interface contactInterface {
    name: string;
    message: string;
    email: string;
    phone: string;
}


const ContactUS: FunctionComponent<any> = () => {

    const handleForm = (data: object) => {
        console.log(data)
    };

    const formData: contactInterface = {email: '', message: '', phone: '', name: ''};

    return (
        <Styling>
            <Typography uppercase bold medium2 style={{textAlign: 'end'}}>get in touch</Typography>
            <Formik initialValues={formData}
                    validate={
                        values => {
                            const errors: any = {};
                            if (!values.name) {
                                errors.name = 'Please we need your fullname'
                            } else if (values.name.split(' ').length < 2) {
                                errors.name = 'Please enter your first and last name'
                            }
                            if (!values.email) {
                                errors.email = 'Email cannot be blank';
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Your email does not appear to be valid';
                            }
                            if (!values.phone) {
                                errors.phone = 'Please enter your phone number';
                            }
                            if (!values.message) {
                                errors.message = 'Please enter a message'
                            } else if (values.message.length < 10) {
                                errors.message = 'Too few words'
                            }

                            console.log(errors);
                            return errors;
                        }
                    }
                    onSubmit={(values, {setSubmitting}) => {
                        setSubmitting(false);
                        setTimeout(() => {
                            // alert(JSON.stringify(values, null, 2));
                            handleForm(values);
                        }, 400);
                    }}
            >
                {
                    ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                        <form onSubmit={handleSubmit}>
                            <div className={''}>
                                <Input name={'name'}
                                       value={values.name}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       placeholder={'Fullname'}
                                       capitalize
                                       errorColor={Colors.blue}
                                       error={errors.name && touched.name && errors.name}
                                />
                                <Input name={'phone'}
                                       value={values.phone}
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       placeholder={'Mobile'}
                                       errorColor={Colors.blue}
                                       error={errors.phone && touched.phone && errors.phone}
                                />
                            </div>
                            <Input name={'email'} type={'email'}
                                   onChange={handleChange}
                                   value={values.email}
                                   placeholder={'Email'}
                                   errorColor={Colors.blue}
                                   error={errors.email && touched.email && errors.email}
                            />
                            <Textarea name={'message'} value={values.message}
                                      placeholder={'Message'}
                                      onChange={handleChange}
                                      errorColor={Colors.blue}
                                      error={errors.message && touched.message && errors.message}
                            />
                            <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%', margin: '10px 0'}}>
                                <Button text={'Send Message'} disabled={isSubmitting} loading={isSubmitting}/>
                            </div>
                        </form>
                    )
                }
            </Formik>
        </Styling>
    );
};

const Styling = styled.div`
padding: 0 1rem;

    
`;

// @ts-ignore
export default ContactUS;