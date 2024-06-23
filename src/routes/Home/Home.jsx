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
                        <img src="https://i.imgur.com/7tMmNrV.jpeg" alt="" />
                    </div>
                    <div className='games'>
                        <Game name="Fortune Tiger" img="https://laranja9.s3.sa-east-1.amazonaws.com/dev/laranja7/1698487744701-Fortune_Tiger.png"/>
                        <Game name="Fortune Mouse" img="https://laranja9.s3.sa-east-1.amazonaws.com/dev/laranja7/1698487693545-Fortune_Mouse.png"/>
                        <Game name="Dragon Tiger" img="https://laranja9.s3.sa-east-1.amazonaws.com/dev/luaujogo/img/1707835930523-fortune-dragon_web-banner_500_500_en_nolabel.jpg"/>
                        <Game name="Fortune Ox" img="https://laranja9.s3.sa-east-1.amazonaws.com/dev/laranja7/1698487708333-Fortune_Ox.png"/>
                        <Game name="Dragon Hatch" img="https://laranja9.s3.sa-east-1.amazonaws.com/dev/laranja7/1698487569741-Dragon_Hatch.png"/>
                        <Game name="Ganesha Gold" img="https://laranja9.s3.sa-east-1.amazonaws.com/dev/laranja7/1698487558043-Double_Fortune.png"/>
                        <Game name="Mafia Mayhem" img="https://laranja9.s3.sa-east-1.amazonaws.com/dev/hiperbetgm/img/1702564477276-mafia-mayhem_web-banner_500_500_en.png"/>
                        <Game name="Forge Wealth" img="https://laranja9.s3.sa-east-1.amazonaws.com/dev/preciosa777gd/img/1700722434115-forge-of-wealth_web-banner_500_500_en.png"/>
                        <Game name="Wild Heist" img="https://laranja9.s3.sa-east-1.amazonaws.com/dev/laranja7/1699864526002-wild-heist-cashout_web-banner_en.jpg"/>
                        <Game name="Suggar Rush" img="https://api-br1.pragmaticplay.net/game_pic/square/200/vs20sugarrush.png"/>
                        <Game name="Zeus V Hades" img="https://api-br1.pragmaticplay.net/game_pic/square/200/vs15godsofwar.png"/>
                        <Game name="Big Bass" img="https://api-br1.pragmaticplay.net/game_pic/square/200/vs10bbextreme.png"/>
                        <Game name="Ninja Raccoon" img="https://laranja9.s3.sa-east-1.amazonaws.com/dev/laranja7/1698912049017-ninja-raccoon-frenzy_web-banner_en.png"/>
                        <Game name="Fruit Candy" img="https://laranja9.s3.sa-east-1.amazonaws.com/dev/laranja7/1695275426287-fruity-candy_web-banner_500_500_en.jpg"/>
                        <Game name="Midas Fortune" img="https://laranja9.s3.sa-east-1.amazonaws.com/dev/laranja7/1698488219423-Midas_Fortune.png"/>
                        <div className='copy'><span>Copyright &copy; Luxury777</span></div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Home;
