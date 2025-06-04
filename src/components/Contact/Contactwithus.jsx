import React, { useReducer } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
const Contactwithus = () => {
    const formReducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_FIELD':
                return {
                    ...state,
                    [action.field]: action.value
                };
            case 'RESET':
                return initialState;
            default:
                return state;
        }
    };
    const initialState = {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: '',
    };
    const [state, dispatch] = useReducer(formReducer, initialState);
    const handleChange = (e) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field: e.target.name,
            value: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', state);
        dispatch({ type: 'RESET' });
    };
    return (
        <>
            <section className='contact-section'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='any_question'>
                                <h4>Contact with us</h4>
                                <h2>Have Any Questions</h2>
                                <p>Want to know more about us? Contact us, our team will be pleased to tell more.</p>
                                <form onSubmit={handleSubmit}>
                                    <div className='inputs'>
                                        <input type='text' name='fname' value={state.fname} onChange={handleChange} placeholder='ENTER YOUR FIRST NAME' />
                                        <input type='text' name='lname' value={state.lname} onChange={handleChange} placeholder='ENTER YOUR LAST NAME' />
                                    </div>
                                    <div className='inputs'>
                                        <input type='text' name='phone' value={state.phone} onChange={handleChange} placeholder='ENTER YOUR PHONE NUMBER' />
                                        <input type='text' name='email' value={state.email} onChange={handleChange} placeholder='ENTER YOUR EMAIL' />
                                    </div>
                                    <textarea name='message' value={state.message} onChange={handleChange} placeholder='ENTER YOUR MESSAGE'>

                                    </textarea>
                                    <button type='submit' className='submit'>Submit</button>
                                </form>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='content'>
                                <span><FaLocationDot className='icon1'/><p> Office # 404 4th Floor, Amber Estate ext, Plot # A+32 Block 7/8 KCH Society Main Shahra-e-Faisal Karachi</p></span>
                                <span><FaPhoneVolume className='icon' /><a href='#'>+92 336-0678731</a></span>
                                <span><MdMarkEmailUnread className='icon' /><a href='#'>info@liamtech.com</a></span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contactwithus