import React from 'react';
import "../css/next.css"
function CardUi({ title, para, src }) {
    return (
        <div className='card-main'>
            <div className="card" >
                <img src={src ?? "no data"} className="card-img-top card-image" alt="images" />
                <div className="card-body">
                    <h5 className="card-title text-center">{title ?? "no data"}</h5>
                    <p className="card-text">{para ?? "no data"}</p>

                </div>
            </div>
        </div>
    );
}

export default CardUi;