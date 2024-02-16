
import logo from "../assets/Trollface.png"

export default function Header() {
    return (
        <header className = "header">
            <div className="header--logo">
                <img className="header--img" src={logo} alt="troll-face" />
                <h2 className="header--logo_title">MemeGenerator</h2>
            </div>
            <p className="header--description">  React Course - Project 3</p>
        </header>
    );
}