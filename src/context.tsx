import { createContext } from 'react';
import React from "react";
import { FiCode, FiStar } from "react-icons/fi";

const AppContext = createContext({
    name: 'Francis Jude',
    dob: '6/17/1996',
    address: {
        town: 'Satellite Town',
        state: 'Lagos',
        country: 'Nigeria',
    },
    phone: '+2347066198768',
    email: 'judecodes@yahoo.com',
    social: {
        facebook: 'https://www.facebook.com/judecodes',
        twitter: 'https://www.twitter.com/judecodes',
        behance: 'https://behance.net/judecodes',
        instagram: 'https://www.instagram.com/judecodes',
        github: 'https://www.github.com/jsbuddy',
        linkedIn: 'https://www.linkedin.com/in/jude-francis-333182109'
    },
    avatar: './assets/images/avatar.jpg',
    cover: './assets/images/profile-bg.jpeg',
    cv: './assets/documents/resume.docx',
    resume: {
        experience: [
            {
                present: false,
                date: '2018 - 2019',
                title: 'Software Developer',
                subtitle: 'Creditclan Tech Limited',
                details: 'Develop and implement new software programs, Maintain and improve the performance of existing software, Recommend improvements to existing software programs as necessary'
            },
            {
                present: false,
                date: '2016 - 2018',
                title: 'Junior Web Designer',
                subtitle: 'Le Citoyen University',
                details: 'Design, build, and maintain web sites using authoring or scripting languages, content creation tools, management tools, and digital media'
            },
            {
                present: false,
                date: '06.2017 - 10.2017',
                title: 'Web Designer Intern',
                subtitle: 'Trussnet Limited',
                details: 'Perform or direct web site updates, Back up files from web sites to local directories for instant recovery in case of problems.'
            },
        ],
        education: [
            {
                present: false,
                date: '2015 - 2018',
                title: 'Le Citoyen University',
                subtitle: 'Cotonou, Benin Republic',
                details: 'Bachelor of Science (Computer Science)'
            },
            {
                present: false,
                date: '2011 - 2012',
                title: 'Trinity Computer School',
                subtitle: 'Lagos, Nigeria',
                details: 'Diploma in Desktop Publishing'
            },
        ]
    },
    skills: {
        code: [
            { title: 'HTML5 / CSS3', rate: 90 },
            { title: 'Javascript', rate: 85 },
            { title: 'PHP / MySQL', rate: 30 },
            { title: 'NodeJS / Express', rate: 80 },
            { title: 'GraphQL', rate: 40 },
            { title: 'MongoDB', rate: 80 },
            { title: 'React', rate: 80 },
            { title: 'Angular', rate: 70 },
            { title: 'Vue', rate: 60 },
            { title: 'React Native', rate: 40 },
            { title: 'Flutter', rate: 70 },
            { title: 'Git', rate: 80 }
        ],
        design: [
            { title: 'CorelDraw', rate: 90 },
            { title: 'Adobe Illustrator', rate: 50 },
            { title: 'Adobe Photoshop', rate: 40 },
            { title: 'Adobe XD', rate: 80 },
        ]
    },
    tags: [
        'Full-Stack Developer',
        'UI / UX Designer',
        'Graphic Designer',
        'Cross-Platform Developer',
    ],
    about: `A full-stack developer and graphic designer from Lagos, Nigeria. I enjoy building everything from small sites to rich interactive cross platform mobile/web apps. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me.`,
    services: [
        {
            title: 'Web Development',
            description: `Modern and mobile-ready website that will help you reach all of your marketing.`,
            icon: <FiCode />,
        },
        {
            title: 'Graphic Design',
            description: `From simple flyers, banners to complicated Illustrations for your projects`,
            icon: <FiStar />,
        }
    ],
    portfolio: {
        loaded: false,
        external: [],
        local: [
            {
                category: 'web',
                title: 'Taximoni',
                image: './assets/images/portfolio/web/taximoni.jpg',
                link: 'https://taximoni.com'
            },
            {
                category: 'web',
                title: 'Votes Hub',
                image: './assets/images/portfolio/web/voteshub.jpg',
                link: 'https://voteshub.herokuapp.com'
            },
            {
                category: 'web',
                title: 'Estam University',
                image: './assets/images/portfolio/web/estam.jpg',
                link: 'https://estamuni.net'
            },
            {
                category: 'web',
                title: 'Pricebuddy',
                image: './assets/images/portfolio/web/pricebuddy.jpg',
                link: 'https://pricebuddie.herokuapp.com'
            },
            {
                category: 'web',
                title: 'Achiv',
                image: './assets/images/portfolio/web/achiv.jpg',
                link: 'https://achiv.netlify.com'
            },
            {
                category: 'web',
                title: 'Le Citoyen University',
                image: './assets/images/portfolio/web/lcu.jpg',
                link: 'http://lecitoyenuniversity.com'
            },
        ]
    }
});

export default AppContext;
