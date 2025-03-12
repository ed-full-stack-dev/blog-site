import Img1 from './images/coding.jpg';
import Img2 from './images/traveling.jpg';
import Img3 from './images/domore.jpg';
import Img4 from './images/music.jpg';
import Img5 from './images/discovery.jpg';
import airbnb from './icons/airbnb.svg';
import facebook from './icons/facebook.svg';
import planetaria from './icons/planetaria.svg';
import starbucks from './icons/starbucks.svg';
export const imageGallery = [
    { src: Img1, alt: 'Coding' },
    { src: Img2, alt: 'Traveling' },
    { src: Img3, alt: 'Working' },
    { src: Img4, alt: 'Music' },
    { src: Img5, alt: 'Discovery' },
];


export const workIcons = [
    { src: planetaria, alt: 'Planetaria', startDate: '2019', endDate: String(new Date().getFullYear()), position: 'CEO' },
    { src: airbnb, alt: 'Airbnb', startDate: '2014', endDate: '2019', position: 'Product Designer' },
    { src: facebook, alt: 'Facebook', startDate: '2011', endDate: '2014', position: 'iOS Software Engineer' },
    { src: starbucks, alt: 'Starbucks', startDate: '2008', endDate: '2011', position: 'Shift Supervisor' }
];