import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
