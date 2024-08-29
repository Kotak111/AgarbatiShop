import React from 'react';
import "../css/footer.css"
import { Link, NavLink } from 'react-router-dom';

function Footer(props) {
    return (
       <>
       <div className="footer-main">
        <div className="footer-header">
                <div className=''>
                    <h6 className='text-dark get-connect'>Get connected with us on social networks:</h6>
                </div>
                <div className='footer-icon'>
                <Link to={""}><i className="fa-brands fa-facebook footer-i"></i></Link>
                <Link to={"https://www.instagram.com/kotak_.111/"}><i className="fa-brands fa-instagram footer-i"></i></Link>
                <NavLink to={"mailto:kotakh311@gmail.com"}><i className="fa-regular fa-envelope footer-i"></i></NavLink>
                <Link><i className="fa-brands fa-google footer-i"></i></Link>
             <NavLink to={"https://www.google.com/maps/place/Mendarda,+Gujarat/@21.3220395,70.430796,15z/data=!3m1!4b1!4m6!3m5!1s0x3be2acb7d866be81:0x2d1333f409be3006!8m2!3d21.3206116!4d70.4417034!16s%2Fm%2F0g543nm?entry=ttu"}><i className="fa-solid fa-location-dot footer-i"></i></NavLink>
                </div>
        </div>
        <div className="row mx-0">
            <div className="col-lg-3 col-md-6">
                <h5 className='footer-main-hed'>Company name</h5>
                <p className='company mt-5'>Harsh<strong>Agarbati</strong> is a most famous agarbati and more products perfumes shop.is a best saller of in area.</p>
            </div>
            <div className="col-lg-3 col-md-6">
                <h5 className='footer-main-hed'>Category</h5>
                <div className='footer-category-links mt-5'>
                <Link to={""} className='links-st'><p>Agarbati</p></Link>
                <Link to={""} className='links-st'><p>Dhup Stick</p></Link>
                <Link to={""} className='links-st'><p>Havan Dhup</p></Link>
                <Link to={""} className='links-st'><p>Dhup Cup</p></Link>
                <Link to={""} className='links-st'><p>Kapoor</p></Link>
                </div> </div>
            <div className="col-lg-3 col-md-6" >
                <h5 className='footer-main-hed'>Useful link</h5>
                <div className='footer-category-links mt-5'>
                <Link to={"/"} className='links-st'><p>Home</p></Link>
                <Link to={"/about"} className='links-st'><p>About</p></Link>
                <Link to={"/blog"} className='links-st'><p>Blog</p></Link>
                <Link to={"/contact"} className='links-st'><p>Contact</p></Link>
                <Link to={"/privacy"} className='links-st'><p>Privacy</p></Link>
                </div>
            </div>
            <div className="col-lg-3  col-md-6">
                <h5 className='footer-main-hed'>contact</h5>
                <div className='address-data mt-5'>
                <span className='address-data-profile'><i className="fa-solid fa-house me-2"></i>Opposite Government Hospital </span><br />
                <span className='address-data-profile'><i className="fa-solid fa-location-dot me-3 "></i>Mendarda </span><br />
                <span className='address-data-profile'><i className="fa-solid fa-phone me-2"></i>9824292374</span><br />
                <span className='address-data-profile'><i className="fa-regular fa-envelope me-2"></i>kotakh311@gmail.com</span><br />
                </div>
            </div>
        </div>
        <div className='last-footer-header'>
            <h6 className='text-center p-2 text-white'>❤️Design & developed by Harsh<strong>Agarbati</strong> Group❤️</h6>
        </div>
       </div>
       </>
    );
}

export default Footer;