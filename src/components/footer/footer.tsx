import { Link } from 'react-router-dom';
// import Nav from '../nav/nav';
import Logo from '../logo/logo';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__wrapper'>
                <Logo component={'footer'}/>
                {/* <Nav /> */}
                <ul className="footer__social-list">
                    <li className="footer__social-item">
                        <Link to='' className='footer__social-link'>
                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 6.66667H0V10H2.5V20H6.66667V10H9.66667L10 6.66667H6.66667V5.25C6.66667 4.5 6.83333 4.16667 7.58333 4.16667H10V0H6.83333C3.83333 0 2.5 1.33333 2.5 3.83333V6.66667Z" fill="#8794BA" />
                            </svg>
                            <span className='visually-hidden'>Facebook</span>
                        </Link>
                    </li>
                    <li className="footer__social-item">
                        <Link to='' className='footer__social-link'>
                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.7392 20C17.0259 20 22.1045 12.3061 22.1045 5.63472C22.1045 5.41612 22.1 5.19865 22.0899 4.98202C23.0757 4.26942 23.9327 3.37993 24.6086 2.36786C23.704 2.76978 22.7306 3.04043 21.7093 3.16246C22.7516 2.53747 23.5521 1.54834 23.9296 0.369453C22.9539 0.947983 21.8736 1.36838 20.7238 1.59509C19.8021 0.613796 18.49 0 17.0382 0C14.2497 0 11.9885 2.26122 11.9885 5.04835C11.9885 5.44467 12.033 5.8298 12.1192 6.19953C7.92337 5.98878 4.20253 3.97946 1.71264 0.924752C1.27853 1.67066 1.02859 2.53775 1.02859 3.46222C1.02859 5.21376 1.92004 6.76015 3.27554 7.66503C2.44735 7.63956 1.66926 7.41173 0.988846 7.03332C0.987727 7.05431 0.987727 7.07558 0.987727 7.09769C0.987727 9.54308 2.72835 11.5846 5.03827 12.0472C4.61424 12.1628 4.1681 12.225 3.7074 12.225C3.38217 12.225 3.0659 12.1925 2.7583 12.134C3.40093 14.1397 5.26498 15.5996 7.47498 15.6407C5.74667 16.9951 3.5697 17.802 1.20436 17.802C0.797123 17.802 0.395203 17.7788 0 17.7321C2.23435 19.164 4.88741 20 7.7392 20Z" fill="#8794BA" />
                            </svg>
                            <span className='visually-hidden'>Twitter</span>
                        </Link>
                    </li>
                    <li className="footer__social-item">
                        <Link to='' className='footer__social-link'>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6086 1.83333C13.2753 1.83333 13.6086 1.83333 14.692 1.91667C17.442 2 18.692 3.33333 18.7753 6C18.8586 7.08333 18.8586 7.33333 18.8586 10C18.8586 12.6667 18.8586 13 18.7753 14C18.692 16.6667 17.3586 18 14.692 18.0833C13.6086 18.1667 13.3586 18.1667 10.6086 18.1667C7.94198 18.1667 7.60864 18.1667 6.60864 18.0833C3.85864 18 2.60864 16.6667 2.52531 14C2.44198 12.9167 2.44198 12.6667 2.44198 10C2.44198 7.33333 2.44198 7 2.52531 6C2.60864 3.33333 3.94198 2 6.60864 1.91667C7.60864 1.83333 7.94198 1.83333 10.6086 1.83333ZM10.6086 0C7.85864 0 7.52531 0 6.52531 0.0833333C2.85864 0.25 0.858643 2.25 0.691976 5.91667C0.608643 6.91667 0.608643 7.25 0.608643 10C0.608643 12.75 0.608643 13.0833 0.691976 14.0833C0.858643 17.75 2.85864 19.75 6.52531 19.9167C7.52531 20 7.85864 20 10.6086 20C13.3586 20 13.692 20 14.692 19.9167C18.3586 19.75 20.3586 17.75 20.5253 14.0833C20.6086 13.0833 20.6086 12.75 20.6086 10C20.6086 7.25 20.6086 6.91667 20.5253 5.91667C20.3586 2.25 18.3586 0.25 14.692 0.0833333C13.692 0 13.3586 0 10.6086 0ZM10.6086 4.83333C7.77531 4.83333 5.44198 7.16667 5.44198 10C5.44198 12.8333 7.77531 15.1667 10.6086 15.1667C13.442 15.1667 15.7753 12.8333 15.7753 10C15.7753 7.16667 13.442 4.83333 10.6086 4.83333ZM10.6086 13.3333C8.77531 13.3333 7.27531 11.8333 7.27531 10C7.27531 8.16667 8.77531 6.66667 10.6086 6.66667C12.442 6.66667 13.942 8.16667 13.942 10C13.942 11.8333 12.442 13.3333 10.6086 13.3333ZM15.942 3.5C15.2753 3.5 14.7753 4 14.7753 4.66667C14.7753 5.33333 15.2753 5.83333 15.942 5.83333C16.6086 5.83333 17.1086 5.33333 17.1086 4.66667C17.1086 4 16.6086 3.5 15.942 3.5Z" fill="#8794BA" />
                            </svg>
                            <span className='visually-hidden'>Instagram</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
