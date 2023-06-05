import {icon_address, icon_clock, icon_email, icon_phone} from '../iconsContactUs/iconsLibrary';

export default function ContactUsInfo(){
    return(
        <div className="contact__us__content__right">
            <div className="contact__us__info__item">
                <div className="contact__us__info__icon">
                    <img src={icon_address} alt="Address" />
                </div>
                <div className="contact__us__info__text">
                    <p className='contact__us__info__title'>
                        Address:
                    </p>
                    <span className='contact__us__info__subtitle'>
                        1234 Street Adress City Address, 1234
                    </span>
                </div>
            </div>

            <div className="contact__us__info__item">
                <div className="contact__us__info__icon">
                    <img src={icon_phone} alt="Address" />
                </div>
                <div className="contact__us__info__text">
                    <p className='contact__us__info__title'>
                        Phone:
                    </p>
                    <span className='contact__us__info__subtitle'>
                        (00)1234 5678
                    </span>
                </div>
            </div>

            <div className="contact__us__info__item">
                <div className="contact__us__info__icon">
                    <img src={icon_clock} alt="Address" />                        
                </div>
                <div className="contact__us__info__text">
                    <p className='contact__us__info__title'>
                        We are open:
                    </p>
                    <span className='contact__us__info__subtitle'>
                        Monday - Thursday: 9:00 AM - 5:30 PM
                        <br />
                        Friday 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 11:00 AM - 5:00 PM
                    </span>
                </div>
            </div>

            <div className="contact__us__info__item">
                <div className="contact__us__info__icon">
                    <img src={icon_email} alt="Address" />                        
                </div>
                <div className="contact__us__info__text">
                    <p className='contact__us__info__title'>
                        E-mail:
                    </p>
                    <a href="" className='contact__us__info__link'>
                        shop@email.com
                    </a>
                </div>
            </div>
        </div>
    )
}