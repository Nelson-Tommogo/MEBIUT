import image1 from '../../assets/home/r1.jpeg';
import image2 from '../../assets/home/r2.jpeg';
import image3 from '../../assets/home/r3.jpeg';
import image4 from '../../assets/home/r4.jpeg';
import image5 from '../../assets/home/r5.jpeg';
import image6 from '../../assets/home/r6.jpeg';

const data = [
    {
        id: 1,
        heading: 'Custom Sauce Development',
        content: 'We offer tailored sauce development services to create unique flavors that meet your specific needs, especially for the Kenyan market.',
        contents: [
            {
                heading: 'Personalized Recipes',
                icon: image1, 
                content: 'Collaborate with our chefs to design sauces that fit your taste preferences, with a focus on local flavors and ingredients.'
            },
            {
                heading: 'Quality Ingredients',
                icon: image2, 
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
                icon: image3, 
                content: 'Choose from various subscription plans that suit your lifestyle and enjoy hassle-free sauce deliveries, ensuring you never run out of your favorite flavors.'
            },
            {
                heading: 'Exclusive Offers',
                icon: image4, 
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
                icon: image5, 
                content: 'Work with our team to find the best sauce solutions for your corporate events or food service needs, ensuring every dish is a hit.'
            },
            {
                heading: 'Competitive Pricing',
                icon: image6, 
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
                icon: image1,
                content: 'Participate in hands-on workshops where you can taste and learn about various sauces, including our signature mayonnaise.'
            },
            {
                heading: 'Expert Guidance',
                icon: image2,
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
                icon: image3, 
                content: 'Ensure a steady supply of sauces for your store with our efficient wholesale distribution network, catering to local tastes.'
            },
            {
                heading: 'Diverse Product Range',
                icon: image4, 
                content: 'Choose from a diverse range of sauces to appeal to different customer tastes and preferences, ensuring variety for your customers.'
            },
        ]
    }
];

export default data;
