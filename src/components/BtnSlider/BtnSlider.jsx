import React from 'react';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/all";
import styles from "./BtnSlider.module.scss"

const BtnSlider = ({onClick, cls}) => {
    const btnClass = cls === 'prev' ? styles.prevBtn : styles.nextBtn
    const arrowIcon = cls === 'prev' ? <IoIosArrowBack size={24}/>: <IoIosArrowForward size={24}/>

    return (
        <button
            className={btnClass}
            onClick={onClick}
        >
            {arrowIcon}
        </button>
    );
}

export default BtnSlider;