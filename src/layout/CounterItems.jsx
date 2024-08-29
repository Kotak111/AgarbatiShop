import React, { useState } from 'react';
import "../css/next.css";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger"


function CounterItems(props) {
    const [counterOn,setcounterOn]=useState(false);
      

    return (
       
        <div>
             <ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>
            <div className="container-fluid counter-main">
            <div className="row">
                <div className="col-lg-6 col-md-6" data-aos="fade-up-right" >
                    <img src="newag.jpg" alt=""  className='img-fluid newag-img'/>
                </div>
                <div className="col-lg-6 col-md-6 new-img"   >
                    <h2 className='success-point'>Our Success Point</h2>
                    <div className="row mx-0 mt-5" >
                        <div className="col-6 ">
                            <span className=''><i class="fa-solid fa-person-military-pointing counter-text"></i><b  className='counter-text ms-2 ' > {counterOn &&   <CountUp start={0} end={75} duration={2} delay={0}></CountUp>}
                              +</b></span>
                            <h5 className='dec-co'>Daily Customer</h5>
                        </div>
                        <div className="col-6 ">
                        <span className=''><i class="fa-brands fa-product-hunt counter-text"></i><b className='counter-text ms-2 '>{counterOn &&   <CountUp start={0} end={30} duration={2} delay={0}></CountUp>}+</b></span>
                        <h5 className='dec-co'>Product</h5>
                        </div>
                    </div>
                    <div className="co-main-1">
                    <div className="row mx-0">
                        <div className="col-6 ">
                        <span className=''><i class="fa-brands fa-rust counter-text "></i><b className='counter-text ms-2 '>{counterOn &&   <CountUp start={0} end={90} duration={2} delay={0}></CountUp>}%</b></span>
                        <h5 className='dec-co'>Repet Customer</h5>
                        </div>
                        <div className="col-6">
                        <span className=''><i class="fa-solid fa-location-dot counter-text"></i><b className='counter-text ms-3 counter'>{counterOn &&   <CountUp start={0} end={3} duration={2} delay={0}></CountUp>}</b></span>
                        <h5 className='dec-co'>Location</h5>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </ScrollTrigger>
        </div>
    );
}

export default CounterItems;