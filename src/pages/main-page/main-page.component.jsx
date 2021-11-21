import React from 'react';
import honeyJar from '../../assets/honeyjar.png';
import bee1 from '../../assets/bee1.png';
import bee3 from '../../assets/bee3.png';
import bee4 from '../../assets/bee4.png';
import bee5 from '../../assets/bee5.png';
import flower1 from '../../assets/flower1.png'
import flower2 from '../../assets/flower2.png'
import './main.styles.scss';
import CustomButton from '../../components/custom-button/custom-button.component';


const MainPage = () => (
    <main className='main-page'>        
        <div className='text-container'>
            <span className='main-title'>Bee Happy</span>
            <span className='sub-title'>A LEGJOBB HELYEN VAGY</span>
            <span className='sub-title'>AHOL A LEGJOBB MÉZET KAPOD</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam porro repudiandae aperiam nihil placeat quod corrupti perferendis rerum quia ipsam alias necessitatibus dolor sapiente, velit magni hic natus. Quae, distinctio!</p>
            <CustomButton style={{backgroundColor: 'rgb(231, 218, 142)', color: 'black'}}>Tudj meg többet</CustomButton>
        </div>
        <div className='img-container'>
            <img src={honeyJar} alt='honey jar' />
        </div>
        <img className='bee bee1' src={bee1} alt='bee'/>
        <img className='bee bee3' src={bee3} alt='bee'/>
        <img className='bee bee4' src={bee4} alt='bee'/>
        <img className='bee bee5' src={bee5} alt='bee'/>
        <img className='flower flower1' src={flower1} alt='flower'/>
    </main>
)

export default MainPage;