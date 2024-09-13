import logo from './itsmart.png';

const NavBar = () => {

    return ( 
        <nav className="navbar">
            <h1 className="left">Merače</h1>
            <img src={logo} alt="ismart"/>
        </nav>
    );
}
 
export default NavBar;