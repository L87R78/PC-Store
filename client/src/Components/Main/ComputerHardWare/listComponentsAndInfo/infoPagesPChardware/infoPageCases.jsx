import React, { Component } from 'react';
import { withRouter } from "react-router";

import ImageAdnBuyBox from '../image_and_buyBox';
import ScrollTop from '../windowScrollTop';

class InfoPageCases extends Component {
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
        let { product } = this.props;
        ScrollTop();
        this.props.history.push(this.state.url + '/' + product.id);
        return (
            <div className="image_and_boxPrice_All_bosex">
                <div className="image_and_info">
                    < ImageAdnBuyBox product={product} />
                    <h3 className="product_name">{product.itemOfModel_name}</h3>
                </div>
                <div className="gaming_media">
                    <h4>20 YEARS OF DELIVERING THE PERFECT USER EXPERIENCE</h4>
                    <span>
                        Thermaltake are celebrating their 20th anniversary, by gathering all the successful elements from the past two decades and merging them with the latest market trends to create the superior Level 20 PC case. Experience outstanding gaming sessions with supreme functionality, optimum ventilation and architectural aesthetics. Featuring a ventilation-focused, trio-chamber design with beautiful tempered glass panels and a tool-less locking system for easy access. Internally, you gain super-fast transmission with USB Type-C and USB 3.0, a TT Premium Gaming PCI-E 3.0 Riser cable and use of future-proof TT RGB PLUS software with voice control capabilities. The Level 20 also comes fitted with x3 Riing Plus 14 LED RGB fans, x2 Lumi Plus LED Strips and x1 Riing Plus digital controller to give you absolute control and true personalisation.
                    </span>
                </div>
                <h3 className="specifications"><span>Individual Aerodynamic Design</span></h3>
                <div className="gaming_media">
                    <div className="images_or_boxes">
                        <img src={require('../../../../../images/cases/system_01.PNG')} alt="" />
                        <img src={require('../../../../../images/cases/system_02.PNG')} alt="" />
                        <img src={require('../../../../../images/cases/system_03.PNG')} alt="" />
                    </div>
                    <h4>CREATE YOUR DREAM SYSTEM WITH THERMALTAKE</h4>
                    <span>
                        The Level 20 utilizes trio-chamber design to achieve optimal space management and ventilation. It separates the PSU, Motherboard and Storage/LCS into different compartments to create an exclusive component landscape and to offer even heat dissipation from the pre-installed 140mm Riing Plus RGB fans. All of this is protected by beautiful tempered glass panelling.
                    </span>

                </div>
                <h3 className="specifications"><span>Display in Remarkable Style</span></h3>
                <div className="gaming_media">
                    <img src={require('../../../../../images/cases/style.PNG')} alt="" />
                    <h4>MAKE A STATEMENT WITH THE LEVEL 20</h4>
                    <span>
                        Thermaltake has been evolving constantly over the past two decades in the PC DIY industry. From developing thermal ventilation optimization, gaming oriented design to architectural aesthetics they have now gone further by creating the Level 20. Constructed with distinct chambers and high precision CNC digital cutting aluminium mesh panels. The isolation of high capacity radiators and fans allow surplus interior space without compromising on cooling performance. Featuring three hinged swing-doors made with premium-quality 4mm thick tempered glass, assures window durability and viewing capability to thoroughly display your exceptional inner components.
                    </span>

                </div>
                <h3 className="specifications"><span>Superior and Expansion</span></h3>
                <div className="gaming_media">
                    <div className="images">
                        <img src={require('../../../../../images/cases/superior_01.PNG')} alt="" />
                        <img src={require('../../../../../images/cases/superior_02.PNG')} alt="" />
                    </div>
                </div>
                <h3 className="specifications"><span>Rapid USB Ports</span></h3>
                <div className="gaming_media">
                    <img src={require('../../../../../images/cases/ports.PNG')} alt="" />
                    <h4>SPEEDY USB TYPE-C  |  FOUR USB 3.0 </h4>
                    <span>
                        Thermaltake do not hold back when it comes to using the latest technology in the industry to improve their products. The Level 20 is installed with speedy a USB Type-C port and four USB 3.0 ports for lightning-fast transmission speeds, allowing you to plug in your peripherals and play instantly.
                    </span>
                </div>
                <h3 className="specifications"><span>Components the way you want</span></h3>
                <div className="gaming_media">
                    <img src={require('../../../../../images/cases/cable.PNG')} alt="" />
                    <h4>ULTRA-HIGH SPEED RISER CABLE</h4>
                    <span>
                        The Level 20 comes with a Thermaltake TT Gaming PCI-E 3.0 Riser Cable, this premium quality, ultra-high speed cable comes with EMI shielding and allows you to display your graphics card or power supply vertically to show off their true potential.
                    </span>
                </div>
                <h3 className="specifications"><span>System with Immersive RGB</span></h3>
                <div className="gaming_media">
                    <img src={require('../../../../../images/cases/cheir.PNG')} alt="" />
                    <h4>SMART TT RGB PLUS ECOSYSTEM</h4>
                    <span>
                        TT RGB PLUS delivers endless possibilities for using colour, synchronizing lights to your tasks and PC usage, or synching them with additional TT RGB products and peripherals. This patented software lets users change the light modes, colours, speeds, brightness, fan speeds, and even supports AI voice control in IOS and Android devices such as Alexa and your own personal smartphone.
                    </span>
                </div>
                <h3 className="specifications"><span>System Custom Illumination</span></h3>
                <div className="gaming_media">
                    <img src={require('../../../../../images/cases/fans.PNG')} alt="" />
                    <h4>VIA DIGITAL LIGHTING CONTROLLER</h4>
                    <span>
                        Featuring x3 Riing Plus 14 RGB Fans to enhance the ventilation, along with x2 Lumi Plus LED Strips to fiercely light up your rig for added aesthetics. Customizable with 16 million colours, both fans and LED lights can be controlled by TT RGB PLUS software via the Digital Lighting Controller which holds up to five profiles.
                    </span>
                </div>
                <h3 className="specifications"><span>Build your System</span></h3>
                <div className="gaming_media">
                    <img src={require('../../../../../images/cases/build.PNG')} alt="" />
                    <h4>EXCLUSIVE DISMOUNTABLE MODULAR DESIGN</h4>
                    <span>
                        The intuitive design and architecture of the Level 20 allows you to build your system with total simplicity. The included modular panels, racks, brackets, and pre-design mounting arrays let you say goodbye to those unreachable screw corners and gaps and truly enjoy constructing your dream PC.
                    </span>
                </div>
            </div>
        )
    }

}
export default withRouter(InfoPageCases);

