import logo from '../images/logo.svg';

const Navbar = (props) => {
    const navBarLinks = props.navBarLinks;
    const navIcons = props.navIcons;

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <ul className="nav-links" id="nav-links">
                    {
                        navBarLinks.map((element) => {
                            const {id , href , text} = element;
                            return (
                                <li>
                                    <a key={id} href={href} className='nav-link'>{text} </a>
                                </li>
                            )
                        })
                    }
                </ul>

                <ul className="nav-icons">
                    {
                        navIcons.map((element) => {
                            const {id , href , icon} = element;
                            return (
                                <li>
                                    <a key={id } href={href} target='_blank' className='nav-icon' rel='noreferrer'>
                                        <i className={icon}></i>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;