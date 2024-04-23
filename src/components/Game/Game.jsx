import './Game.css'

function Game(props){
    const hasLogged = (() => {
        const hasAccount = localStorage.getItem('isUser');
        if (hasAccount === 'true') {
            window.alert("Você precisa depositar antes de jogar !");
        } else {
            window.alert("Você precisa fazer login para jogar !");
        }
    });
    return(
        <div className="container">
            <div className='games'>
                <div className='game' onClick={hasLogged}>
                    <img src={props.img} alt="tiger" />
                    <span>{props.name}</span>
                </div>
            </div>
        </div>
    )
}

export default Game;