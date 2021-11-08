import logoImg from "../assets/images/logo-icon.png";
import "../styles/footer.scss";

export const Footer = () => {
    return(
        <footer className="summary-footer">
            <div className="footer-left-content">
                <img src={logoImg} alt='ecomebli'/>
                <p>Працюємо<br/>по всій україні</p>
            </div>
            <div className="footer-center-content">
                <p>093 182 62 35</p>
                <p>098 755 41 78</p>
            </div>
            <div className="footer-right-content">
                <p>Facebook</p>
                <p>Viber</p>
            </div>
        </footer>
    )
}