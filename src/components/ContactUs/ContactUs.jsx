import ContactUsForm from './components/ContactUsForm';
import ContactUsInfo from './components/ContactUsInfo';
import ContactUsHelpdesk from './components/ContactUsHelpdesk';

import './ContactUs.css';

export default function ContactUs() {
    return(
    <>
        <div className='contact__us_wrap' id='contact__us'>
            <div className="contact__us__content">
                <ContactUsForm/>
                <ContactUsInfo/>
            </div>
        </div>
        <ContactUsHelpdesk/>
    </>
         
    )
}