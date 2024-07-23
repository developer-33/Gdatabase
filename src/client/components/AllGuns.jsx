import React from 'react';
import Card1 from './card'; // Adjust the import path as necessary





const cardData = [
    {
        imageSrc:"/src/client/assets/guns/117.png",
        title: 'AK-117',
        description: 'Assult Rifle.',
        link: '/src/client/assets/guns/117.png'
        
    },
    {
        imageSrc: '/src/client/assets/guns/ak-47.png',
        title: 'Ak-47',
        description: 'Assult Rifle.',
        link: '/src/client/assets/guns/ak-47.png'
    },

    {
        imageSrc: '/src/client/assets/guns/BK57.PNG',
        title: 'Final tech acquisition',
        description: 'Assult Rifle.',
        link: '/src/client/assets/guns/BK57.PNG'
    },

    {
        imageSrc: '/src/client/assets/guns/dr-h.png',
        title: 'DR-H',
        description: 'Assault Rifle',
        link: '/src/client/assets/guns/dr-h.png'
    },

    {
        imageSrc: '/src/client/assets/guns/fr.556.png',
        title: 'Final tech acquisition',
        description: 'Assult Rifle.',
        link: '/src/client/assets/guns/fr.556.png'
    },

    {
        imageSrc: '/src/client/assets/guns/hbra3.png',
        title: 'Final tech acquisition',
        description: 'Assult Rifle.',
        link: '/src/client/assets/guns/hbra3.png'
    },

    {
        imageSrc: '/src/client/assets/guns/hvk-30.png',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/hvk-30.png'
    },                      

    {
        imageSrc: '/src/client/assets/guns/ICR-1.PNG',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/ICR-1.PNG'   
    },

    {
        imageSrc: '/src/client/assets/guns/kn44.png',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/kn44.png'
    },

    {
        imageSrc: '/src/client/assets/guns/LK24.PNG',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/LK24.PNG'
        
    },

    {
        imageSrc: '/src/client/assets/guns/M16.PNG',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/M16.PNG'
    },

    {
        imageSrc: '/src/client/assets/guns/M4.PNG',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/M4.PNG'
    },

    {
        imageSrc: '/src/client/assets/guns/man0war.png',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/man0war.png'
    },
    {
        imageSrc: '/src/client/assets/guns/Type25.PNG',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/Type25.PNG'
    },
];

const Grid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {cardData.map((card, index) => (
                <Card1
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                    link={card.link}  
                   
                />
            ))}
        </div>
    );
};

export default Grid;