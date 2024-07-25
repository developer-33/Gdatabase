import React from 'react';
import Card1 from './card'; // Adjust the import path as necessary
import ak117image  from "../assets/117.png"
import gunak117image  from "../assets/117.png"
import ak47image  from "../assets/ak-47.png"
import gunak47image  from "../assets/ak-47.png"
import bk57image  from "../assets/Newbk57.png"
import gunbk57image  from "../assets/Newbk57.png"
import drhimage  from "../assets/dr-h.png"
import gundrhimage  from "../assets/dr-h.png"
import fr556image from "../assets/fr.556.png"
import gunfr556image from "../assets/fr.556.png"
import hbra3image from "../assets/hbra3.png"
import gunhbra3image from "../assets/hbra3.png"
import hvk30image  from "../assets/hvk-30.png"
import gunhvk30image  from "../assets/hvk-30.png"
import icrimage from "../assets/ICR-1.PNG"
import gunicrimage from "../assets/ICR-1.PNG"
import kn44image  from "../assets/kn44.png"
import gunkn44image  from "../assets/kn44.png"
import lk24image  from "../assets/LK24.PNG"
import gunlk24image  from "../assets/LK24.PNG"
import m16image  from "../assets/M16.PNG"
import gunm16image  from "../assets/M16.PNG"
import m4image from "../assets/M4.PNG"
import gunm4image from "../assets/M4.PNG"
import manowarimage  from "../assets/man0war.png"
import gunmanowarimage  from "../assets/man0war.png"
import type25image  from "../assets/Type25.PNG"
import guntype25image  from "../assets/Type25.PNG"



const AssaultGuns = () => {





const CardData = [
    {
        imageSrc: ak117image,
        title: 'AK-117',
        description:"'The AK-47 stands for automatic Kalashnikov after its inventor, Mikhail Kalashnikov, and the year it was invented, 1947.Design.The AK-47 was designed to be a simple, reliable, and inexpensive fully automatic rifle that could be mass produced quickly. It's made of wood and metal, and is 10.5 in x 34.25 in x 3 in. The AK-47 uses a 7.62x39mm cartridge with a muzzle velocity of 2,350 ft/s. The cartridge weighs 0.6 oz, and the projectile weighs 122 gr. The high-velocity round can shatter bones, tear through organs, and liquefy other materials.The AK-47 has a cyclic firing rate of 600 rounds per minute and can fire in both semiautomatic and automatic modes.The AK-47 has a distinctive muzzle brake that uses exhaust gases to pull the gun forward against recoil. Its also easy to clean, disassemble, and use, requiring no military expertise.",
        link: gunak117image,
        type: 'Type: Assault Rifle',
        
    },
    {
        imageSrc: ak47image,
        title: 'Ak-47',
        description: 'Assult Rifle.',
        link: gunak47image,
        type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: bk57image,
        title: 'BK57',
        description: 'Assult Rifle.',
        link: gunbk57image,
        type: 'Type: Assault Rifle',
  
    },
  
    {
        imageSrc: drhimage,
        title: 'DR-H',
        description: 'Assault Rifle',
        link: gundrhimage,
        type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: fr556image,
        title: 'FR.556',
        description: 'Assult Rifle.',
        link: gunfr556image,
        type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: hbra3image,
        title: 'HBRA3',
        description: 'Assult Rifle.',
        link: gunhbra3image,
        type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: hvk30image,
        title: 'HVK 30',
        description: 'Details about the final significant acquisition of 2021.',
        link: gunhvk30image,
        type: 'Type: Assault Rifle',
    },                      
  
    {
        imageSrc: icrimage,
        title: 'ICR-1',
        description: 'Details about the final significant acquisition of 2021.',
        link: gunicrimage,  
        type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: kn44image,
        title: 'KN44',
        description: 'Details about the final significant acquisition of 2021.',
        link: gunkn44image,
        type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: lk24image,
        title: 'LK24',
        description: 'Details about the final significant acquisition of 2021.',
        link: gunlk24image,
        type: 'Type: Assault Rifle',
        
    },
  
    {
        imageSrc: m16image,
        title: 'M16',
        description: 'Details about the final significant acquisition of 2021.',
        link: gunm16image,
        type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: m4image,
        title: 'M4',
        description: 'Details about the final significant acquisition of 2021.',
        link: gunm4image,
         type: 'Type: Assault Rifle',
    },
  
    {
        imageSrc: manowarimage,
        title: 'Man-O-War',
        description: 'Details about the final significant acquisition of 2021.',
        link: gunmanowarimage,
        type: 'Type: Assault Rifle',
    },
    {
        imageSrc: type25image,
        title: 'Type25',
        description: 'Details about the final significant acquisition of 2021.',
        link: guntype25image,
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