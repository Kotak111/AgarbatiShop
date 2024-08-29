import React from 'react';
import "../css/next.css"

function ContactPage(props) {
    return (
        // style="border:0; width: 100%; height: 270px;"
        <>
            <div className="contact-main">
                <h2 className='contact-text'>Contact Us</h2>
                <div className='text-center'>
                <iframe   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen className='map mx-auto'></iframe>
                </div>

                <div>
                    <div className="row mx-0">
                        <div className="col-lg-5 " >
                            <div className='action-i'>
                                <div><i className="fa-solid fa-location-dot fa-bounce action-text"  style={{color:"#FFD43B"}}></i><b className='ms-3 action-text'>Location : </b>
                                <p className='p-action'>Opposite Government Hospital , Mendarada</p>
                                </div>
                                <div><i className="fa-solid fa-envelope fa-bounce action-text" style={{color:"#FFD43B"}}></i><b className='ms-2 action-text'>Email :</b>
                                <p className='p-action'>kotakh311@gmail.com</p>
                                </div>
                                <div><i className="fa-solid fa-mobile fa-bounce action-text" style={{color:"#FFD43B"}}></i><b className='ms-3 action-text'>Call :</b>
                                <p className='p-action'>9824292374</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7" data-aos="zoom-in-up">
                            <div className='d-flex mt-5'>
                            <input type="text" placeholder='Enter Name' className='form-control in-text'/>
                            <input type="email" placeholder='Enter Email' className='form-control in-text ms-5'/>
                        </div>
                        <div>
                            <input type="text" placeholder='Subject' className='form-control mt-5 in-text-1' />
                        </div>
                        <div>
                           <textarea name="" id="" className='form-control mt-5 in-text-1' cols={10} rows={5} placeholder='Message'></textarea>
                        </div>
                        <div className='mt-5  text-center ' >
                            <button className='btn btn-warning p-3'>Send Message</button>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;