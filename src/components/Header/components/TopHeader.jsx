import styles from './TopHeader.module.scss'
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";


export default function TopHeader () {
    return (
        <>
            <div className={ styles.header }>
                <div>
                    <p>Mon-Thu: <span>9:00 AM - 5:30 PM</span> </p>
                </div>
                <div>
                    <p>Visit our showroom in 1234 Street Adress City Address, 1234  Contact Us</p>
                </div>
                <div>
                    <div>
                        <p>Call Us:</p>
                        <a href="tel:0012345678">(00) 1234 5678</a>
                    </div>
                    <div>
                        <a href=""> <AiFillFacebook /> </a>
                        <a href=""> <AiFillInstagram /> </a>
                    </div>
                </div>
            </div>
        </>
    )
}