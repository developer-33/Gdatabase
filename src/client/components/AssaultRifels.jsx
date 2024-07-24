import React from 'react';
import Card1 from './card'; // Adjust the import path as necessary



const AssaultGuns = () => {





const CardData = [
    {
        imageSrc:"/src/client/assets/guns/117.png",
        title: 'AK-117',
        description:"'The AK-47 stands for automatic Kalashnikov after its inventor, Mikhail Kalashnikov, and the year it was invented, 1947.Design.The AK-47 was designed to be a simple, reliable, and inexpensive fully automatic rifle that could be mass produced quickly. It's made of wood and metal, and is 10.5 in x 34.25 in x 3 in. The AK-47 uses a 7.62x39mm cartridge with a muzzle velocity of 2,350 ft/s. The cartridge weighs 0.6 oz, and the projectile weighs 122 gr. The high-velocity round can shatter bones, tear through organs, and liquefy other materials.The AK-47 has a cyclic firing rate of 600 rounds per minute and can fire in both semiautomatic and automatic modes.The AK-47 has a distinctive muzzle brake that uses exhaust gases to pull the gun forward against recoil. Its also easy to clean, disassemble, and use, requiring no military expertise.",
        link: '/src/client/assets/guns/117.png',
        type: 'Type: Assault Rifle',
        
    },
    {
        imageSrc: '/src/client/assets/guns/ak-47.png',
        title: 'Ak-47',
        description: 'Assult Rifle.',
        link: '/src/client/assets/guns/ak-47.png',
        type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: '/src/client/assets/guns/BK57.PNG',
        title: 'Final tech acquisition',
        description: 'Assult Rifle.',
        link: '/src/client/assets/guns/BK57.PNG',
        type: 'Type: Assault Rifle',
  
    },
  
    {
        imageSrc: '/src/client/assets/guns/dr-h.png',
        title: 'DR-H',
        description: 'Assault Rifle',
        link: '/src/client/assets/guns/dr-h.png',
        type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: '/src/client/assets/guns/fr.556.png',
        title: 'Final tech acquisition',
        description: 'Assult Rifle.',
        link: '/src/client/assets/guns/fr.556.png',
        type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: '/src/client/assets/guns/hbra3.png',
        title: 'Final tech acquisition',
        description: 'Assult Rifle.',
        link: '/src/client/assets/guns/hbra3.png',
        type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: '/src/client/assets/guns/hvk-30.png',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/hvk-30.png',
        type: 'Type: Assault Rifle',
    },                      
  
    {
        imageSrc: '/src/client/assets/guns/ICR-1.PNG',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/ICR-1.PNG',  
        type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: '/src/client/assets/guns/kn44.png',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/kn44.png',
        type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: '/src/client/assets/guns/LK24.PNG',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/LK24.PNG',
        type: 'Type: Assault Rifle',
        
    },
  
    {
        imageSrc: '/src/client/assets/guns/M16.PNG',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/M16.PNG',
        type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: '/src/client/assets/guns/M4.PNG',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/M4.PNG',
         type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: '/src/client/assets/guns/man0war.png',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/man0war.png',
        type: 'Type: Assault Rifle',
    },
    {
        imageSrc: '/src/client/assets/guns/Type25.PNG',
        title: 'Final tech acquisition',
        description: 'Details about the final significant acquisition of 2021.',
        link: '/src/client/assets/guns/Type25.PNG',
        type: 'Type: Assault Rifle',
    },
  ];










    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {CardData.map((card, index) => (
                <Card1
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    description={card.description}
                    link={card.link}  
                    type={card.type}  // Add the necessary prop to display the gun type in the Card component.
                   
                />
            ))}
        </div>
    );
};

export default AssaultGuns;