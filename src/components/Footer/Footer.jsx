import './Footer.css'
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <div className="container">
            <div className="footer">
                <div className='jogos'>
                    <i class="bi bi-joystick"></i>
                    <span>Games</span>
                </div>
                <div className='ganhos'>
                    <i class="bi bi-cash-coin"></i>
                    <span>Ganhos</span>
                </div>
                <div className='conta'>
                    <i class="bi bi-person-circle"></i>
                    <span>Conta</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;