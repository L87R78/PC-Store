import React from 'react';
import { Link } from 'react-router-dom';

function HardWare({ el, hideSearchBox }) {
    let categories = '';
    el.map(item => {
        item.items.map(ite => {
            categories = ite.type;
        })
    })
    return (
        <div className="search_laptops">
            <span className="categories">{categories}</span>
            {el.map((item, key) => {
                {
                    return < div className="productsBrand" key={key}>
                        {
                            <div>
                                <span>{item.brand}</span>
                                {
                                    <div className="img_and_link">
                                        {
                                            item.items.map(ite => {
                                                switch (ite.model_name) {
                                                    case '3XS Professionally':
                                                        return <div>
                                                            <Link to="/computerHardWare/Motherboards/3XS%20Professionally" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>

                                                    case 'AMD X399 Socket-TR4':
                                                        return <div>
                                                            <Link to="/computerHardWare/Motherboards/AMD%20X399%20Socket-TR4" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'Gigabyte X499-WU8':
                                                        return <div>
                                                            <Link to="/computerHardWare/Motherboards/Gigabyte%20X499-WU8" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'Intel X299-Socket':
                                                        return <div>
                                                            <Link to="/computerHardWare/Motherboards/Intel%20X299-Socket" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'DDR4 Dual-2133MHz':
                                                        return <div>
                                                            <Link to="/computerHardWare/Memory%20-%20RAM/DDR4%20Dual-2133MHz" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'DDR4 Channel-3600MHz':
                                                        return <div>
                                                            <Link to="/computerHardWare/Memory%20-%20RAM/DDR4%20Channel-3600MHz" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'Core X-series':
                                                        return <div>
                                                            <Link to="/computerHardWare/CPU/Core%20X-series" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'Core i7 Socket-1151':
                                                        return <div>
                                                            <Link to="/computerHardWare/CPU/Core%20i7%20Socket-1151" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'Cases without Window':
                                                        return <div>
                                                            <Link to="/computerHardWare/Cases/Cases%20without%20Window" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'Windowed Mid Tower':
                                                        return <div>
                                                            <Link to="/computerHardWare/Cases/Windowed%20Mid%20Tower" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'GeForce RTX':
                                                        return <div>
                                                            <Link to="/computerHardWare/GPU/GeForce%20RTX" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'VR Headsets':
                                                        return <div>
                                                            <Link to="/computerHardWare/GPU/VR%20Headsets" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                }
                                            })
                                        }
                                    </div>
                                }
                            </div>
                        }
                    </div>
                }
            })}
        </div>
    )
}
export default HardWare;
