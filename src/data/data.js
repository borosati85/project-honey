const products = [
    {
        id: 0,
        title: 'Akácméz',
        description: 'Akácméz 1000g',
        price: 3500,
        imageURL: 'https://unblast.com/wp-content/uploads/2019/03/Honey-Jar-Mockup-3.jpg'
    },
    {
        id: 1,
        title: 'Virágméz',
        description: 'Virágméz',
        price: 3000,
        imageURL: 'https://unblast.com/wp-content/uploads/2019/03/Honey-Jar-Mockup-3.jpg'
    },
    {
        id: 2,
        title: 'Vegyes méz',
        description: 'Vegyes méz',
        price: 3200,
        imageURL: 'https://unblast.com/wp-content/uploads/2019/03/Honey-Jar-Mockup-3.jpg'
    },
]

const getProducts = () => [...products];

export default getProducts;