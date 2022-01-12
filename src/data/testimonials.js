import blank from "../assets/blank-profile.png";

const testimonials = [
  {
    id: 0,
    name: "name0",
    imageUrl: blank,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet est ut sem feugiat elementum. Nullam a elit eros."
  },

  {
    id: 1,
    name: "name1",
    imageUrl: blank,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  },

  {
    id: 2,
    name: "name2",
    imageUrl: blank,
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
