import { NavLink } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
    return (
        <section className='navigation'>
            <div className='container'>
            <ul className='navigation__list'>
                <li className='navigation__item'>
                    <NavLink to='/' className={({ isActive }) => isActive? "navigation__link--active": 'navigation__link'}>
                        Home
                    </NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink to='/movies' className={({ isActive }) => isActive? "navigation__link--active": 'navigation__link'}>
                        Movies
                    </NavLink>
                </li>
            </ul>
        </div>
        </section>
    );
}

export default Navigation;