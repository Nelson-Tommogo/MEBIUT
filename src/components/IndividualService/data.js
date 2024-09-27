import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPepperHot, faTruck, faUsers, faClipboardList, faBoxOpen } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: 1,
        heading: 'Custom Sauce Development',
        content: 'We offer tailored sauce development services to create unique flavors that meet your specific needs, especially for the Kenyan market.',
        contents: [
            {
                heading: 'Personalized Recipes',
                icon: <FontAwesomeIcon icon={faPepperHot} />,
                content: 'Collaborate with our chefs to design sauces that fit your taste preferences, with a focus on local flavors and ingredients.'
            },
            {
                heading: 'Quality Ingredients',
                icon: <FontAwesomeIcon icon={faClipboardList} />,
                content: 'We use only the finest ingredients to ensure your custom sauce is both delicious and high-quality, reflecting Kenyan culinary traditions.'
            },
        ]
    },
    {
        id: 2,
        heading: 'Subscription Services',
        content: 'Join our subscription service for regular deliveries of your favorite Kenyan sauces right to your doorstep, including our creamy mayonnaise.',
        contents: [
            {
                heading: 'Convenient and Flexible',
                icon: <FontAwesomeIcon icon={faTruck} />,
                content: 'Choose from various subscription plans that suit your lifestyle and enjoy hassle-free sauce deliveries, ensuring you never run out of your favorite flavors.'
            },
            {
                heading: 'Exclusive Offers',
                icon: <FontAwesomeIcon icon={faUsers} />,
                content: 'Subscribers receive special discounts and early access to new products and flavors, including limited-edition Kenyan sauces.'
            },
        ]
    },
    {
        id: 3,
        heading: 'Corporate and Bulk Orders',
        content: 'We cater to businesses and organizations looking for bulk sauce orders for events, restaurants, or retail, with special emphasis on our mayonnaise.',
        contents: [
            {
                heading: 'Tailored Solutions',
                icon: <FontAwesomeIcon icon={faClipboardList} />,
                content: 'Work with our team to find the best sauce solutions for your corporate events or food service needs, ensuring every dish is a hit.'
            },
            {
                heading: 'Competitive Pricing',
                icon: <FontAwesomeIcon icon={faBoxOpen} />,
                content: 'Enjoy competitive pricing and reliable delivery for all your bulk sauce orders, helping you save while providing quality products.'
            },
        ]
    },
    {
        id: 4,
        heading: 'Sauce Testing and Workshops',
        content: 'Join our interactive sauce testing and workshop sessions to explore flavors and improve your culinary skills with a focus on Kenyan sauces.',
        contents: [
            {
                heading: 'Hands-On Experience',
                icon: <FontAwesomeIcon icon={faPepperHot} />,
                content: 'Participate in hands-on workshops where you can taste and learn about various sauces, including our signature mayonnaise.'
            },
            {
                heading: 'Expert Guidance',
                icon: <FontAwesomeIcon icon={faUsers} />,
                content: 'Our experienced chefs provide guidance to help you create your own signature sauces, inspired by Kenyan cuisine.'
            },
        ]
    },
    {
        id: 5,
        heading: 'Wholesale Distributions',
        content: 'We offer wholesale distribution services for retailers looking to stock our range of delicious Kenyan sauces, including mayonnaise.',
        contents: [
            {
                heading: 'Reliable Supply',
                icon: <FontAwesomeIcon icon={faTruck} />,
                content: 'Ensure a steady supply of sauces for your store with our efficient wholesale distribution network, catering to local tastes.'
            },
            {
                heading: 'Diverse Product Range',
                icon: <FontAwesomeIcon icon={faBoxOpen} />,
                content: 'Choose from a diverse range of sauces to appeal to different customer tastes and preferences, ensuring variety for your customers.'
            },
        ]
    }
];

export default data;
