import Link from "next/link";
import "./about.css"

const Layout = ({ children }) => {
    return (
        <div>
            <ul className="login-menu">
                <li>
                    <h4>About Navbar</h4>
                </li>

                <li>
                    <Link href="/about">About Main</Link>
                </li>
                <li>
                    <Link href="/about/aboutstudent">Student About</Link>
                </li>
                <li>
                    <Link href="/about/aboutcollege">College About</Link>
                </li>
            </ul>
            <br />
            {children}
        </div>
    )
}

export default Layout