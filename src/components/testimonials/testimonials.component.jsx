import React from 'react';
import { useState, useEffect } from 'react';
import TestimonialCard from '../testimonial-card/testimonial-card.component';
import { TestimonialsContainer, TestimonalsTitle, CardContainer, Arrow } from './testimonials.styles';
import getTestimonials from '../../data/testimonials';


const Testimonials = () => {
    const testimonials = getTestimonials();
    const getIndex = width => width >= 1200 ? 3 : width >= 768 ? 2 : 1
    const startIndex = 0;
    const endIndex = getIndex(window.innerWidth);
    const [displayedCards, setDisplayedCards] = useState(testimonials.slice(startIndex,endIndex));

    const handleResize = event => {
        const index = getIndex(window.innerWidth);
        const cards = testimonials.slice(0,index);
        setDisplayedCards(cards);
    }

    const selectNext = () => {
        setDisplayedCards(prevState => {
            const lastItemIndex = prevState[prevState.length-1].id;
            const newItemIndex = lastItemIndex + 1 > 4 ? 0 : lastItemIndex + 1;
            const newtItem = testimonials[newItemIndex];
            const newState = [...prevState];
            newState.shift();
            newState.push(newtItem);
            return newState;
        })
    }

    const selectPrevious = () => {
        setDisplayedCards(prevState => {     
            const firstItemIndex = prevState[0].id;
            const newItemIndex = firstItemIndex - 1 < 0 ? 4 : firstItemIndex - 1;
            const newItem = testimonials[newItemIndex];
            const newState = [...prevState];            
            newState.pop();
            newState.unshift(newItem);
            return newState;
        })
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <TestimonialsContainer>
            <TestimonalsTitle>Rólunk mondták</TestimonalsTitle>            
            <CardContainer>
                <Arrow onClick={selectPrevious}>&#10094;</Arrow>
                {
                    displayedCards.map(({ id, ...otherProps }) => <TestimonialCard key={id} {...otherProps} />)
                }
                <Arrow onClick={selectNext}>&#10095;</Arrow>
            </CardContainer>
            
        </TestimonialsContainer>
        )
}

export default Testimonials;