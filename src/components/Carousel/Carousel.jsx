import React, { Component } from 'react';
import { cx } from 'emotion';
import Slider from 'react-slick';
import { contextStyles , logoWrapperStyles } from './Carousel.styles';

class SimpleSlider extends Component {
    constructor(props) {
        super(props);
        this.state={
            settings:{
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    }

    render() {
        const { settings } = this.state;
        const { slideContent } = this.props;
        return (
            <div >
                <Slider {...settings}>
                    {slideContent.map( slide =>{
                        return(
                            <div className="card-container" >
                                <div className="card-wrapper">
                                    <div className="card card-3">

                                        <div className={contextStyles}>
                                           <h4> Position : {slide.position}</h4>
                                            <br/>Summary
                                            <p>{slide.summary}</p>

                                            Responsibilities
                                            <ul>
                                                {slide.responsibilities.map(line=>(
                                                    <li>{ line }</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className={cx(logoWrapperStyles , 'logoWrapperStyles')}>
                                            <div className="grid-container">
                                                <figure className="grid_item grid_item-1">
                                                    <img className="grid_image"
                                                         src={slide.img}
                                                         alt=""/>
                                                </figure>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    } )}
                </Slider>
            </div>
        );
    }
}

export default SimpleSlider