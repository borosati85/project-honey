import React from 'react';
import './about.styles.scss';
import honey from '../../assets/honey1.png';

const AboutPage = () => (
    <section className='about-page'>
        <div className='about-container'>
          <div className='about-row about-row1'>
            <div className='about-flex-item text'>
                <span className='title'>Title</span>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error nobis architecto iste, ratione distinctio harum repellat natus dolor perferendis consequatur totam neque nisi repudiandae. Ipsum ratione non blanditiis cupiditate.</p>
            </div>
            <div className='about-flex-item img-container'>
                <img className='image' src={honey} alt='honey'/>
            </div>
          </div>
          <div className='about-row about-row2'>
            <div className='about-flex-item text'>
            <span className='title'>Title</span>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error nobis architecto iste, ratione distinctio harum repellat natus dolor perferendis consequatur totam neque nisi repudiandae. Ipsum ratione non blanditiis cupiditate.</p>
            </div>
            <div className='about-flex-item img-container'>picture2</div>
          </div>
          <div className='about-row about-row3'>
            <div className='about-flex-item text'>
            <span className='title'>Title</span>
                <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, error nobis architecto iste, ratione distinctio harum repellat natus dolor perferendis consequatur totam neque nisi repudiandae. Ipsum ratione non blanditiis cupiditate.</p>
            </div>
            <div className='about-flex-item img-container'>picture3</div>
          </div>
        </div>
    </section>
)

export default AboutPage;