
import React from "react";
import Cards2 from "./card"
const AdminDashboard = (Cards) => {
 const footerBackgroundImage = '/src/client/assets/call9.jpg';
  const cardsData = [
    {
      title: "Gun Sales",
      description: "Check out the latest gun sales in your area.",
      image: "/src/client/assets/call3.jpg",
      link: "/gunsales",
      catergory: "Sales"
    },
    {
      title: "Gun Sales",
      description: "Check out the latest gun sales in your area.",
      image: "/src/client/assets/call3.jpg",
      link: "/gunsales",
      catergory: "Sales"
    },
    {
      title: "Gun Sales",
      description: "Check out the latest gun sales in your area.",
      image: "/src/client/assets/call9.jpg",
      link: "/gunsales",
      catergory: "Sales"
    },
    {
      title: "Gun Sales",
      description: "Check out the latest gun sales in your area.",
      image: "/src/client/assets/call4.jpg",
      link: "/gunsales",
      catergory: "Sales"
    },
  ]
  

  return (
      <div
  className="h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${footerBackgroundImage})` }}
  >

  <h1 className="text-white text-4xl"></h1>

<div className="flex flex-wrap justify-center">
  {cardsData.map(Cards => (
    <Cards key={Cards.id} Cards={Card}  />
 ) )}
 </div>
 </div>
 );


  
  
}


export default AdminDashboard