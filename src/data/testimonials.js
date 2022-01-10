import blank from "../assets/blank-profile.png";
import Palffy from "../assets/Pálffy.jpg";

const testimonials = [
  {
    id: 0,
    name: "name0",
    imageUrl: blank,
    quote: "quote0"
  },

  {
    id: 1,
    name: "name1",
    imageUrl: blank,
    quote: "quote1"
  },

  {
    id: 2,
    name: "name2",
    imageUrl: blank,
    quote: "quote2"
  },

  {
    id: 3,
    name: "Pálffy Tamás",
    imageUrl: Palffy,
    quote: "Balázs egy geci... mert egy geci."
  },

  {
    id: 4,
    name: "Vass Timi",
    imageUrl: blank,
    quote: "Balázs mézénél soha nem ettem jobbat. Tényleg... Őszintén mondom..."
  }
];

const getTestimonials = () => [...testimonials];

export default getTestimonials;
