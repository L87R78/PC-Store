import React, { Component } from 'react';
import DataComponentsPC from '../../../data/dataComponentsPC';
import ComponentsPC from './componentsPC';

class ComponentsGame extends Component {
    state = {
        data: DataComponentsPC,
    }
    render() {
        
        let { data } = this.state;
        return (
            <div className="bg_ComputerHardWare">
                < ComponentsPC data={data}/>
            </div>
        )
    }
}
export default ComponentsGame;
