import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Nav from '../nav/nav';
import Logo from '../logo/logo';

function Header() {
    return (
        <header className='header'>
            <Logo component='header'/>
            <div className='header__wrapper'>
                <Nav />
                <div className="header__sign-container">
                    <Link className="header__sign-in" to={AppRoute.SignIn}>Sign in</Link>
                    <Link className="header__sign-up" to={AppRoute.SignUp}>Sign Up</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
