import React from 'react';
import DataLaptops from '../../../data/dataLaptops';
import MainComponets from '../ComputerHardWare/componentsPC';

const Technologies = (props) => {
   return (
      <div className="bg_laptops">
         < MainComponets data={DataLaptops} url={props.match.url}/>
      </div>
   )
}
export default Technologies;