import { FaPhone, FaHeadphones } from 'react-icons/fa';
import {GiBananaBunch} from 'react-icons/gi';
import { IoIosPhonePortrait, IoMdPhonePortrait, IoIosPhoneLandscape, IoMdCard, } from "react-icons/io";

const TabInfo =[
    {
        name: 'Mac',
        subcats: [
            {name: 'MacBook', icon: FaPhone, image: 'https://picsum.photos/201'},
            {name: 'MacBook Air', icon: FaPhone, image: 'https://picsum.photos/202'},
            {name: 'MacBook Pro', icon: FaPhone, image: 'https://picsum.photos/203'},
            {name: 'iMac', icon: FaPhone, image: 'https://picsum.photos/205'},
            {name: 'iMac Pro', icon: FaPhone, image: 'https://picsum.photos/204'},
            {name: 'Mac Pro', icon: FaPhone, image: 'https://picsum.photos/206'},
            {name: 'Mac mini', icon: FaPhone, image: 'https://picsum.photos/207'},
            {name: 'Compare Mac models', icon: FaPhone, image: 'https://picsum.photos/208'},
            {name: 'Pro Display XDR', icon: FaPhone, image: 'https://picsum.photos/209'},
            {name: 'Accessories for Mac', icon: FaPhone, image: 'https://picsum.photos/210'},
            {name: 'Mojave', icon: FaPhone, image: 'https://picsum.photos/211'}
        ]
    },
    {
        name: 'iPad',
        subcats: [
            {name: 'iPad Pro', icon: FaPhone, image: 'https://picsum.photos/212'},
            {name: 'iPad Air', icon: FaPhone, image: 'https://picsum.photos/213'},
            {name: 'iPad', icon: FaPhone, image: 'https://picsum.photos/214'},
            {name: 'iPad mini', icon: FaPhone, image: 'https://picsum.photos/215'},
            {name: 'Compare', icon: FaPhone, image: 'https://picsum.photos/216'},
            {name: 'Apple Pencil', icon: FaPhone, image: 'https://picsum.photos/217'},
            {name: 'Smart Keyboard', icon: FaPhone, image: 'https://picsum.photos/218'},
            {name: 'Accessories', icon: FaPhone, image: 'https://picsum.photos/219'},
            {name: 'iOS 12', icon: FaPhone, image: 'https://picsum.photos/220'}
        ]
    },
    {
        name: 'iPhone',
        subcats: [
            {name: 'iPhone Xs', icon: FaPhone, image: 'https://picsum.photos/221'},
            {name: 'iPhone Xr', icon: IoIosPhoneLandscape, image: 'https://picsum.photos/222'},
            {name: 'iPhone 8', icon: IoIosPhonePortrait, image: 'https://picsum.photos/223'},
            {name: 'iPhone 7', icon: IoMdPhonePortrait, image: 'https://picsum.photos/224'},
            {name: 'Apple Card', icon: IoMdCard, image: 'https://picsum.photos/225'},
            {name: 'AirPods', icon: FaHeadphones, image: 'https://picsum.photos/226'},
            {name: 'iOS 12', icon: GiBananaBunch, image: 'https://picsum.photos/227'}
        ]
    },
    {
        name: 'Watch',
        subcats: [
            {name: 'Apple Watch Series 4', icon: FaPhone, image: 'https://picsum.photos/228'},
            {name: 'Apple Watch Nike +', icon: FaPhone, image: 'https://picsum.photos/229'},
            {name: 'Apple Watch Hermes', icon: FaPhone, image: 'https://picsum.photos/230'},
            {name: 'Apple Watch Series 3', icon: FaPhone, image: 'https://picsum.photos/231'},
            {name: 'watchOS', icon: FaPhone, image: 'https://picsum.photos/232'},
            {name: 'Bands', icon: FaPhone, image: 'https://picsum.photos/233'},
            {name: 'Accessories', icon: FaPhone, image: 'https://picsum.photos/234'},
            {name: 'Compare', icon: FaPhone, image: 'https://picsum.photos/235'}
        ]
    },
    {
        name: 'TV',
        subcats: [
            {name: 'Apple TV app', icon: FaPhone, image: 'https://picsum.photos/236'},
            {name: 'Apple TV +', icon: FaPhone, image: 'https://picsum.photos/237'},
            {name: 'Apple TV 4K', icon: FaPhone, image: 'https://picsum.photos/238'},
            {name: 'Apple TV HD', icon: FaPhone, image: 'https://picsum.photos/239'},
            {name: 'AirPlay', icon: FaPhone, image: 'https://picsum.photos/240'},
            {name: 'Accessories', icon: FaPhone, image: 'https://picsum.photos/241'}
        ]
    },
    {
        name: 'Music',
        subcats: [
            {name: 'Apple Music', icon: FaPhone, image: 'https://picsum.photos/242'},
            {name: 'iTunes', icon: FaPhone, image: 'https://picsum.photos/243'},
            {name: 'HomePod', icon: FaPhone, image: 'https://picsum.photos/244'},
            {name: 'AirPods', icon: FaPhone, image: 'https://picsum.photos/245'},
            {name: 'iPod Touch', icon: FaPhone, image: 'https://picsum.photos/246'},
            {name: 'Music Accessories', icon: FaPhone, image: 'https://picsum.photos/247'},
            {name: 'Gift Cards', icon: FaPhone, image: 'https://picsum.photos/248'}
        ]
    },
]

export default TabInfo;