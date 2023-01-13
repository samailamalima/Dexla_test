import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Header() {
  const [icons, setIcons] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('');
        setIcons(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {icons.map(icon => (
        <Icon key={icon.id} icon={icon} />
      ))}
    </div>
  );
}
const Icon = (props) => {
    return <img src={props.icon.url} alt={props.icon.name} />;
  };
  


//const Button = ({ header, subheader }) => {
//  return (
//    <div>
//        <Button header="Header Text" subheader="Subheader Text" onClick={() => console.log('Button clicked')}/>
//    <button>
//      <img src={icon} alt="icon" />
//      <h1>{header}</h1>
//      <h2>{subheader}</h2>
//    </button>
//
//    </div>
//
//  );
//};

export default Header;