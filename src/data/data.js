const products = [
    {
        id: 0,
        title: 'Akácméz (1000 g)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 3500,
        imageURL: 'https://unblast.com/wp-content/uploads/2019/03/Honey-Jar-Mockup-3.jpg'
    },
    {
        id: 1,
        title: 'Virágméz (1000 g)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 3000,
        imageURL: 'https://unblast.com/wp-content/uploads/2019/03/Honey-Jar-Mockup-3.jpg'
    },
    {
        id: 2,
        title: 'Vegyes méz (1000 g)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        price: 3200,
        imageURL: 'https://unblast.com/wp-content/uploads/2019/03/Honey-Jar-Mockup-3.jpg'
    },
]

const getProducts = () => [...products];

export default getProducts;