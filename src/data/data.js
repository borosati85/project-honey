const products = [
    {
        id: 0,
        title: 'Akácméz',
        description: 'Akácméz 1000g',
        imageURL: 'https://unblast.com/wp-content/uploads/2019/03/Honey-Jar-Mockup-3.jpg'
    },
    {
        id: 1,
        title: 'Virágméz',
        description: 'Virágméz',
        imageURL: 'https://unblast.com/wp-content/uploads/2019/03/Honey-Jar-Mockup-3.jpg'
    },
    {
        id: 2,
        title: 'Vegyes méz',
        description: 'Vegyes méz',
        imageURL: 'https://unblast.com/wp-content/uploads/2019/03/Honey-Jar-Mockup-3.jpg'
    },
]

const getProducts = () => [...products];

export default getProducts;