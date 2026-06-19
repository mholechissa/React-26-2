import { NavLink } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import styles from "./Navigation.module.css";

function Navigation() {
  const { isAuthenticated } = useAuth();

  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.navLink
            }
          >
            About
          </NavLink>
        </li>

        {isAuthenticated ? (
          <>
            <li>
              <NavLink
                to="/todos"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.navLink
                }
              >
                Todos
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.navLink
                }
              >
                Profile
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLink
              }
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;