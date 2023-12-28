const Footer = ({ navBarLinks, navIcons }) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {
                    navBarLinks.map((element) => {
                        const { id, href, text } = element;
                        return (
                            <li>
                                <a key={id} href={href} className='footer-link'>{text} </a>
                            </li>
                        )
                    })
                }
            </ul>
            <ul className="footer-icons">
                {
                    navIcons.map((element) => {
                        const { id, href, icon } = element;
                        return (
                            <li>
                                <a key={id} href={href} target='_blank' className='footer-icon' rel='noreferrer'>
                                    <i className={icon}></i>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{currentYear}</span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer;