import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './components/Layout';
import Header from './components/Header';


export default function App() {
  const access_token = 'figd_blY61sA7w-_ZP0Cx_llTO4d_ncMqB6iyqxxvau2f';
  const file_id = 'vRCqsniN1t2PndqlKeYQwI';
  
  const [fileData, setFileData] = useState(null);
  const getFile = async (access_token, file_id) => {
      try {
        const response = await axios({
          method: 'GET',
          url: `https://api.figma.com/v1/files/vRCqsniN1t2PndqlKeYQwI`,
          headers: { 'X-Figma-Token': access_token },
        });
        setFileData(response.data);
      } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
  getFile(access_token, file_id);
}, []);
return (
  <div>
    <Layout access_token={access_token} file_id={file_id} />
  </div>
);
}

