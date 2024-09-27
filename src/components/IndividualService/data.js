import { faUtensils, faBoxOpen, faShoppingCart, faUsers, faTools } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: 1,
        heading: 'Custom Sauce Development',
        content: 'We offer tailored sauce development services to create unique flavors that meet your specific needs, especially for the Kenyan market.',
        icon: faUtensils, // Font Awesome icon for Custom Sauce Development
        contents: [
            {
                heading: 'Personalized Recipes',
                img: seo1,
                content: 'Collaborate with our chefs to design sauces that fit your taste preferences, with a focus on local flavors and ingredients.'
            },
            {
                heading: 'Quality Ingredients',
                img: seo2,
                content: 'We use only the finest ingredients to ensure your custom sauce is both delicious and high-quality, reflecting Kenyan culinary traditions.'
            },
        ]
    },
    {
        id: 2,
        heading: 'Subscription Services',
        content: 'Join our subscription service for regular deliveries of your favorite Kenyan sauces right to your doorstep, including our creamy mayonnaise.',
        icon: faShoppingCart, // Font Awesome icon for Subscription Services
        contents: [
            {
                heading: 'Convenient and Flexible',
                img: seo1,
                content: 'Choose from various subscription plans that suit your lifestyle and enjoy hassle-free sauce deliveries, ensuring you never run out of your favorite flavors.'
            },
            {
                heading: 'Exclusive Offers',
                img: seo2,
                content: 'Subscribers receive special discounts and early access to new products and flavors, including limited-edition Kenyan sauces.'
            },
        ]
    },
    {
        id: 3,
        heading: 'Corporate and Bulk Orders',
        content: 'We cater to businesses and organizations looking for bulk sauce orders for events, restaurants, or retail, with special emphasis on our mayonnaise.',
        icon: faBoxOpen, // Font Awesome icon for Corporate and Bulk Orders
        contents: [
            {
                heading: 'Tailored Solutions',
                img: seo1,
                content: 'Work with our team to find the best sauce solutions for your corporate events or food service needs, ensuring every dish is a hit.'
            },
            {
                heading: 'Competitive Pricing',
                img: seo2,
                content: 'Enjoy competitive pricing and reliable delivery for all your bulk sauce orders, helping you save while providing quality products.'
            },
        ]
    },
    {
        id: 4,
        heading: 'Sauce Testing and Workshops',
        content: 'Join our interactive sauce testing and workshop sessions to explore flavors and improve your culinary skills with a focus on Kenyan sauces.',
        icon: faTools, // Font Awesome icon for Sauce Testing and Workshops
        contents: [
            {
                heading: 'Hands-On Experience',
                img: seo1,
                content: 'Participate in hands-on workshops where you can taste and learn about various sauces, including our signature mayonnaise.'
            },
            {
                heading: 'Expert Guidance',
                img: seo2,
                content: 'Our experienced chefs provide guidance to help you create your own signature sauces, inspired by Kenyan cuisine.'
            },
        ]
    },
    {
        id: 5,
        heading: 'Wholesale Distributions',
        content: 'We offer wholesale distribution services for retailers looking to stock our range of delicious Kenyan sauces, including mayonnaise.',
        icon: faUsers, // Font Awesome icon for Wholesale Distributions
        contents: [
            {
                heading: 'Reliable Supply',
                img: seo1,
                content: 'Ensure a steady supply of sauces for your store with our efficient wholesale distribution network, catering to local tastes.'
            },
            {
                heading: 'Diverse Product Range',
                img: seo2,
                content: 'Choose from a diverse range of sauces to appeal to different customer tastes and preferences, ensuring variety for your customers.'
            },
        ]
    }
];

export default data;
