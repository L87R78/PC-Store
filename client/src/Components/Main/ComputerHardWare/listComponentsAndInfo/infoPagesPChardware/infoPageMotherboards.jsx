import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import ImageAdnBuyBox from '../image_and_buyBox';
import ScrollTop from '../windowScrollTop';

class InfoPageMotherboard extends Component {
    
    shouldComponentUpdate(){
        return false
    }
    render() {
        ScrollTop();
        let { product, url } = this.props;
        if(url === '/computerHardWare'){
            this.props.history.push(url + '/Motherboards' + '/3XS Professionally' + '/'+ this.props.product.id);
        }else {
            this.props.history.push(url + '/' + this.props.product.id);
        }
   
        return (
            <div className="image_and_boxPrice_All_bosex">
                <div className="image_and_info">
                    < ImageAdnBuyBox product={product} />
                    <h3 className="product_name">{product.itemOfModel_name}</h3>
                    <div className="info">
                        <span>
                            Built to the highest standards by our multi award winning team, this bundle features the brand new AMD Ryzen 5 3600 six core CPU which runs up to 4.2GHz. We also include 16GB of Corsair Vengeance LPX 3200MHz DDR4 memory, an ASUS ROG STRIX B450-F GAMING motherboard and a Corsair Hydro H100x cooler to keep things cool and quiet.
                        </span>
                        <span>
                            Our engineers will ensure your motherboard is updated to the latest stable BIOS and that your bundle is stress tested thoroughly to avoid any issues.
                        </span>
                        <span>
                            3XS represents the last word in quality and reliability. We build thousands of systems and bundles every year and we are confident that our reputation speaks for itself. You will find reviews of our systems in many popular publications both online and in print.
                        </span>
                    </div>
                    <h3 className="specifications"><span>Detailed Specifications</span></h3>

                    <div className="box_specifications">
                        <div className="component">
                            <span>Component</span>
                            <span>Description</span>
                        </div>
                        <div className="specifications_items">
                            <span>Processor</span>
                            <span>AMD Ryzen 5 3600 3.6GHz Six Core with SMT</span>
                        </div>
                        <div className="specifications_items">
                            <span>Motherboard</span>
                            <span>ASUS ROG STRIX B450-F GAMING</span>
                        </div>
                        <div className="specifications_items">
                            <span>Memory</span>
                            <span>16GB Corsair Vengeance LPX 3200MHz DDR4</span>
                        </div>
                        <div className="specifications_items">
                            <span>CPU Cooler</span>
                            <span>Corsair Hydro H100x</span>
                        </div>
                        <div className="specifications_items">
                            <span>Warranty</span>
                            <span>2 Year Warranty - Return to Base (Parts & Labour)</span>
                        </div>
                    </div>
                    <div className="why_buy_bild">
                        <h3><span>why buy bild ?</span></h3>
                        <img src={require('../../../../../images/motherboard/motherboard.PNG')} alt="" />
                        <h5>3XS BUNDLE VS SELF-BUILT</h5>
                        <span>Anyone can build a PC, so what really makes the benefit of a 3XS bundle? For starters, our team has been designing and building PCs for more than 20 years, so we have a huge amount of experience in building highly reliable systems that deliver the most performance for your budget. These are the benefits you receive when buying a professionally built 3XS system versus building a system yourself.</span>
                    </div>

                    <h3 className="specifications"><span>Assembled & Overclocked</span></h3>
                    <div className="overclock">
                        <img src={require('../../../../../images/motherboard/overclocked.PNG')} alt="" />
                        <span>An overclocked bundle is professionally built in Scans state of the art 3XS Lab, each bundle undergoes a 24 burn test to guarantee stability. Your bundle will be shipped out fully built in a custom box which includes all the original component packaging.</span>
                    </div>
                    <h3 className="specifications"><span>No Compatibility Headaches</span></h3>
                    <div className="overclock">
                        <img src={require('../../../../../images/motherboard/headaches.PNG')} alt="" />
                        <span>It can take weeks to research the right combination of components, not just to ensure you get the most bang for your buck but to minimise the chance of one component being incompatible with another. Whether you buy a system from our configurator or a custom spec system our engineers will do all this hard work for you, ensuring that when your system is delivered it performs flawlessly.</span>
                    </div>
                    <h3 className="specifications"><span>Intensively Tested</span></h3>
                    <div className="overclock">
                        <img src={require('../../../../../images/motherboard/tested.PNG')} alt="" />
                        <span>Building a bundle only takes a few minutes, but making sure that everything is configured properly and that the overclock is stable takes up a huge amount of time. By ordering a 3XS system our engineers take this painful process away, as all our systems undergo a strenuous Quality Control procedure which includes installing the latest motherboard BIOS and the aforementioned 24 hour burn test.</span>
                    </div>
                    <h3 className="specifications"><span>Peace of Mind</span></h3>
                    <div className="overclock">
                        <img src={require('../../../../../images/motherboard/num.PNG')} alt="" />
                        <span>Unfortunately PC components do occasionally fail, and when this happens if you’ve overclocked the CPU yourself you’re on your own. However, with a professionally built Scan 3XS overclocked bundle you’re no longer alone. Your bundle is covered by a 2 year return to base warranty and our technical support team is available 7 days a week, from 9am to 10pm Mon - Fri, 10am to 6pm on Saturdays and 10am to 4pm on Sundays. Click <Link to="#" >Here </Link> for more info on how to get technical support for your 3XS system.</span>
                    </div>
                    <h3 className="specifications"><span>Widely Acclaimed</span></h3>
                    <div className="overclock">
                        <img src={require('../../../../../images/motherboard/acclaimed.PNG')} alt="" />
                        <span>Our 3XS PCs have won hundreds of awards in the press from publications such as Custom PC, Develop3D, Expert Reviews, HEXUS, PC Gamer and PC Pro. In addition 3XS has won Custom PC’s annual Dream PC competition every year it has run since 2007. You can read all our reviews <Link to="#">Here </Link> plus customer reviews on the configurator.</span>
                    </div>
                </div>
            </div>
        )
    }

}
export default withRouter(InfoPageMotherboard);
