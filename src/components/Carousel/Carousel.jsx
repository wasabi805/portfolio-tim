import React, { Component } from "react";
import Slider from "react-slick";

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
        const { slideContent , slideImages } = this.props;
        console.log(slideImages , 'slideImages')
        return (
            <div >
                <Slider {...settings}>
                    {slideContent.map( slide =>{
                        return(
                            <div id={'card-container'} style={{background: 'grey'}} >
                                <div className="card-wrapper">
                                    <div className="card card-3"
                                        style={{
                                        display: 'flex',
                                        height: '70vh',
                                    }}>



                                        <div
                                            style={{
                                                display: 'flex',
                                                background: 'lightgrey',
                                                flexBasis: '40%',
                                                alignItems: 'center'
                                            }}>

                                            <div className="grid-container">


                                                <figure className="grid_item grid_item-1">
                                                    <img className="grid_image"
                                                         src={slide.img}
                                                         alt=""/>
                                                </figure>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                background: 'rgb(98, 107, 113)',
                                                flexBasis: '60%',
                                                paddingLeft: "2rem",
                                                paddingTop: "2rem",
                                            }}
                                        >
                                           <h4> Position : {slide.position}</h4>

                                            <br/>Summary
                                            <p style={{
                                                fontFamily: 'Helvetica'
                                            }}>{slide.summary}</p>

                                            Responsibilities
                                            <ul>
                                                {slide.responsibilities.map(line=>(
                                                    <li style={{
                                                        margin: '10px 0',
                                                        fontFamily : 'Helvetica'
                                                    }}>{ line }</li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    } )}

                    {/*----------*/}

                </Slider>
            </div>
        );
    }
}

export default SimpleSlider