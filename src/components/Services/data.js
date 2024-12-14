import { faSearch, faGlobe, faTruck, faUtensils, faStore, faBook } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: 1,
        heading: 'Custom Sauce Development',
        content: 'Customers can create personalized sauces at affordable prices, perfect for restaurants and events. Subscribe to get the service',
        to: '/',
        icon: faUtensils, 
        contents: [
            {
                heading: 'Get The Maximum Benefits',
                img: '/assets/individualService/Image.png', 
                content: 'Lorem ipsum dolor sit amet...'
            },
            {
                heading: 'Get The Maximum Benefits',
                img: '/assets/individualService/Image_2.png',
                content: 'Lorem ipsum dolor sit amet...'
            },
        ]
    },
    {
        id: 2,
        heading: 'Subscription Service',
        content: 'With our subscription service, you will receive a curated selection of Mebiut sauces monthly or quarterly. This convenient model ensures a steady supply and encourages regular use.',
        to: '/',
        icon: faGlobe, // FontAwesome icon
        contents: [
            {
                heading: 'Get The Maximum Benefits',
                img: '/assets/individualService/Image.png',
                content: 'Enjoy hassle-free deliveries...'
            },
            {
                heading: 'Get The Maximum Benefits',
                img: '/assets/individualService/Image_2.png',
                content: 'Customize your subscription...'
            },
        ]
    },
    {
        id: 3,
        heading: 'Corporate and Bulk Orders',
        content: 'Businesses can order in bulk for consistent supply, ensuring cost savings and increased profits.',
        to: '/',
        icon: faTruck, // FontAwesome icon for bulk orders
        contents: [
            {
                heading: 'Get The Maximum Benefits',
                img: '/assets/individualService/Image.png',
                content: 'Benefit from special pricing...'
            },
            {
                heading: 'Get The Maximum Benefits',
                img: '/assets/individualService/Image_2.png',
                content: 'We provide seamless ordering...'
            },
        ]
    },
    {
        id: 4,
        heading: 'Sauce Tastings and Workshops',
        content: 'Engaging workshops let customers explore flavors and pairings, building loyalty and encouraging purchases.',
        to: '/',
        icon: faSearch, // FontAwesome icon for exploring or discovering
        contents: [
            {
                heading: 'Get The Maximum Benefits',
                img: '/assets/individualService/Image.png',
                content: 'Join us for engaging workshops...'
            },
            {
                heading: 'Get The Maximum Benefits',
                img: '/assets/individualService/Image_2.png',
                content: 'Taste and learn about our sauces...'
            },
        ]
    },
    {
        id: 5,
        heading: 'Wholesale and Distribution',
        content: 'Retailers can stock Mebiut sauces, broadening their offerings and generating additional sales revenue.',
        to: '/',
        icon: faStore, // FontAwesome icon for wholesale and distribution
        contents: [
            {
                heading: 'Get The Maximum Benefits',
                img: '/assets/individualService/Image.png',
                content: 'Partner with us to access a wide range of sauces...'
            },
            {
                heading: 'Get The Maximum Benefits',
                img: '/assets/individualService/Image_2.png',
                content: 'Our wholesale program ensures...'
            },
        ]
    },
    {
        id: 6,
        heading: 'Recipe Education',
        content: 'We offer recipe education for a subscription fee of Ksh 100.',
        to: '/',
        icon: faBook, // FontAwesome icon for education
        contents: [
            {
                heading: 'Get The Maximum Benefits',
                img: '/assets/individualService/Image.png',
                content: ''
            },
            {
                heading: 'Get The Maximum Benefits',
                img: '/assets/individualService/Image_2.png',
                content: ''
            },
        ]
    }
];

export default data;
