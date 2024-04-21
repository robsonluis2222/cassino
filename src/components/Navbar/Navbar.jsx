import React, { useRef } from 'react';
import './Navbar.css';

function Navbar() {
    const signRef = useRef(null);
    const loginRef = useRef(null);
    const registerRef = useRef(null);
    const inRef = useRef(null);
    const upRef = useRef(null);

    const loginOptClick = () => {
        const lgn = loginRef.current;
        const rgt = registerRef.current;
        const inDiv = inRef.current;
        const upDiv = upRef.current;

        if (lgn) {
          lgn.style.color = 'white';
          rgt.style.color = 'black';
          inDiv.style.display = 'flex';
          upDiv.style.display = 'none';
        }
    };

    const registerOptClick = () => {
        const lgn = loginRef.current;
        const rgt = registerRef.current;
        const inDiv = inRef.current;
        const upDiv = upRef.current;

        if (lgn) {
          lgn.style.color = 'black';
          rgt.style.color = 'white';
          inDiv.style.display = 'none';
          upDiv.style.display = 'flex';
        }
    };

    const registerClick = () => {
        const element = signRef.current;
        if (element) {
          element.style.display = 'flex';
        }
    };

    const closeClick = () => {
        const element = signRef.current;
        if (element) {
            element.style.display = 'none';
        }
    };

    return (
        <div className='container'>
            <div className='sign' ref={signRef}>
                <div className='signDiv'>
                    <div className='title-sign'>
                        <span className='lgn-spn' ref={loginRef} onClick={loginOptClick}>Login</span>
                        <span className='separador'> | </span>
                        <span className='rgt-spn' ref={registerRef} onClick={registerOptClick}>Registrar-se</span>
                        <i className="bi bi-x-circle" onClick={closeClick}></i>
                    </div>
                    <div className='signin-div' ref={inRef}>
                        <h4>L O G I N</h4>
                        <input className="input" type="text" placeholder='E-Mail' />
                        <input className="input" type="password" placeholder='Senha' />
                        <button className="button">Entrar</button>
                    </div>
                    <div className='signup-div' ref={upRef}>
                        <h4>R E G I S T R O</h4>
                        <input className="input" type="text" placeholder='E-Mail' />
                        <input className="input" type="password" placeholder='Senha' />
                        <button className="button">Criar conta</button>
                    </div>
                </div>
            </div>
            <div className='navbar'>
                <div className='logo-container'>
                    <img src="https://via.placeholder.com/200x40" alt="logo" />
                </div>
                <div className='nav'>
                    <button className="cssbuttons-io-button" onClick={registerClick}>
                        Registrar-se
                        <div className="icon">
                            <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;