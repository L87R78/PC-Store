import React, { Component } from 'react';
import { withRouter } from "react-router";

import ImageAdnBuyBox from '../image_and_buyBox';
import ScrollTop from '../windowScrollTop';

class InfoPageCPU extends Component {
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
                    <div className="info">
                        <span>
                            The 7940X may be the earliest of the brand new X-Series i9 range from Intel but it still comes equipped ready to tackle powerful processing. With a high core and thread count, every technology available to the X-Series (including Turbo Boost 3.0) and the most PCIe lanes ever of any desktop processor, this Intel i9 CPU is a force to be reckoned. Experience true CPU power with an i9 X-Series Processor.
                        </span>
                        <br />
                        <img src={require('../../../../../images/CPU/specifications.PNG')} alt="" />
                        <br />
                        <br />
                    </div>
                    <h3 className="specifications"><span>Experience X-Series Gaming</span></h3>
                    <div className="gaming_media">
                        <img src={require('../../../../../images/CPU/gaming_media.PNG')} alt="" />
                        <h4>Experience in-game performance like never before</h4>
                        <span>
                            Enter the realm of extreme performance where game play is so life-like it is difficult to tell where reality ends and the game begins. Surrounded by multiple   high-res displays and premium audio sound, you are totally immersed in the action of your AAA game title or the latest virtual reality thriller. Play extreme, live extreme, game extreme on a computer with an unlocked Intel Core X-series processor.
                        </span>
                        <span>
                            And because modern gaming extends beyond just gameplay, you want to simultaneously share your gameplay with the community and the world. Record all the action capturing that once in a life-time manoeuvre that brought you to victory, and convert your game play into a shareable format to immediately post on your social media page. That is extreme mega tasking and the power of the Intel Core X-series processor.
                        </span>

                    </div>
                    <h3 className="specifications"><span>Perfect Intel X299 Chip</span></h3>
                    <div className="gaming_media">
                        <h4>A CPU Built for the ultimate platform</h4>
                        <img src={require('../../../../../images/CPU/chip.PNG')} alt="" />
                        <span>
                            The Intel X299 chipset paired with intel Core X-series processors provide a world class platform for gaming, content creation and over-clocking. Whether it is responsiveness, expandability or performance you crave, this platform has you covered. Integrated USB 3.0 makes moving files to your tablet and smartphone blazing fast.
                        </span>
                        <span>
                            The platform also provides RAID support on PCI Express and Serial ATA storage devices, fast data transfers with support for PCIe 3.0 storage devices and finally,Intel Optane Memory support. Want to push the envelope with overclocking? The Intel X299 chipset and Intel Core X-series processor family bring new unlocked base clock capabilities.
                        </span>
                        <span>
                            Unlock your individual cores and memory frequencies to amazing levels while having the flexibility to keep other areas within specification. With support for Intel Extreme Memory Profiles (XMP), Intel Extreme Tuning Utility (XTU), and the Intel Performance Tuning Protection Package Plan the capabilities of the Intel X299 chipset and new Intel Core X-series processors are a threat to every overclocking world record.
                        </span>
                    </div>
                    <h3 className="specifications"><span>Creativity Capabilities</span></h3>
                    <div className="gaming_media">
                        <img src={require('../../../../../images/CPU/creativity.PNG')} alt="" />
                        <h4>Intel CPU: less waiting and more creating</h4>
                        <span>
                            Your creativity is limitless and once you are in the flow of ideas, you need a system that will keep up. You need the uncompromising performance in a PC powered by the Intel Core X-series processor. The Intel Core X-series processor family with 8, 12 or even 18 cores delivers amazing performance when multiple real-time workloads are stacked.
                        </span>
                        <span>
                            Spend more time creating while your Intel Core X-series CPU powered system simultaneously handles uploading massive 4K files, rending effects and other compute intensive workloads in the background. And with the updated Intel Turbo Boost Max Technology 3.0, you have the control to give priority to the apps that need the power of the two best performing cores.
                        </span>
                        <span>
                            Quad channel memory also delivers improved responsiveness and decreases start up time when you are working with large files and content creation applications. With an Intel Core X-series processor you can focus on creating with the confidence your results will be as remarkable as you imagined.
                        </span>
                    </div>
                    <h3 className="specifications"><span>Intel 10 X-Series Features</span></h3>
                    <div className="features">
                        <div className="first_child">
                            <img src={require('../../../../../images/CPU//features/turbo_01.PNG')} alt="" />
                            <h4>Turbo Boost 2.0</h4>
                            <span>
                                Dynamically increases the processor’s frequency, as needed, by taking advantage of thermal and power headroom when operating below specified limits.
                            </span>
                        </div>
                        <div className="second_child">
                            <img src={require('../../../../../images/CPU//features/turbo_02.PNG')} alt="" />
                            <h4>Turbo Boost 3.0</h4>
                            <span>
                                Identifies the two fastest cores on the processor die to provide improved single threaded performance on X-series processors.
                            </span>

                        </div>
                    </div>
                    <div className="features">
                        <div className="first_child">
                            <img src={require('../../../../../images/CPU//features/memory.PNG')} alt="" />
                            <h4>Integrated Memory Controller</h4>
                            <span>
                                Supports up to 4 channels of DDR4 (up to 2666) memory with 1 DIMM per channel. Support for the Intel Extreme Memory Profile (Intel XMP) specification, revision 2.0 for DDR4.
                            </span>
                        </div>
                        <div className="second_child">
                            <img src={require('../../../../../images/CPU//features/encryption.PNG')} alt="" />
                            <h4>Advanced Encryption Standard</h4>
                            <span>
                                A fast, secure AES engine for a variety of encryption apps, including whole disk encryption, file storage encryption, conditional access of HD content, internet security.
                            </span>

                        </div>
                    </div>
                    <div className="features">
                        <div className="first_child">
                            <img src={require('../../../../../images/CPU//features/overclocking.PNG')} alt="" />
                            <h4>Overclocking Enabled</h4>
                            <span>
                                Fully unlocked core multipliers, power, base clock and DDR4 memory ratios for amazing flexibility with overclocking.
                            </span>
                        </div>
                        <div className="second_child">
                            <img src={require('../../../../../images/CPU//features/PCI.PNG')} alt="" />
                            <h4>PCI Express 3.0</h4>
                            <span>
                                Offers up to 8GT/S for fast access to peripheral devices and networking up to 40 lanes.
                            </span>

                        </div>
                    </div>
                    <div className="features">
                        <div className="first_child">
                            <img src={require('../../../../../images/CPU//features/smart.PNG')} alt="" />
                            <h4>SMART CACHE</h4>
                            <span>
                                Massive amounts of shared cached allows faster access to your data by enabling dynamic and efficient allocation.
                            </span>
                        </div>
                        <div className="second_child">
                            <img src={require('../../../../../images/CPU//features/virtualization.PNG')} alt="" />
                            <h4>VIRTUALIZATION TECH</h4>
                            <span>
                                Allows one hardware platform to function as multiple “virtual” platforms.
                            </span>

                        </div>
                    </div>
                    <div className="features">
                        <div className="first_child">
                            <img src={require('../../../../../images/CPU//features/shipset.PNG')} alt="" />
                            <h4>X299 CHIPSET</h4>
                            <span>
                                The X-Series CPU are supported by the new Intel X299 Chipset.
                            </span>
                        </div>
                        <div className="second_child">
                            <img src={require('../../../../../images/CPU//features/greenTech.PNG')} alt="" />
                            <h4>GREEN TECH</h4>
                            <span>
                                Manufactured with lead-free and halogen-free component packages.
                            </span>

                        </div>
                    </div>
                    <div className="features">
                        <div className="first_child">
                            <img src={require('../../../../../images/CPU//features/optaneMemory.PNG')} alt="" />
                            <h4>OPTANE MEMORY</h4>
                            <span>
                                Provides performance improvements as well as fast app response times for system acceleration and responsiveness.
                            </span>
                        </div>
                        <div className="second_child">
                            <img src={require('../../../../../images/CPU//features/hyperTech.PNG')} alt="" />
                            <h4>HYPER THREADING TECH</h4>
                            <span>
                                Delivers two processing threads per physical core. Highly threaded applications can get more work don’t parallel, completing tasks sooner.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default withRouter(InfoPageCPU);
