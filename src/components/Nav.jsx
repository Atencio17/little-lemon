import logo from "../icons_assets/Logo.svg"

const Nav = () => {
    return (
        <nav>
            <img src={logo} alt="little-lemon-logo" />
            <ul>
                <li><a href="/home">Homepage</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </nav>
    );
}

export default Nav;