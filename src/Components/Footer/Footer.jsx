import React from 'react'
import './Footer.scss'
import logo from '../../img/icons/logo.svg'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__shell container">
                <Link to='/' className="footer__logo">
                    <img src={logo} alt="logo" />
                    <p className='span'>Союз Писателей </p>
                </Link>
                <div className="footer__content">
                    <div className="footer__location">
                        <div>
                            <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 4.5C7.16304 4.5 7.79893 4.76339 8.26777 5.23223C8.73661 5.70107 9 6.33696 9 7C9 7.3283 8.93534 7.65339 8.8097 7.95671C8.68406 8.26002 8.49991 8.53562 8.26777 8.76777C8.03562 8.99991 7.76002 9.18406 7.45671 9.3097C7.15339 9.43534 6.8283 9.5 6.5 9.5C5.83696 9.5 5.20107 9.23661 4.73223 8.76777C4.26339 8.29893 4 7.66304 4 7C4 6.33696 4.26339 5.70107 4.73223 5.23223C5.20107 4.76339 5.83696 4.5 6.5 4.5ZM6.5 5.5C6.10218 5.5 5.72064 5.65804 5.43934 5.93934C5.15804 6.22064 5 6.60218 5 7C5 7.39782 5.15804 7.77936 5.43934 8.06066C5.72064 8.34196 6.10218 8.5 6.5 8.5C6.89782 8.5 7.27936 8.34196 7.56066 8.06066C7.84196 7.77936 8 7.39782 8 7C8 6.60218 7.84196 6.22064 7.56066 5.93934C7.27936 5.65804 6.89782 5.5 6.5 5.5ZM1.8 9.86L6.5 17.59L11.2 9.86C11.71 9 12 8.05 12 7C12 5.54131 11.4205 4.14236 10.3891 3.11091C9.35764 2.07946 7.95869 1.5 6.5 1.5C5.04131 1.5 3.64236 2.07946 2.61091 3.11091C1.57946 4.14236 1 5.54131 1 7C1 8.05 1.29 9 1.8 9.86ZM12.05 10.38L6.5 19.5L0.95 10.38C0.35 9.39 0 8.24 0 7C0 5.27609 0.684819 3.62279 1.90381 2.40381C3.12279 1.18482 4.77609 0.5 6.5 0.5C8.22391 0.5 9.87721 1.18482 11.0962 2.40381C12.3152 3.62279 13 5.27609 13 7C13 8.24 12.65 9.39 12.05 10.38Z" fill="white" />
                            </svg>
                        </div>
                        <span>Республика Ингушетия, город Назрань, улица Школьная, д. 5</span>
                    </div>
                    <div className="footer__contacts">
                        <div className="footer__contacts-phone">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 19C17.8978 19 18.2794 18.842 18.5607 18.5607C18.842 18.2794 19 17.8978 19 17.5V14C19 13.6022 18.842 13.2206 18.5607 12.9393C18.2794 12.658 17.8978 12.5 17.5 12.5C16.33 12.5 15.18 12.32 14.08 11.95C13.817 11.867 13.5363 11.8576 13.2683 11.9228C13.0004 11.988 12.7554 12.1254 12.56 12.32L11.12 13.76C8.63231 12.4023 6.58768 10.3577 5.23 7.87L6.66 6.44C7.07 6.05 7.22 5.47 7.04 4.91C6.68 3.82 6.5 2.67 6.5 1.5C6.5 1.10218 6.34196 0.720644 6.06066 0.43934C5.77936 0.158035 5.39782 0 5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5C0 11.15 7.85 19 17.5 19ZM1.5 1H5C5.13261 1 5.25979 1.05268 5.35355 1.14645C5.44732 1.24021 5.5 1.36739 5.5 1.5C5.5 2.78 5.7 4.03 6.09 5.22C6.14 5.36 6.13 5.56 5.97 5.72L4 7.68C5.65 10.91 8.07 13.33 11.31 15L13.26 13.03C13.4 12.89 13.59 12.85 13.77 12.9C14.97 13.3 16.22 13.5 17.5 13.5C17.6326 13.5 17.7598 13.5527 17.8536 13.6464C17.9473 13.7402 18 13.8674 18 14V17.5C18 17.6326 17.9473 17.7598 17.8536 17.8536C17.7598 17.9473 17.6326 18 17.5 18C8.4 18 1 10.6 1 1.5C1 1.36739 1.05268 1.24021 1.14645 1.14645C1.24021 1.05268 1.36739 1 1.5 1Z" fill="white" />
                            </svg>
                            <a href="tel:+79994934526">+7 (906) 488-87-74</a>
                        </div>
                        <div className="footer__contacts-mail">
                            <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2451 0.234375H2.75553C2.06487 0.234375 1.40249 0.508742 0.91411 0.997118C0.425734 1.48549 0.151367 2.14787 0.151367 2.83854V14.1615C0.151367 14.8521 0.425734 15.5145 0.91411 16.0029C1.40249 16.4913 2.06487 16.7656 2.75553 16.7656H18.2451C18.9358 16.7656 19.5982 16.4913 20.0865 16.0029C20.5749 15.5145 20.8493 14.8521 20.8493 14.1615V2.83854C20.8493 2.14787 20.5749 1.48549 20.0865 0.997118C19.5982 0.508742 18.9358 0.234375 18.2451 0.234375ZM2.75553 1.27604H18.2451C18.6394 1.2749 19.0193 1.42397 19.3076 1.69293C19.5959 1.96188 19.771 2.33055 19.7972 2.72396C17.2243 4.09896 14.641 5.46354 12.0576 6.83854C11.7081 7.05756 11.3384 7.24244 10.9535 7.39062C10.6513 7.45026 10.3399 7.44487 10.0399 7.37483C9.73997 7.30478 9.45838 7.17168 9.21387 6.98438C7.7347 6.20312 6.25553 5.41146 4.78678 4.63021C3.59928 4.00521 2.39095 3.36979 1.20345 2.73438C1.22761 2.33929 1.4017 1.96833 1.69017 1.69729C1.97864 1.42624 2.35971 1.27557 2.75553 1.27604ZM19.8076 14.1615C19.8076 14.5759 19.643 14.9733 19.35 15.2663C19.0569 15.5593 18.6595 15.724 18.2451 15.724H2.75553C2.34113 15.724 1.94371 15.5593 1.65068 15.2663C1.35765 14.9733 1.19303 14.5759 1.19303 14.1615V3.91667C3.65137 5.20833 6.09928 6.52083 8.55762 7.82292C8.99683 8.0922 9.46967 8.30235 9.96387 8.44792C10.6872 8.56552 11.4285 8.41355 12.0472 8.02083C13.5576 7.22917 15.0576 6.42708 16.568 5.63542C17.6514 5.05208 18.7243 4.48958 19.8076 3.91667V14.1615Z" fill="white" />
                            </svg>
                            <a href="mailto:soyuzpisateleyri06@gmail">soyuzpisateleyri06@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer