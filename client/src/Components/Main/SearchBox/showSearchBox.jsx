import React from 'react';
import LenovoSearch from './laptops/lenovo';
import MacBookSearch from './laptops/MacBook';
import HardWareSearch from './hardware/hardware';
import GamesSearch from './games/games';

function ShowSearchBoxLaptops({ result, hideSearchBox }) {
    return (
        <div className="result_from_search">
            {
                result.map((el, key) => {
                    let brand = el[0].brand.split(' ');
                    switch (brand[0]) {
                        case 'Lenovo':
                            return <div key={key} className="brand_name">
                                <div className="show_search_info_box_brand">
                                    <span className="brand">BRAND</span>
                                </div>
                                <i className="fab fa-windows"></i><span>Lenovo</span>
                                < LenovoSearch el={el} hideSearchBox={hideSearchBox} />
                            </div>
                        case 'MacBook':
                            return <div key={key} className="brand_name">
                                <div className="show_search_info_box_brand">
                                    <span className="brand">BRAND</span>
                                </div>
                                <i className="fab fa-apple"></i><span>MacBook</span>
                                < MacBookSearch el={el} hideSearchBox={hideSearchBox} />
                            </div>
                        case 'AMD':
                            return <div key={key} className="brand_name">
                                <div className="show_search_info_box_brand">
                                    <span className="brand">CATEGORIES</span>
                                </div>
                                <div className="img_categories">
                                    <img src={require('../../../images/Motherboard-icon.png')} alt="" />
                                    <span>HARDWARE</span>
                                </div>
                                < HardWareSearch el={el} hideSearchBox={hideSearchBox} />
                            </div>

                        case 'Gigabyte':
                            return <div key={key} className="brand_name">
                                <div className="show_search_info_box_brand">
                                    <span className="brand">CATEGORIES</span>
                                </div>
                                <div className="img_categories">
                                    <img src={require('../../../images/Motherboard-icon.png')} alt="" />
                                    <span>HARDWARE</span>
                                </div>
                                < HardWareSearch el={el} hideSearchBox={hideSearchBox} />
                            </div>
                        case 'Intel-X': return <div key={key} className="brand_name">
                            <div className="show_search_info_box_brand">
                                <span className="brand">CATEGORIES</span>
                            </div>
                            <div className="img_categories">
                                <img src={require('../../../images/Motherboard-icon.png')} alt="" />
                                <span>HARDWARE</span>
                            </div>
                            < HardWareSearch el={el} hideSearchBox={hideSearchBox} />
                        </div>
                        case 'Intel': return <div key={key} className="brand_name">
                            <div className="show_search_info_box_brand">
                                <span className="brand">CATEGORIES</span>
                            </div>
                            <div className="img_categories">
                                <img src={require('../../../images/CPU-Intel-icon.png')} alt="" />
                                <span>HARDWARE</span>
                            </div>
                            < HardWareSearch el={el} hideSearchBox={hideSearchBox} />
                        </div>
                        case 'Corsair': return <div key={key} className="brand_name">
                            <div className="show_search_info_box_brand">
                                <span className="brand">CATEGORIES</span>
                            </div>
                            <div className="img_categories">
                                <img src={require('../../../images/System-Memory-icon.png')} alt="" />
                                <span>HARDWARE</span>
                            </div>
                            < HardWareSearch el={el} hideSearchBox={hideSearchBox} />
                        </div>
                        case 'Cases': return <div key={key} className="brand_name">
                            <div className="show_search_info_box_brand">
                                <span className="brand">CATEGORIES</span>
                            </div>
                            <div className="img_categories">
                                <img src={require('../../../images/cases.png')} alt="" />
                                <span>HARDWARE</span>
                            </div>
                            < HardWareSearch el={el} hideSearchBox={hideSearchBox} />
                        </div>
                        case 'NVIDIA': return <div key={key} className="brand_name">
                            <div className="show_search_info_box_brand">
                                <span className="brand">CATEGORIES</span>
                            </div>
                            <div className="img_categories">
                                <img src={require('../../../images/gpu.png')} alt="" />
                                <span>HARDWARE</span>
                            </div>
                            < HardWareSearch el={el} hideSearchBox={hideSearchBox} />
                        </div>
                        case 'Virtual Reality': return <div key={key} className="brand_name">
                            <div className="show_search_info_box_brand">
                                <span className="brand">CATEGORIES</span>
                            </div>
                            <div className="img_categories">
                                <img src={require('../../../images/gpu.png')} alt="" />
                                <span>HARDWARE</span>
                            </div>
                            < HardWareSearch el={el} hideSearchBox={hideSearchBox} />
                        </div>
                        //games
                        case 'DOOM':
                        case 'Darksiders':
                        case 'Destroy':
                        case 'FIFA':
                        case 'Resident-6':
                        case 'Resident-4':
                        case 'Chaosbane':
                        case 'Assassins':
                        case 'Sims':
                        case 'WRC':
                        case 'Marvel':
                        case 'Grand':
                        case 'NBA':
                        case 'WWE':
                        case 'Mafia':
                        case 'MaXCOMia':
                        case 'BioShock':
                        case 'Evil':
                        case 'Far':
                            return <div key={key} className="brand_name">
                                <div className="show_search_info_box_brand">
                                    <span className="brand">CATEGORIES</span>
                                </div>
                                <div className="img_categories">
                                    <img src={require('../../../images/Play-Games-icon.png')} alt="" />
                                    <span>GAMES</span>
                                </div>
                                < GamesSearch el={el} hideSearchBox={hideSearchBox} />
                            </div>

                    }
                })
            }
        </div>
    )
}
export default ShowSearchBoxLaptops;