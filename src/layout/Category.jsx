import React from 'react';
import Data from '../../Datafile/Data';
import CardUi from './CardUi';
import "../css/next.css"

function Category(props) {
    return (
       <>
       <div className='blogs'>
        <h1 className='text-center our-blog'>Our Blogs</h1>
        <div className="container">
           
            <div className="row mx-0">
                {
                    Data.map((items)=>{
                        return (
                            <div className="col-lg-4 col-md-6"  data-aos="fade-up">
                                <CardUi title={items.title} para={items.para} src={items.src}></CardUi>
                            </div>
                    )
                    })
                }
            </div>
        </div>
        </div>
       </>
    );
}

export default Category;