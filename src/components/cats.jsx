import './cats.css'
import phoneIcon from '../assets/phone-icon.png'
import mailIcon from '../assets/mail-icon.png'

export default function Cat({image,name,phone,email}) {
    return (
        <div className="contact-card">
            <img src={image} />
            <h3>{name}</h3>
            <div className="info-group">
                <img src={phoneIcon} />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} />
                <p>{email}</p>
            </div>
        </div>
    );
}
