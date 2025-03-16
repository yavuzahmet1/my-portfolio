import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import rotate_animation from "./projects/animation.gif";
import cafe_harvey from "./projects/cafe-harvey.gif";
import cafe from "./projects/cafe.gif";
import furnished from "./projects/furnished.gif";
import login from "./projects/login.gif";
import portfolio from "./projects/portfolio.gif"
import shopping_cart from "./projects/shopping-cart.gif"
import dicee from "./projects/dicee.png"
import authum from "./projects/authum.gif"
import login_animation from "./projects/login.gif";
import currency_app from "./projects/currency_app.gif"
import nba_legends from "./projects/nba_legends.gif"
import stock from "./projects/stock.gif"


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    rotate_animation,
    cafe_harvey,
    cafe,
    furnished,
    login,
    portfolio,
    shopping_cart,
    dicee,
    authum,
    login_animation,
    currency_app,
    nba_legends,
    stock
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const projectsData = [
    { icon: assets.portfolio, title: "Portfolio Page", github: "https://github.com/yavuzahmet1/fullstack-learning-mod-1/blob/main/index.html", link: "https://yavuzahmet1.github.io/fullstack-learning-mod-1/" },
    { icon: assets.shopping_cart, title: "Shopping Cart", github: "https://github.com/yavuzahmet1/fullstack-learning-mod-1/tree/main/projects/shopping-cart", link: "https://yavuzahmet1.github.io/fullstack-learning-mod-1/projects/shopping-cart/" },
    { icon: assets.dicee, title: "Dicee Challenge", github: "https://github.com/yavuzahmet1/fullstack-learning-mod-1/tree/main/projects/dicee-challenge", link: "https://yavuzahmet1.github.io/fullstack-learning-mod-1/projects/dicee-challenge/" },
    { icon: assets.cafe_harvey, title: "Cafe Shop", github: "https://github.com/yavuzahmet1/fullstack-learning-mod-1/tree/main/projects/cup-time-coffee", link: "https://yavuzahmet1.github.io/fullstack-learning-mod-1/projects/cup-time-coffee/" },
    { icon: assets.authum, title: "User Page", github: "https://github.com/yavuzahmet1/fullstack-learning-mod-1/tree/main/projects/autum-user-login", link: "https://yavuzahmet1.github.io/fullstack-learning-mod-1/projects/autum-user-login/" },
    { icon: assets.login_animation, title: "User Login Page Animation", github: "https://github.com/yavuzahmet1/fullstack-learning-mod-1/tree/main/projects/animated-login-page", link: "https://yavuzahmet1.github.io/fullstack-learning-mod-1/projects/animated-login-page/" },
    { icon: assets.cafe, title: "Coffee Sales", github: "https://github.com/yavuzahmet1/fullstack-learning-mod-1/tree/main/projects/coffee-shop", link: "https://yavuzahmet1.github.io/fullstack-learning-mod-1/projects/coffee-shop/" },
    { icon: assets.currency_app, title: "Currency App", github: "https://github.com/yavuzahmet1/currency-app", link: "https://currency-app-git-main-1yavuzahmets-projects.vercel.app/" },
    { icon: assets.nba_legends, title: "NBA Legends", github: "https://github.com/yavuzahmet1/nba-legends", link: "https://yavuzahmet1.github.io/nba-legends/" },
    { icon: assets.stock, title: "Stock Sage Management", github: "https://github.com/yavuzahmet1/stock-sage-management", link: "https://stock-sage-management.vercel.app/" },

]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];