import './Game.css'

function Game(props){
    const hasLogged = (() => {
        window.alert('Você deve fazer login para jogar !')
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