import {icon_support, icon_account, icon_saving} from '../iconsContactUs/iconsLibrary'

export default function ContactUsHelpdesk() {
    return(
    <div className="contact__us__helpdesk_wrap">
        <div className="contact__us__helpdesk">
            <div className="contact__us__helpdesk__item">
                <img src={icon_support} alt="support" />
                <h4 className='contact__us__helpdesk__title'>Product Support</h4>
                <span className='contact__us__helpdesk__subtitle'>Up to 3 years on-site warranty available for your peace of mind.</span>
            </div>
            <div className="contact__us__helpdesk__item">
                <img src={icon_account} alt="support" />
                <h4 className='contact__us__helpdesk__title'>Personal Account</h4>
                <span className='contact__us__helpdesk__subtitle'>With big discounts, free delivery and a dedicated support specialist.</span>
            </div>
            <div className="contact__us__helpdesk__item">
                <img src={icon_saving} alt="support" />
                <h4 className='contact__us__helpdesk__title'>Amazing Savings</h4>
                <span className='contact__us__helpdesk__subtitle'>Up to 70% off new Products, you can be sure of the best price.</span>
            </div>
        </div>
    </div>  
    )
}