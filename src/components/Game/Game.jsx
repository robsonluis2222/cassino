import './Game.css'

function Game(props){
    return(
        <div className="container">
            <div className='games'>
                <div className='game'>
                    <img src={props.img} alt="tiger" />
                    <span>{props.name}</span>
                </div>
            </div>
        </div>
    )
}

export default Game;