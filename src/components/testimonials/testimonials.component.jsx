import React from 'react';
import { useState, useEffect } from 'react';
import TestimonialCard from '../testimonial-card/testimonial-card.component';
import { TestimonialsContainer, TestimonalsTitle, CardContainer, Arrow } from './testimonials.styles';
import getTestimonials from '../../data/testimonials';


const Testimonials = () => {
    const testimonials = getTestimonials();
    const itemsToDisplay = {
        280: 1,
        768: 2,
        1200: 3
    }
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const handleResize = event => {
        setInnerWidth((prevState) => window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <TestimonialsContainer>
            <TestimonalsTitle>Rólunk mondták {innerWidth}</TestimonalsTitle>            
            <CardContainer>
                <Arrow>&#10094;</Arrow>
                {
                    testimonials.filter((testimonial, idx) => innerWidth > 1200 ? idx < 3 : innerWidth > 768 ? idx < 2 : idx < 1)
                    .map(({ id, ...otherProps }) => <TestimonialCard key={id} {...otherProps} />)
                }
                <Arrow>&#10095;</Arrow>
            </CardContainer>
            
        </TestimonialsContainer>
        )
}

export default Testimonials;