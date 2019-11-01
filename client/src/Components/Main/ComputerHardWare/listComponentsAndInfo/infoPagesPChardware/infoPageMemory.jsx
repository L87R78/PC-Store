import React, { Component } from 'react';
import { withRouter } from "react-router";

import ImageAdnBuyBox from '../image_and_buyBox';
import ScrollTop from '../windowScrollTop';

class InfoPageMemory extends Component {
    constructor(props){
        super(props)
        this.state = {
            url: this.props.url
        }
    }
    shouldComponentUpdate(){
        return false
    }
    render() {
        ScrollTop();
        let { product } = this.props;
        this.props.history.push(this.state.url + '/' + product.id);
        return (
            <div className="image_and_boxPrice_All_bosex">
                <div className="image_and_info">
                    < ImageAdnBuyBox product={product} />
                    <h3 className="product_name">{product.itemOfModel_name}</h3>
                    <div className="info">
                        <span>
                            The 7940X may be the earliest of the brand new X-Series i9 range from Intel but it still comes equipped ready to tackle powerful processing. With a high core and thread count, every technology available to the X-Series (including Turbo Boost 3.0) and the most PCIe lanes ever of any desktop processor, this Intel i9 CPU is a force to be reckoned. Experience true CPU power with an i9 X-Series Processor.
                        </span>
                        <br />
                        <img className="img_memory" src={require('../../../../../images/CPU/specifications.PNG')} alt="" />
                        <br />
                        <br />
                    </div>
                    <h3 className="specifications"><span>MEMORY PERFORMANCE</span></h3>
                    <div className="gaming_media">
                        <img src={require('../../../../../images/memory/performance.PNG')} alt="" />
                        <h4>EXPERIENCE THE TRUE POWER OF DDR4 RAM</h4>
                        <span>
                            It was 2007 that the DDR3 standard was announced and in the years since then technology has only been pushed further. Eventually the memory standard was pushed to the edge of DDR3 limits, until DDR4 smashed through those limits! Corsair DDR4 doubled the bandwidth and dramatically increase clock speeds, whilst consuming less power than ever before.
                            </span>

                    </div>
                    <h3 className="specifications"><span>INSTALLING DDR4 MEMORY</span></h3>
                    <div className="gaming_media">
                        <img src={require('../../../../../images/memory/memory.PNG')} alt="" />
                        <h4>MOTHERBOARD SOCKET DDR4 OPTIMIZATION</h4>
                        <span>
                            Vengeance LPX DDR4 form factor is optimized and compatibility-tested for the latest X99 and Intel 100 series motherboards, forging reliably fast performance. With any standard DDR4 DIMM memory socketed motherboard you shouldn’t have any trouble installing the powerful Vengeance LPX RAM and getting that DDR4 performance into your system.
                            </span>
                    </div>
                    <h3 className="specifications"><span>PROFILE MEMORY DESIGN</span></h3>
                    <div className="gaming_media">
                        <img src={require('../../../../../images/memory/design.PNG')} alt="" />
                        <h4>CORSAIR DDR4 MEMORY SIZE</h4>
                        <span>
                            The clever and stylish, low-profile design of DDR4 LPX memory means it can fit    comfortably into much smaller spaces. The LPX series of Vengeance DRAM was prepared     for when the first of the Micro ATX and Mini-ITX motherboards for DDR4 memory        Freleased. In any system that has minimal internal space the small form factor of the     LPX DDR4 RAM from Corsair is ideal.
                            </span>

                    </div>
                    <h3 className="specifications"><span>OVERCLOCKING DDR4 RAM</span></h3>
                    <div className="gaming_media">
                        <img src={require('../../../../../images/memory/overclocking.PNG')} alt="" />
                        <h4>UNLOCK THE POTENTIAL WITHIN DDR4</h4>
                        <span>
                            Corsair’s Vengeance LPX DDR4 has been built around high-performance overclocking. Each module from the LPX series utilizes highly-screened memory ICs and an eight-layer PCB, with further overclocking improvments through the efficient heat spreader that provides effective cooling. The eight-layer PCB system on these DDR4 memory sticks helps if your computer is trying to squeeze too much information into one layer, causing a significant rise in temperature which can create a multitude of issues.
                            </span>
                    </div>
                    <h3 className="specifications"><span>VENGEANCE HEAT SPREADER</span></h3>
                    <div className="gaming_media">
                        <img src={require('../../../../../images/memory/heat.PNG')} alt="" />
                        <h4>COOLER MEMORY FOR BETTER PERFORMANCE</h4>
                        <span>
                            The heat spreader on Corsair LPX DDR4 memory is made of pure aluminum, creating a faster heat dissipation and a cooler operation. Usually the overclocking overhead is limited by the operating temperature, but not for the Vengeance LPX. Due to the unique design of the heat spreader, the temperature is constantly lowered as heat is pulled away from the ICs and into your system’s cooling path. Not only does the heat spreader allow Vengeance LPX to perform better, but the aggressive yet refined form factor looks great in any system.
                            </span>
                    </div>
                    <h3 className="specifications"><span>EASY RAM OVERCLOCKING</span></h3>
                    <div className="gaming_media">
                        <img src={require('../../../../../images/memory/overclocking_02.PNG')} alt="" />
                        <h4>UTILIZE XMP FOR OVERCLOCKING IN SECONDS</h4>
                        <span>
                            XMP 2.0 is supported by Vengeance LPX DRAM along with Intel 100 and X99 motherboards. Simply select XMP mode in the BIOS and it will automatically adjust to the fastest safe speed for the Corsair DDR4 Vengeance LPX. You’ll get amazing, reliable performance without lockups or other strange behavior. Enjoy trouble-free,automatic overclocking in seconds with the support of XMP 2.0.
                            </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(InfoPageMemory);
