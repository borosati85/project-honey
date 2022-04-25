import blank from "../assets/blank-profile.png";
import profile1 from "../assets/profilepic1.png";
import profile2 from "../assets/profilepic2.png";
import profile3 from "../assets/profilepic3.png";
import profile4 from "../assets/profilepic5.jpg";
import profile5 from "../assets/profilepic6.jpg";

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
    name: "Vásárló 4",
    imageUrl: profile4,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet est ut sem feugiat elementum. Nullam a elit eros."
  },

  {
    id: 4,
    name: "Vásárló 5",
    imageUrl: profile5,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan laoreet neque, ac scelerisque odio imperdiet at."
  }
];

const getTestimonials = () => [...testimonials];

export default getTestimonials;
