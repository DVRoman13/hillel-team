import CustomerSubmitButton from '../../../ui/CustomerSubmitButton/';
import CustomerDataInput from '../../../ui/CustomerDataInput/CustomerDataInput';
import TextInputArea from '../TextInputArea';

export default function ContactUsForm() {
    return(
        <form className="contact__us__content__left">
            <div className="contact__us__text">
                <ul className="contact__us__nav">
                    <li>
                        <a href="#home" className='contact__us__nav__link'>Home</a>
                    </li>
                    <span>›</span>
                    <li>
                        <a href="#contact__us" className='contact__us__nav__link'>Contact Us</a>
                    </li>
                </ul>
                    <h3 className='contact__us__text__title'>Contact Us</h3>
                <span className='contact__us__text__subtitle'> 
                    We love hearing from you, our Shop customers. <br />
                    Please contact us and we will make sure to get back to you as soon as we possibly can.
                </span>
            </div>

            <div className="contact__us__input__top">

                <div className="contact__us__input__item">
                    <CustomerDataInput
                        title={"Your Name *"}
                        placeholder={"Your Name"}
                        style={"contact__us__input"}
                        required={true}
                    />  
                </div>

                <div className="contact__us__input__item">
                    <CustomerDataInput
                        title={"Your Email *"}
                        placeholder={"Your Email"}
                        style={"contact__us__input"}
                        required={true}
                    />    
                </div>
                
            </div>
            <div className="contact__us__input__down">
                <div className="contact__us__input__item">
                    <CustomerDataInput
                        title={"Your Phone Number"}
                        placeholder={"Your Phone Number"}
                        style={"contact__us__input"}
                        required={false}
                    />
                </div>
                <div className="contact__us__input__item">
                        <TextInputArea
                            title={"What’s on your mind? *"}
                            placeholder={"Jot us a note and we’ll get back to you as quickly as possible"}
                            style={"contact__us__input_textarea"}                             
                        />

                        <CustomerSubmitButton
                            title={"Submit"}
                            style={"contact__us__button"}
                        />
                </div>  
            </div>
        </form>
    )
}