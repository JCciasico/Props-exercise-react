import './cats.css'
import phone from '../assets/phone-icon.png'
import mail from '../assets/mail-icon.png'

export default function Cat(props) {
    return (
        <div className="contact-card">
            <img src={props.image} />
            <h3>Mr. Whiskerson</h3>
            <div className="info-group">
                <img src={phone} />
                <p>(212) 555-1234</p>
            </div>
            <div className="info-group">
                <img src={mail} />
                <p>mr.whiskaz@catnap.meow</p>
            </div>
        </div>
    );
}
