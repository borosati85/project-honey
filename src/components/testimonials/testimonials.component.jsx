import React from 'react';
import { useState, useEffect } from 'react';
import TestimonialCard from '../testimonial-card/testimonial-card.component';
import { TestimonialsContainer, TestimonalsTitle, CardContainer, Arrow } from './testimonials.styles';
import getTestimonials from '../../data/testimonials';


const Testimonials = () => {
    const testimonials = getTestimonials();
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(
        innerWidth >= 1200 ? 2
        : innerWidth >= 768 ? 1
        : 0
    )
    const handleResize = event => {
        setInnerWidth((prevState) => window.innerWidth);
        const index =
        window.innerWidth >= 1200 ? 2
        : window.innerWidth >= 768 ? 1
        : 0
        setEndIndex(index)
    }

    const selectNext = () => {
        
    }

    const selectPrevious = () => {

    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <TestimonialsContainer>
            <TestimonalsTitle>Rólunk mondták {innerWidth} - {endIndex}</TestimonalsTitle>            
            <CardContainer>
                <Arrow>&#10094;</Arrow>
                {
                    testimonials.filter((testimonial, idx) => idx >= startIndex && idx <= endIndex)
                    .map(({ id, ...otherProps }) => <TestimonialCard key={id} {...otherProps} />)
                }
                <Arrow>&#10095;</Arrow>
            </CardContainer>
            
        </TestimonialsContainer>
        )
}

export default Testimonials;