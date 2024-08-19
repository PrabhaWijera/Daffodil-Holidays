// PlacesData.js
import p1 from "../assets/places/polonnaruwa1.jpg"
import c1 from "../assets/places/indepenceOfColombo.jpg"
import anuradapuraHeritage from "../assets/places/anuradapuraHeritage.jpg"
import s1 from"../assets/places/seegiriyareedmore.jpg"
import k1 from "../assets/places/kandyHeritage.jpg"
import n1 from "../assets/places/nuwaraeliyaHeritage.jpg"
import e1 from "../assets/places/ellaHeri.jpg"
import ne1 from "../assets/places/negamboHeritage.jpg"
import ka1 from "../assets/places/kalpitiyaHeri.jpg"
import m1 from "../assets/places/mirissaHeri.jpg"
import t1 from "../assets/places/tangalleheri.jpg"
import g1 from "../assets/places/galleHeri.jpeg"
import tr1 from "../assets/places/trinkoHeri.jpg"
import ar1 from "../assets/places/arugambayHeri.webp"
import  pas1 from "../assets/places/pasikudaHeri.jpeg"

const placesData = [
    {
        id: 'Colombo',
        title: 'Colombo City Tour',
        description: 'Explore the vibrant city of Colombo, known for its beautiful beaches and historical landmarks.',
         img: c1,// Replace with actual image URL
        longitude: 79.9585,
        latitude: 6.9271
    },
    {
        id: 'Anuradhapura',
        title: 'Anuradhapura Heritage Tour',
        description: 'Discover the ancient city of Anuradhapura, famous for its well-preserved ruins and historical significance.',
        img: anuradapuraHeritage, // Replace with actual image URL
        longitude: 80.4042,
        latitude: 8.3114
    },
    {
        id: 'Polonnaruwa',
        title: 'Polonnaruwa Historical Site',
        description: 'Visit the ancient city of Polonnaruwa, a UNESCO World Heritage Site with stunning archaeological sites.',
        img:p1, // Replace with actual image URL
        longitude: 80.6354,
        latitude: 7.9365
    },
    {
        id: 'Sigiriya',
        title: 'Sigiriya Rock Fortress',
        description: 'Explore Sigiriya, an ancient rock fortress with stunning frescoes and a beautiful garden.',
        img: s1, // Replace with actual image URL
        longitude: 80.7654,
        latitude: 7.9504
    },
    {
        id: 'Kandy',
        title: 'Kandy City Tour',
        description: 'Visit Kandy, known for its beautiful lake, historical temples, and cultural heritage.',
        img:k1, // Replace with actual image URL
        longitude: 80.6337,
        latitude: 7.2906
    },
    {
        id: 'Nuwara',
        title: 'Nuwara Eliya',
        description: 'Experience the picturesque town of Nuwara Eliya, famous for its tea plantations and cool climate.',
        img: n1, // Replace with actual image URL
        longitude: 80.7747,
        latitude: 6.9703
    },
    {
        id: 'Ella',
        title: 'Ella Hill Country',
        description: 'Discover Ella, a scenic town in the hill country known for its waterfalls and hiking trails.',
        img: e1, // Replace with actual image URL
        longitude: 81.0550,
        latitude: 6.8212
    },
    {
        id: 'Negombo',
        title: 'Negombo Beach',
        description: 'Relax at Negombo Beach, known for its golden sands and vibrant fishing community.',
        img: ne1, // Replace with actual image URL
        longitude: 79.9640,
        latitude: 7.2090
    },
    {
        id: 'Kalpitiya',
        title: 'Kalpitiya Lagoon',
        description: 'Enjoy the pristine beaches and lagoon activities in Kalpitiya, a hidden gem on the west coast.',
        img: ka1, // Replace with actual image URL
        longitude: 79.9745,
        latitude: 8.3316
    },
    {
        id: 'Galle',
        title: 'Galle Fort',
        description: 'Explore Galle Fort, a UNESCO World Heritage Site with well-preserved colonial architecture and stunning ocean views.',
        img: g1, // Replace with actual image URL
        longitude: 80.2168,
        latitude: 6.0328
    },
    {
        id: 'Mirissa',
        title: 'Mirissa Beach',
        description: 'Relax at Mirissa Beach, a popular spot for whale watching and beautiful sunsets.',
        img: m1, // Replace with actual image URL
        longitude: 80.4745,
        latitude: 5.9553
    },
    {
        id: 'Tangalle',
        title: 'Tangalle Beach',
        description: 'Enjoy the serene beaches of Tangalle, known for its calm waters and tranquil environment.',
        img: t1, // Replace with actual image URL
        longitude: 80.7965,
        latitude: 6.0074
    },
    {
        id: 'Trincomalee',
        title: 'Trincomalee Beaches',
        description: 'Explore the stunning beaches of Trincomalee, famous for its clear waters and historical sites.',
        img: tr1, // Replace with actual image URL
        longitude: 81.2056,
        latitude: 8.5714
    },
    {
        id: 'Arugam',
        title: 'Arugam Bay',
        description: 'Visit Arugam Bay, a renowned surfing destination with a laid-back atmosphere.',
        img: ar1, // Replace with actual image URL
        longitude: 81.8030,
        latitude: 6.8156
    },
    {
        id: 'Pasikudah',
        title: 'Pasikudah Beach',
        description: 'Enjoy the pristine beaches of Pasikudah, known for its shallow waters and coral reefs.',
        img: pas1, // Replace with actual image URL
        longitude: 81.6974,
        latitude: 7.8593
    }
];

export default placesData;
