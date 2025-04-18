import '../navbar.css';
import Dropdown from '../components/NavDropdown';

const Navbar = () => {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      background: '#333',
      color: '#fff',
      width: '100%',
      borderRadius: '30px',
    },
    logo: {
      margin: 0,
    },
    navLinks: {
      listStyle: 'none',
      display: 'flex',
      gap: '16px',
    },
    // linkTheme: {
    //   display: 'flex',
    //   flexDirection: 'row',
    //   gap: '60px',
    // },
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>TheGamerHub</h2>
      {/* <div style={styles.linkTheme}> */}
      <ul style={styles.navLinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
      <Dropdown />
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
