import Link from "next/link"
import './styles.css';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__container-wrapper">
                    <div className="footer__inner">
                        <div className="footer__inner-wrapper">
                            <div className="footer__content">
                                <div className="footer__grid">
                                    <nav className="footer__nav">
                                        <li className="footer__nav-list"></li>
                                        {
                                           [ { label: "Home", link: '' }, { label: "Articles", link: 'blog' }].map((item, index) =>(
                                            <Link key={item.label + index + item.link} href={`/${item.link}`} className="footer__nav-link" >{item.label}</Link>
                                           ))
                                        }
                                        
                                    </nav>
                                    <p className="footer__copyright">© {new Date().getFullYear()} e-rojas. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}