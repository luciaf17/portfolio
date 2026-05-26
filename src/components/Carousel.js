import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { trabajos } from '../data/Trabajos';

const Carousel = () => {

        var settings = {
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 4000,
          slidesToShow: 3,
          slidesToScroll: 1,
          accesibility : true,
          adaptiveHeight: true,
          pauseOnHover: true,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 0
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <h1 className="recomendeds">Algunos de Mis Proyectos</h1>
                <Slider {...settings} className="slider">
                    {trabajos.slice(0, 10).map(trabajo => {
                        const imgSrc = process.env.PUBLIC_URL + '/' + (trabajo.imagen || `${trabajo.id}.png`);
                        return (
                            <div key={trabajo.id} className="carousel-slide">
                                <Link to={"/proyecto/" + trabajo.id}>
                                    <div className="carousel-thumb">
                                        <img
                                            src={imgSrc}
                                            alt={trabajo.id}
                                            onError={(e) => { e.currentTarget.src = process.env.PUBLIC_URL + '/placeholder.svg'; }}
                                        />
                                    </div>
                                    <h3 className="carousel-title">{trabajo.nombre}</h3>
                                    <p className="carousel-tech">{trabajo.tecnologias}</p>
                                </Link>
                            </div>
                        );
                    })}
                </Slider> <br />
                <hr />
            </>
        );
      }

export default Carousel;
