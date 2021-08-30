import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import './sliderBtn.css'

function sliderBtn(props) {
    return (
            <Link activeClass="active" to={props.scrollTo} spy={true} smooth={true} offset={-85} duration={50}>
                <button id={props.btnId} type={props.btnType} form={props.btnForm} value={props.btnValue} className="sliderBtn">{props.btnText}</button>
            </Link>
    )
}

export default sliderBtn
