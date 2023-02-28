import { Link } from 'react-router-dom';
import { AppRoute } from '../../AppRoute';

function Nav() {
    return (
        <nav className="nav nav--closed">
            <button className="nav__toggle" type="button">
                <span className="visually-hidden">Открыть меню</span>
            </button>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link className="nav-link" to={AppRoute.Products}>Products</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={AppRoute.Pricing}>Pricing</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={AppRoute.FAQ}>FAQ</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={AppRoute.Blog}>Blog</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;