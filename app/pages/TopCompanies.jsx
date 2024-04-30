// components/TopCompaniesPage.js
import React from 'react';
import Image from 'next/image'
import { SiSony , SiToyota, SiMitsubishi, SiHonda, SiHitachi, SiTokyometro, SiPanasonic, SiNintendo} from "react-icons/si";

const TopCompaniesPage = () => {
   

    return (
        <div id='topCompanies-container'>
            
            <div id='icons-div2'>
            <SiSony className='icons'/>
            <SiToyota className='icons'/>
            <SiMitsubishi className='icons'/>
            <SiHonda className='icons '/>
            </div>
            
            <div id='icons-div1'>
            <SiHitachi className='icons'/>
            <SiTokyometro className='icons'/>
            <SiPanasonic className='icons'/>
            <SiNintendo className='icons'/>
            </div>
           
        </div>
    );
};

export default TopCompaniesPage;
