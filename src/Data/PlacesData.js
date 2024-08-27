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
        description: 'Colombo is the largest city and commercial capital of Sri Lanka. It is a vibrant, bustling metropolis that blends modern urban life with rich colonial heritage. The city is known for its diverse culture, historic landmarks, bustling markets, and scenic waterfronts, including the famous Galle Face Green. Colombo serves as the economic and political hub of the country, with a mix of modern skyscrapers, colonial-era buildings, and a dynamic port..',
         img: c1,// Replace with actual image URL
        longitude: 79.9585,
        latitude: 6.9271
    },
    {
        id: 'Anuradhapura',
        title: 'Anuradhapura Heritage Tour',
        description: 'Anuradhapura is an ancient city in Sri Lanka, renowned for its well-preserved ruins of an ancient Sinhala civilization. It was the first capital of Sri Lanka and a major center of Theravada Buddhism for centuries. The city is famous for its historical monuments, including stupas like Ruwanwelisaya and Jethawanaramaya, as well as the sacred Bodhi Tree, which is believed to be a sapling from the original Bodhi tree under which the Buddha attained enlightenment. Today, Anuradhapura is a UNESCO World Heritage site and a popular destination for pilgrims and tourists alike..',
        img: anuradapuraHeritage, // Replace with actual image URL
        longitude: 80.4042,
        latitude: 8.3114
    },
    {
        id: 'Polonnaruwa',
        title: 'Polonnaruwa Historical Site',
        description: 'Polonnaruwa is an ancient city in Sri Lanka, known for being the second capital of the country after the fall of Anuradhapura. It flourished during the 11th to 13th centuries and is famous for its well-preserved ruins, including palaces, temples, and statues. The city is home to the Gal Vihara, a set of impressive rock-cut Buddha statues, and other significant structures like the Parakrama Samudra, a large man-made reservoir. Polonnaruwa is a UNESCO World Heritage site and a key attraction for those interested in Sri Lankan history and archaeology.',
        img:p1, // Replace with actual image URL
        longitude: 80.6354,
        latitude: 7.9365
    },
    {
        id: 'Sigiriya',
        title: 'Sigiriya Rock Fortress',
        description: 'Sigiriya, often referred to as the "Lion Rock," is an ancient rock fortress in Sri Lanka. Rising nearly 200 meters above the surrounding landscape, it was built by King Kashyapa in the 5th century as a royal palace and later became a Buddhist monastery. Sigiriya is famous for its remarkable frescoes, the Mirror Wall, and the remains of an extensive garden complex that is considered one of the oldest landscaped gardens in the world. The site is a UNESCO World Heritage site and is considered one of the most significant cultural landmarks in Sri Lanka..',
        img: s1, // Replace with actual image URL
        longitude: 80.7654,
        latitude: 7.9504
    },
    {
        id: 'Kandy',
        title: 'Kandy City Tour',
        description: 'Kandy is a major city in central Sri Lanka, known for its cultural and historical significance. It was the last capital of the ancient kings of Sri Lanka and is home to the Temple of the Tooth Relic (Sri Dalada Maligawa), one of the most sacred sites in Buddhism. Surrounded by lush hills, Kandy is also famous for its scenic beauty, the annual Esala Perahera festival, and its role as a center of traditional arts, crafts, and culture. The city is a UNESCO World Heritage site and a popular destination for both pilgrims and tourists..',
        img:k1, // Replace with actual image URL
        longitude: 80.6337,
        latitude: 7.2906
    },
    {
        id: 'Nuwara',
        title: 'Nuwara Eliya',
        description: 'Nuwara Eliya, often called "Little England," is a picturesque town in Sri Lanka\'s central highlands. Known for its cool climate and scenic landscapes, it is a major center for tea production, with sprawling tea plantations and lush greenery. Nuwara Eliya features colonial-era architecture, a charming town center, and popular attractions like Gregory Lake and Horton Plains National Park. Its unique blend of natural beauty and British colonial charm makes it a popular destination for both locals and tourists..',
        img: n1, // Replace with actual image URL
        longitude: 80.7747,
        latitude: 6.9703
    },
    {
        id: 'Ella',
        title: 'Ella Hill Country',
        description: 'Ella is a small town in the central highlands of Sri Lanka, renowned for its breathtaking views and laid-back atmosphere. Surrounded by lush hills and tea plantations, Ella is a popular destination for hiking, with notable trails leading to Little Adam\'s Peak and Ella Rock. The town is also known for the iconic Nine Arch Bridge and the nearby Ravana Falls. Ella\'s cool climate, stunning scenery, and relaxed vibe make it a favorite spot for travelers seeking both adventure and tranquility..',
        img: e1, // Replace with actual image URL
        longitude: 81.0550,
        latitude: 6.8212
    },
    {
        id: 'Negombo',
        title: 'Negombo Beach',
        description: 'Negombo is a coastal city in Sri Lanka, located just north of Colombo. Known for its sandy beaches and vibrant fishing industry, Negombo is a popular destination for both locals and tourists. The city has a rich history influenced by Portuguese, Dutch, and British colonial rule, reflected in its architecture and landmarks like the Old Dutch Fort and St. Mary\'s Church. Negombo is also famous for its lagoon, bustling fish market, and proximity to Bandaranaike International Airport, making it a convenient stop for travelers..',
        img: ne1, // Replace with actual image URL
        longitude: 79.9640,
        latitude: 7.2090
    },
    {
        id: 'Kalpitiya',
        title: 'Kalpitiya Lagoon',
        description: 'Kalpitiya is a coastal town in northwestern Sri Lanka, known for its pristine beaches and rich marine biodiversity. The area is famous for its vibrant coral reefs, making it a popular spot for snorkeling, diving, and dolphin watching. Kalpitiya is also one of the best locations for kitesurfing in Sri Lanka, thanks to its strong winds and calm waters. The town is part of the Kalpitiya Peninsula, which separates the Puttalam Lagoon from the Indian Ocean, offering stunning natural scenery and a tranquil atmosphere..',
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
        description: 'Mirissa is a charming coastal town in southern Sri Lanka, renowned for its beautiful crescent-shaped beach and vibrant nightlife. It is one of the best places in the country for whale watching, particularly for spotting blue whales and dolphins. Mirissa also offers excellent opportunities for surfing, snorkeling, and enjoying fresh seafood at beachside restaurants. The town\'s laid-back atmosphere, clear waters, and stunning sunsets make it a popular destination for both relaxation and adventure..',
        img: m1, // Replace with actual image URL
        longitude: 80.4745,
        latitude: 5.9553
    },
    {
        id: 'Tangalle',
        title: 'Tangalle Beach',
        description: 'Tangalle is a coastal town in southern Sri Lanka, known for its serene and unspoiled beaches. It features beautiful sandy stretches, clear waters, and a relaxed atmosphere, making it a great destination for swimming, sunbathing, and leisurely walks. Tangalle is also home to a number of small fishing villages, and its nearby attractions include the Rekawa Turtle Sanctuary, where visitors can observe nesting turtles. The town offers a peaceful retreat with a blend of natural beauty and local charm..',
        img: t1, // Replace with actual image URL
        longitude: 80.7965,
        latitude: 6.0074
    },
    {
        id: 'Trincomalee',
        title: 'Trincomalee Beaches',
        description: 'Trincomalee is a port city on the northeastern coast of Sri Lanka, known for its stunning natural harbor and beautiful beaches. The city features historical and cultural sites, such as the Koneswaram Temple and the Fort Frederick, as well as the scenic Nilaveli and Uppuveli beaches. Trincomalee is also a popular destination for snorkeling and diving, with its clear waters and vibrant marine life. Its rich history and coastal attractions make it a notable spot for both sightseeing and relaxation..',
        img: tr1, // Replace with actual image URL
        longitude: 81.2056,
        latitude: 8.5714
    },
    {
        id: 'Arugam',
        title: 'Arugam Bay',
        description: 'Arugam Bay is a popular surf town on Sri Lanka\'s southeastern coast, renowned for its excellent waves and vibrant surf culture. The bay features a relaxed atmosphere, beautiful sandy beaches, and a range of surf breaks suitable for various skill levels. It\'s also known for its scenic beauty and opportunities for wildlife spotting in nearby areas like Kumana National Park. Arugam Bay attracts surfers, backpackers, and travelers looking for a laid-back coastal experience..',
        img: ar1, // Replace with actual image URL
        longitude: 81.8030,
        latitude: 6.8156
    },
    {
        id: 'Pasikudah',
        title: 'Pasikudah Beach',
        description: 'Pasikudah is a coastal town on Sri Lanka\'s eastern coast, known for its long, shallow beach and calm, turquoise waters. The beach is famous for its clear, warm waters and low tides, making it ideal for swimming and water sports. Pasikudah offers a tranquil atmosphere and beautiful scenery, making it a popular destination for relaxation and enjoying the sun. The area is also developing as a tourist spot with luxury resorts and beachfront accommodations..',
        img: pas1, // Replace with actual image URL
        longitude: 81.6974,
        latitude: 7.8593
    },

];

export default placesData;
