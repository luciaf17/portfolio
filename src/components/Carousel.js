import React from 'react'
import Slider from "react-slick";
import ListadoTrabajos from './ListadoTrabajos';


const Carousel = () => {

        var settings = {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          accesibility : true,
          adaptiveHeight: true,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
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
                    <ListadoTrabajos />
                </Slider> <br />
                <hr />

            </>
        );
      }

export default Carousel;