import React from 'react';
import './Partners.scss';
import { FaSearch } from 'react-icons/fa';
import { Paper } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { partners, restaurants } from '../../Data/mockData';
import Slider from 'react-slick';
import { MdAddCircle } from 'react-icons/md';

const Partners = () => {
    const settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 1800,
        slidesToShow: 7,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <Paper className='partner'>
            <div className="header">
                <h3>Brands & Restaurant</h3>
                <div className='search'>
                    <input type="text" placeholder='Search Restaurants' />
                    <button className='brand-btn'><FaSearch /></button>
                </div>
            </div>
            <div className="logos container">
                <div className="row">
                    <div className="col-md-12">
                        <Slider className='slide-content' {...settings}>
                            {restaurants.map((item) => (
                                <div key={item.id}>
                                    <div className="item">
                                        <img src={item.imgUrl} alt="" />
                                        <MdAddCircle className='icon' />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="content">
                <h3>Partners</h3>
                <div className="items">
                    {
                        partners.map((p) => (
                            <div className="brands">
                                <img src={p.imgUrl} alt="" />
                                <div className="disconnect">
                                    <button className='brand-btn'>Disconnect</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Paper>
    );
};

export default Partners;