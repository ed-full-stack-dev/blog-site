import Img1 from './images/coding.jpg';
import Img2 from './images/traveling.jpg';
import Img3 from './images/domore.jpg';
import Img4 from './images/music.jpg';
import Img5 from './images/discovery.jpg';
import upsCapital from './icons/ups-capital.svg';
import blankSpace from './icons/blank-space.svg';
import dugo from './icons/dugo.svg';
import cboed from './icons/cbed.svg';
export const imageGallery = [
    { src: Img1, alt: 'Coding' },
    { src: Img2, alt: 'Traveling' },
    { src: Img3, alt: 'Working' },
    { src: Img4, alt: 'Music' },
    { src: Img5, alt: 'Discovery' },
];


export const workIcons = [
    { src: dugo, alt: 'Dugo', startDate: '2019', endDate: String(new Date().getFullYear()), position: 'Full Stack Developer' },
    { src: upsCapital, alt: 'UPS Capital', startDate: '2014', endDate: '2019', position: 'Front End Developer' },
    { src: blankSpace, alt: 'Blank Space', startDate: '2011', endDate: '2014', position: 'Junior Front End Developer' },
    { src: cboed, alt: 'Calgary Board of Education', startDate: '2008', endDate: '2011', position: 'TA' }
];