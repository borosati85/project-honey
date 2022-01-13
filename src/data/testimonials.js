import blank from "../assets/blank-profile.png";
import profile1 from "../assets/profilepic1.png";
import profile2 from "../assets/profilepic2.png";
import profile3 from "../assets/profilepic3.png";

const testimonials = [
  {
    id: 0,
    name: "Vásárló 1",
    imageUrl: profile1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet est ut sem feugiat elementum. Nullam a elit eros."
  },

  {
    id: 1,
    name: "Vásárló 2",
    imageUrl: profile2,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },

  {
    id: 2,
    name: "Vásárló 3",
    imageUrl: profile3,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan laoreet neque, ac scelerisque odio imperdiet at."
  },

  {
    id: 3,
    name: "Pálffy Tamás",
    imageUrl: blank,
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
