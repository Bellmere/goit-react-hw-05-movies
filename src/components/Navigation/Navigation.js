import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className='container'>
            <ul className='navigation__list'>
                <li className='navigation__item'>
                    <NavLink exact to='/' className="navigation__link" activeClassName="navigation__link--active">
                        Home
                    </NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink exact to='/movies' className="navigation__link" activeClassName="navigation__link--active">
                        Movies
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;