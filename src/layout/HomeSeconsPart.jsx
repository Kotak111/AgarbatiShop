import React from 'react';
import "../css/header.css"

function HomeSeconsPart(props) {
    return (
        <>

            <div>
            <div className="container-fluid second-part">
                <div className="row mx-0" >
                    <div className="col-lg-6  " data-aos="zoom-in">
                        
                                <h2 className='success-point text-center'>Success Story Of harsh Agarbati</h2>
                                <div className='success-header'>
                                <i class="fa-solid fa-feather-pointed icon-size me-5"></i><span className='icon-dec ms-4'>harsh agarbati is make a agarbati in since 2012. our product entered in all market place all we know harsh agarbati provide good produt , natural product , affortable price , few days to delever item are all location in india & and all products are tusted with iso marks </span>
                                </div>
                    </div>
                    <div className="col-lg-6  mx-0  " data-aos="fade-up">
                       <img src="demo.jpg" alt="Agarbati❤️Shop"  className='second-part-image img-fluid '/>
                    </div>
                    
                </div>
            </div>

            </div>
        </>
    );
}

export default HomeSeconsPart;