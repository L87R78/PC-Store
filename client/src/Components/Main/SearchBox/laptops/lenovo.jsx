import React from 'react';
import { Link } from 'react-router-dom';

function Lenovo({ el, hideSearchBox }) {
    return (
        <div className="search_laptops">
            <span className="categories">LAPTOPS</span>

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
                                                    case 'ThinkPad T-series':
                                                        return <div>
                                                            <Link to="/laptops/Lenovo/ThinkPad%20T-series" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}
                                                            </Link>
                                                        </div>

                                                    case 'ThinkPad X-series':
                                                        return <div>
                                                            <Link to="/laptops/Lenovo/ThinkPad%20X-series" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'ThinkPad Yoga-series':
                                                        return <div>
                                                            <Link to="/laptops/Lenovo/ThinkPad%20Yoga-series" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'ThinkPad E-series':
                                                        return <div>
                                                            <Link to="/laptops/Lenovo/ThinkPad%20E-series" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'IdeaPad 330s':
                                                        return <div>
                                                            <Link to="/laptops/Lenovo/IdeaPad%20330s" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'IdeaPad 520':
                                                        return <div>
                                                            <Link to="/laptops/Lenovo/IdeaPad%20520" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'Lenovo Yoga 530':
                                                        return <div>
                                                            <Link to="/laptops/Lenovo/Lenovo%20Yoga%20530" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'Legion Y-series':
                                                        return <div>
                                                            <Link to="/laptops/Lenovo/Legion%20Y-series" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
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
export default Lenovo
