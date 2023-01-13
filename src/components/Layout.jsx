import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';


export default function Layout() {
    const access_token = 'figd_blY61sA7w-_ZP0Cx_llTO4d_ncMqB6iyqxxvau2f';
    const file_id = 'vRCqsniN1t2PndqlKeYQwI';

    const Layout = (props) => {
    const [fileData, setFileData] = useState(Layout);
    const getFile = async () => {
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
          getFile();
        }, []);
        return (
          <div>
            {fileData && <Header headerText={fileData.name} />}
          </div>
        );
      };
  return (
    <div>Layout</div>
  )
}
