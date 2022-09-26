import './cats.css'
import phone from '../assets/phone-icon.png'
import mail from '../assets/mail-icon.png'

export default function Cat(props) {
    return (
        <div className="contact-card">
            <img src={props.image} />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phone} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mail} />
                <p>{props.email}</p>
            </div>
        </div>
    );
}
