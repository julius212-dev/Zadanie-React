import logo from './itsmart.png';

const NavBar = () => {

    return ( 
        <nav className="navbar">
            <h1 className="left">Merace</h1>
            <img src={logo} alt="ismart"/>
        </nav>
    );
}
 
export default NavBar;