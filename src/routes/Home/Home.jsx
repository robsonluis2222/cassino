import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Game from '../../components/Game/Game'
import './Home.css'

function Home(){
    return(
        <>
            <Navbar />
            <div className='container'>
                <div className='header-div'>
                    <div className='carrossel'>
                        <img src="https://p.petrichor777.com/game/PC/Banner-VIP1.png" alt="" />
                    </div>
                    <div className='games'>
                        <Game name="Fortune Tiger" img="https://laranja9.s3.sa-east-1.amazonaws.com/dev/laranja7/1698487744701-Fortune_Tiger.png"/>
                        <Game name="Fortune Mouse" img="https://api.petrichor777.com/icon/10005.png"/>
                        <Game name="Dragon Tiger" img="https://api.petrichor777.com/icon/10006.png"/>
                        <Game name="Fortune Ox" img="https://api.petrichor777.com/icon/10003.png"/>
                        <Game name="Dragon Hatch" img="https://api.petrichor777.com/icon/10007.png"/>
                        <Game name="Ganesha Gold" img="https://api.petrichor777.com/icon/10008.png"/>
                        <Game name="Jungle Delight" img="https://api.petrichor777.com/icon/10009.png"/>
                        <Game name="Genie's 3" img="https://api.petrichor777.com/icon/10010.png"/>
                        <Game name="Buffalo Win" img="https://api.petrichor777.com/icon/10011.png"/>
                        <Game name="Lucky Piggy" img="https://api.petrichor777.com/icon/10012.png"/>
                        <Game name="Ganesha Fort" img="https://api.petrichor777.com/icon/10013.png"/>
                        <Game name="Icespace Great" img="https://api.petrichor777.com/icon/10014.png"/>
                        <Game name="Bikini Paradise" img="https://api.petrichor777.com/icon/10015.png"/>
                        <Game name="Midas Fortune" img="https://api.petrichor777.com/icon/10016.png"/>
                        <Game name="Fortune Tree" img="https://api.petrichor777.com/icon/10017.png"/>
                        <div className='copy'><span>Copyright &copy; Luxury777</span></div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;
