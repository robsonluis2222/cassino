import React, { useState, useRef, useEffect } from 'react';
import logo from '../../assets/logo.png';
import {api} from '../../provider'
import './Navbar.css';

function Navbar() {
    const signRef = useRef(null);
    const loginRef = useRef(null);
    const registerRef = useRef(null);
    const inRef = useRef(null);
    const upRef = useRef(null);
    const depositoDivRef = useRef(null);
    const referenciaCode = useRef(null);
    const imagemCode = useRef(null);
    const inputRef = useRef(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [base64String, setBase64String] = useState('');
    const [paymentCode, setPaymentCode] = useState('');

    useEffect(() => {
        const hasAccount = localStorage.getItem('isUser');
        if (hasAccount === 'true') {
            const botaoRegistro = document.getElementById('register-btn');
            const botaoDeposito = document.getElementById('deposit-btn');
            botaoRegistro.style.display = 'none';
            botaoDeposito.style.display = 'flex';
        } else {
            console.log("não ta logado");
        }
    }, []);

    const isRegistred = async () => {
        const urlBase = 'https://clicklucro.000webhostapp.com/registro.php?param1=' + newEmail + '&param2=' + newPassword;
        const response = await fetch(urlBase);
        const text = await response.text();
        if (text === 'true') {
            window.alert('Conta criada com sucesso !');
            localStorage.setItem('isUser', 'true');
            console.log(localStorage.getItem('isUser'));
            const signDiv = signRef.current;
            signDiv.style.display = 'none';
            window.location.reload();
        } else {
            window.alert('E-mail ou senha invalidos !');
        }
    }

    const novaSenha = (e) => {
        setNewPassword(e.target.value)
    }

    const novoEmail = (e) => {
        setNewEmail(e.target.value)
    }

    const copyCode = () => {
        inputRef.current.select();
        document.execCommand('copy');
        alert("QR CODE COPIADO !")
    }

    const runPayment = (valorPix) => {
        api.post('/', {
            "requestNumber": "1186",
            "dueDate": "2024-07-10",
            "amount": valorPix,
            "discountAmount": 0.0,
            "client": {
                "name":"Robson Luis Leite Junior",
                "document":"133.166.609-09",
                "phoneNumber": "47996579387",
                "email": "robsonluis2222@gmail.com"
            }
        })
        .then(response => {
            setBase64String(response.data.paymentCodeBase64)
            setPaymentCode(response.data.paymentCode)
            referenciaCode.current.style.height = "550px"
            imagemCode.current.style.display = "flex"
            console.log(response.data)
        })
        .catch(error => {
            console.log("erro: " + error)
        })

    }

    const closeDepClick = () => {
        depositoDivRef.current.style.display = 'none';
    }

    const emailChange = (event) => {
        setEmail(event.target.value);
    };

    const passwordChange = (event) => {
        setPassword(event.target.value);
    };

    const isLogged = async () => {
        const urlBase = 'https://clicklucro.000webhostapp.com/login.php?param1=' + email + '&param2=' + password;
        const response = await fetch(urlBase);
        const text = await response.text();
        if (text === 'true') {
            window.alert('Seja bem vindo !');
            localStorage.setItem('isUser', 'true');
            console.log(localStorage.getItem('isUser'));
            const signDiv = signRef.current;
            signDiv.style.display = 'none';
            window.location.reload();
        } else {
            window.alert('E-mail ou senha invalidos !');
        }
    };

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

    const openDeposit = () => {
        const containerDeposit = depositoDivRef.current;
        containerDeposit.style.display = 'flex';
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
            <div className='deposit-container' ref={depositoDivRef}>
                <div className='deposit-div' ref={referenciaCode}>
                    <i className="bi bi-x-circle" onClick={closeDepClick}></i>
                    <div className='title-deposit'>
                        <span className='title-dep'>Depósito</span>
                        <span className='subtitle-dep'>Selecione o valor:</span>
                    </div>
                    <div className='options'>
                        <span onClick={() => runPayment(20.0)}>R$ 20,00</span>
                        <span onClick={() => runPayment(50.0)}>R$ 50,00</span>
                        <span onClick={() => runPayment(75.0)}>R$ 75,00</span>
                        <span onClick={() => runPayment(100.0)}>R$ 100,00</span>
                        <span onClick={() => runPayment(150.0)}>R$ 150,00</span>
                        <span onClick={() => runPayment(200.0)}>R$ 200,00</span>
                    </div>
                    <div className='qr-code-show-div' ref={imagemCode}>
                        <img className='img-qr-code' src={`data:image/png;base64,${base64String}`} alt="Imagem Base64" />
                        <input type="text" value={paymentCode} ref={inputRef} />
                        <button onClick={copyCode}>Copiar QR CODE</button>
                    </div>
                </div>
            </div>

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
                        <input className="input" type="text" placeholder='E-Mail' onChange={emailChange} />
                        <input className="input" type="password" placeholder='Senha' onChange={passwordChange} />
                        <button className="button" onClick={isLogged}>Entrar</button>
                    </div>
                    <div className='signup-div' ref={upRef}>
                        <h4>R E G I S T R O</h4>
                        <input className="input" type="text" placeholder='E-Mail' onChange={novoEmail} />
                        <input className="input" type="password" placeholder='Senha' onChange={novaSenha} />
                        <button className="button" onClick={isRegistred}>Criar conta</button>
                    </div>
                </div>
            </div>
            <div className='navbar'>
                <div className='logo-container'>
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <div className='nav'>
                    <button className="cssbuttons-io-button" id='register-btn' onClick={registerClick}>
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

                    <button className="cssbuttons-io-button" id='deposit-btn' style={{ display: 'none' }} onClick={openDeposit}>
                        Depositar
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