import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import ImageAndBuyBox from '../image_and_buyBox';
import ScrollTop from '../windowScrollTop';

class InfoPageLenovo extends Component {
    shouldComponentUpdate(){
        return false
    }
    render() {
        ScrollTop();
         let { product, url } = this.props;
        if (url === '/laptops') {
            this.props.history.push(url + '/Lenovo' + '/T-series' + '/' + this.props.product.id);
        } else {
            this.props.history.push(url + '/' + this.props.product.id);
        }
        return (
            <div className="image_and_boxPrice_All_bosex">

                <div className="image_and_info">
                    < ImageAndBuyBox product={product} />
                    <h3 className="product_name">{product.itemOfModel_name}</h3>
                    <div className="info">
                        <span>
                            Built to the highest standards by our multi award winning team, the 3XS LG15 Vengeance Pro II is a 15.6" VR Ready gaming laptop that includes a 8GB NVIDIA GeForce RTX 2070 MaxQ GPU plus a stunning 15.6in IPS panel with super-high 144Hz refresh rate. Also included is an 8th generation “Coffee Lake” Intel Core i7 8750H CPU, 16GB of DDR4 RAM, a 500GB Samsung 970 EVO SSD for rapid loading times and a 2TB hard drive for storage.
                        </span>
                        <span>
                            3XS represents the last word in quality and reliability. We build thousands of systems and laptops every year and we are confident that our reputation speaks for itself. You will find reviews of our systems in many popular publications both online and in print.
                            </span>
                        <span>
                            The LG15 Vengeance Pro is pre-built and ready for next-day delivery and comes with Windows 10 Home pre-installed and a two-year
                        </span>
                        <br />
                        <img src={require('../../../../../images/laptops/Lenovo/PC_pro.PNG')} alt="" />
                        <span>
                            A great advert for Max-Q RTX 2070 graphics. In day-to-day use you’ll struggle to notice the difference between this laptop and a top-end desktop PC. Kudos to Scan, because this is a strong demonstration of the RTX 2070 Max-Q’s power.
                        </span>
                    </div>
                    <h3 className="specifications"><span>Detailed Overview</span></h3>
                    <div className="detailed_overview_lenovo">
                        <div className="first_child_gpu">
                            <img src={require('../../../../../images/laptops/Lenovo/CPU.PNG')} alt="" />
                            <h4>Intel 8th Gen Coffe Lake CPU</h4>
                            <span>
                                This laptop supports the latest 8th gen Coffee Lake CPUs from Intel. The Core i7 8750H has 6 physical cores plus 6 more HyperThreading cores, a base clock of 2.2GHz and a turbo clock of up to 4.1GHz making it much faster than laptops with a 7th gen Kaby Lake CPU.
                            </span>
                        </div>
                        <div className="second_child_gpu">
                            <img src={require('../../../../../images/laptops/Lenovo/memory.PNG')} alt="" />
                            <h4>DDR4 RAM</h4>
                            <span>
                                High-speed system memory is essential for running Windows, applications and games. 3XS laptops feature the latest 2666MHz Corsair Vengeance DDR4 memory for a smooth experience.
                            </span>

                        </div>
                        <div className="third_child_gpu">
                            <img src={require('../../../../../images/laptops/Lenovo/nvidia.PNG')} alt="" />
                            <h4>NVIDIA Geforce Graphics</h4>
                            <span>
                                The Vengeance is equipped with the high-end GeForce RTX 2070 MaxQ graphics card, which features support for Real Time Ray Tracing and DLSS.
                            </span>

                        </div>
                    </div>
                    <div className="detailed_overview_lenovo">
                        <div className="first_child_gpu">
                            <img src={require('../../../../../images/laptops/Lenovo/lightning.PNG')} alt="" />
                            <h4>Lightning Quick Game Loading</h4>
                            <span>
                                Equipped with a PCI-E M.2 SSD, this 3XS laptops boots into Windows and load games in a flash, giving you more time to enjoy your new system.
                            </span>
                        </div>
                        <div className="second_child_gpu">
                            <img src={require('../../../../../images/laptops/Lenovo/keyboard.PNG')} alt="" />
                            <h4>Gaming Style</h4>
                            <span>
                                Lighting to match your mood. This 3XS gaming laptop has a backlit multicolour RGB keyboard with programmable lighting effects and mechanical switches for added tactile feedback.
                            </span>

                        </div>
                        <div className="third_child_gpu">
                            <img src={require('../../../../../images/laptops/Lenovo/light.PNG')} alt="" />
                            <h4>Thin and Light</h4>
                            <span>
                                This 3XS laptop is an ultra-thin model just 19.9mm thick and weighing 2kg, far less than most laptops of a similar spec.
                            </span>

                        </div>
                    </div>
                    <div className="detailed_overview_lenovo">
                        <div className="first_child_gpu">
                            <img src={require('../../../../../images/laptops/Lenovo/fullHD.PNG')} alt="" />
                            <h4>1080p FullHD IPS Screen</h4>
                            <span>
                                3XS gaming laptops feature vibrant IPS panels as these have better viewing angles, a wider gamut and colour accuracy than the TN panels found in other gaming laptops.
                            </span>
                        </div>
                        <div className="second_child_gpu">
                            <img src={require('../../../../../images/laptops/Lenovo/geforce.PNG')} alt="" />
                            <h4>GeForce Experience</h4>
                            <span>
                                Share your greatest gaming moments, keep your graphics drivers up to date and enjoy the convenience of one-click game optimisation with NVIDIA GeForce Experience.
                            </span>

                        </div>
                        <div className="third_child_gpu">
                            <img src={require('../../../../../images/laptops/Lenovo/windows10.PNG')} alt="" />
                            <h4>Operating System</h4>
                            <span>
                                All 3XS gaming laptops include genuine Microsoft Windows 10 64-bit, the most modern and up to date operating system for a gaming laptop.
                            </span>

                        </div>
                    </div>
                    <h3 className="specifications"><span>Detailed Specifications</span></h3>

                    <div className="box_specifications">
                        <div className="component">
                            <span>Component</span>
                            <span>Description</span>
                        </div>
                        <div className="specifications_items">
                            <span>Screen</span>
                            <span>15.6" FHD 1920 x 1080 IPS Panel</span>
                        </div>
                        <div className="specifications_items">
                            <span>Keyboard</span>
                            <span>Backlit RGB Gaming Keyboard</span>
                        </div>
                        <div className="specifications_items">
                            <span>Processor</span>
                            <span>Intel Core i7 8750H 'Coffee Lake' 2.2GHz Six Core with HT</span>
                        </div>
                        <div className="specifications_items">
                            <span>Memory</span>
                            <span>16GB Corsair Vengeance 2666MHz DDR4</span>
                        </div>
                        <div className="specifications_items">
                            <span>Graphics</span>
                            <span>8GB NVIDIA GeForce RTX 2070 MaxQ</span>
                        </div>
                        <div className="specifications_items">
                            <span>System Drive</span>
                            <span>500GB Samsung 970 EVO M.2 SSD</span>
                        </div>
                        <div className="specifications_items">
                            <span>Storage Drive</span>
                            <span>2TB Seagate Barracuda HDD</span>
                        </div>
                        <div className="specifications_items">
                            <span>Networking</span>
                            <span>Intel LAN and Wi-Fi</span>
                        </div>
                        <div className="specifications_items">
                            <span>Operating System</span>
                            <span>Microsoft Windows 10 Home 64bit</span>
                        </div>
                        <div className="specifications_items">
                            <span>Recovery Media</span>
                            <span>USB drive with system image and diagnostic software</span>
                        </div>
                        <div className="specifications_items">
                            <span>Warranty</span>
                            <span>2 Years Warranty - 2 Years Return to Base (inc Parts & Labour)</span>
                        </div>
                    </div>
                    <h3 className="specifications"><span>Peace of Mind</span></h3>
                    <div className="overclock">
                        <img src={require('../../../../../images/motherboard/num.PNG')} alt="" />
                        <span>
                            Unfortunately Laptop components do occasionally fail, and when this happens if you’ve built your laptop yourself you’re on your own. However, with a professionally built Scan 3XS Laptops you’re no longer alone. Our technical support team is available 7 days a week, from 9am to 10pm Mon - Fri, 10am to 6pm on Saturdays and 10am to 4pm on Sundays. Click <Link to="#">Here </Link> for more info on how to get technical support for your 3XS system.
                        </span>
                    </div>
                    <h3 className="specifications"><span>Technical Support</span></h3>
                    <div className="overclock">
                        <img src={require('../../../../../images/laptops/Lenovo/warranty.PNG')} alt="" />
                        <span>
                            Another key difference is that all Scan 3XS Laptops are covered by our 2 Year Warranty. This means that if your system develops a fault in its first year we will collect, repair and return it to you. In year 2 the warranty is Return to Base, so we cover parts and labour only. Click <Link to="#">Here </Link> for more info on how to get technical support for your 3XS system.
                        </span>
                    </div>
                </div>
            </div>
        )
    }


}
export default withRouter(InfoPageLenovo);
