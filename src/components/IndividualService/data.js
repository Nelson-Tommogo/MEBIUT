import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faBox, faClipboardCheck, faHandHoldingHeart, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: 1,
        heading: 'Custom Sauce Development',
        content: 'We offer tailored sauce development services to create unique flavors that meet your specific needs.',
        contents: [
            {
                heading: 'Personalized Recipes',
                icon: faUtensils,
                content: 'Collaborate with our chefs to design sauces that fit your taste preferences and culinary vision.'
            },
            {
                heading: 'Quality Ingredients',
                icon: faBox,
                content: 'We use only the finest ingredients to ensure your custom sauce is both delicious and high-quality.'
            },
        ]
    },
    {
        id: 2,
        heading: 'Subscription Services',
        content: 'Join our subscription service for regular deliveries of your favorite sauces right to your doorstep.',
        contents: [
            {
                heading: 'Convenient and Flexible',
                icon: faClipboardCheck,
                content: 'Choose from various subscription plans that suit your lifestyle and enjoy hassle-free sauce deliveries.'
            },
            {
                heading: 'Exclusive Offers',
                icon: faHandHoldingHeart,
                content: 'Subscribers receive special discounts and early access to new products and flavors.'
            },
        ]
    },
    {
        id: 3,
        heading: 'Corporate and Bulk Orders',
        content: 'We cater to businesses and organizations looking for bulk sauce orders for events, restaurants, or retail.',
        contents: [
            {
                heading: 'Tailored Solutions',
                icon: faClipboardCheck,
                content: 'Work with our team to find the best sauce solutions for your corporate events or food service needs.'
            },
            {
                heading: 'Competitive Pricing',
                icon: faDollarSign,
                content: 'Enjoy competitive pricing and reliable delivery for all your bulk sauce orders.'
            },
        ]
    },
    {
        id: 4,
        heading: 'Sauce Testing and Workshops',
        content: 'Join our interactive sauce testing and workshop sessions to explore flavors and improve your culinary skills.',
        contents: [
            {
                heading: 'Hands-On Experience',
                icon: faUtensils,
                content: 'Participate in hands-on workshops where you can taste and learn about various sauces.'
            },
            {
                heading: 'Expert Guidance',
                icon: faBox,
                content: 'Our experienced chefs provide guidance to help you create your own signature sauces.'
            },
        ]
    },
    {
        id: 5,
        heading: 'Wholesale Distributions',
        content: 'We offer wholesale distribution services for retailers looking to stock our range of delicious sauces.',
        contents: [
            {
                heading: 'Reliable Supply',
                icon: faHandHoldingHeart,
                content: 'Ensure a steady supply of sauces for your store with our efficient wholesale distribution network.'
            },
            {
                heading: 'Diverse Product Range',
                icon: faDollarSign,
                content: 'Choose from a diverse range of sauces to appeal to different customer tastes and preferences.'
            },
        ]
    }
];

export default data;
