import React from 'react';
import { Link } from 'react-router-dom';

function MacBook({ el, hideSearchBox }) {
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
                                                    case 'MacBook 13.3':
                                                        return <div>
                                                            <Link to="/laptops/Apple/MacBook%2013.3" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>

                                                    case 'MacBook Pro 13':
                                                        return <div>
                                                            <Link to="/laptops/Apple/MacBook%20Pro%2013" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
                                                        </div>
                                                    case 'MacBook Pro 15':
                                                        return <div>
                                                            <Link to="/laptops/Apple/MacBook%20Pro%2015" onClick={(e) => hideSearchBox('-2000')}>• {ite.model_name}</Link>
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
export default MacBook
