import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

import ImageAdnBuyBox from '../image_and_buyBox';
import ScrollTop from '../windowScrollTop';

class InfoPageGPU extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: this.props.url
        }
    }

    shouldComponentUpdate() {
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
                    <h4>PROFESSIONAL GRAPHICS CARD SOLUTIONS WITH THE NVIDIA TITAN RTX</h4>
                    <span>
                        The NVIDIA TITAN RTX is the fastest and most powerful PC graphics card ever built. It’s powered by the award-winning Turing architecture, bringing 130 Tensor TFLOPs of performance, 576 tensor cores, and 24 GB of ultra-fast GDDR6 memory to your PC. Powered by the new NVIDIA Turing GPU architecture and the ground-breaking RTX platform, RTX graphics cards combine real-time ray tracing, artificial intelligence, and programmable shading.
                    </span>
                    <span>
                        This TITAN RTX card is available for educational institutions ONLY. If you are educational institution interested in this product, please contact the SCAN Managed Account Team by telephone to discuss your requirements. If you do not meet the requirement of being an educational institution & are still interested in purchasing the TITAN RTX graphics card, <Link to="#">PLEASE CLICK HERE FOR THE REGULAR RETAIL CARD</Link> .
                    </span>
                    <br />
                    <div className="images_or_boxes">
                        <img src={require('../../../../../images/GPU/specifications_01.PNG')} alt="" />
                        <img src={require('../../../../../images/GPU/specifications_02.PNG')} alt="" />
                    </div>
                </div>
                <h3 className="specifications"><span>Spectacular Design</span></h3>
                <div className="gaming_media">
                    <img src={require('../../../../../images/GPU/design.PNG')} alt="" />

                    <div className="images_or_boxes">
                        <div className="gpu_boxes">
                            <div className="gpu">
                                <h4>NVIDIA TURING GPU</h4>
                                <span>
                                    TITAN RTX accelerates photorealistic ray tracing with 72 RT Cores, AI workflows with 576 Tensor Cores, and parallel computing with 4608 NVIDIA CUDA® cores for developers, researchers, creators, and enthusiasts.
                                </span>
                            </div>
                            <div className="memory">
                                <h4>GDDR6 MEMORY</h4>
                                <span>
                                    24 GB of ultra-fast GDDR6 memory provides up to 672 GB/s of memory bandwidth for greater throughput and to handle larger datasets.
                                </span>

                            </div>
                            <div className="cover">
                                <h4>COVER</h4>
                                <span>
                                    A forged and machine-finished diecast aluminium cover with diamond-cut edge detailing provides a rigid, lightweight frame for an open design with beautifully smooth, continuous curves.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="images_or_boxes">
                        <div className="gpu_boxes">
                            <div className="gpu">
                                <h4>FAN</h4>
                                <span>
                                    Dual 13-blade fans produce 3X higher airflow and ultra-quiet acoustics.
                                </span>
                            </div>
                            <div className="memory">
                                <h4>POWER SUPPLY</h4>
                                <span>
                                    The all new 13-phase iMON DrMOS power supply delivers more headroom and sub-millisecond power management for maximum overclocking.
                                </span>
                            </div>
                            <div className="cover">
                                <h4>VAPOR CHAMBER</h4>
                                <span>
                                    This full-card vapor chamber is 2X larger to maximize heat spreading and heat transfer to the finstack.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="images_or_boxes">
                        <div className="gpu_boxes">
                            <div className="gpu">
                                <h4>DISPLAYPORT 1.4 8K @60 HZ</h4>
                                <span>
                                    Drive ultra-high resolutions of up to 8K @ 60 Hz from a single link.
                                </span>
                            </div>
                            <div className="memory">
                                <h4>TITAN RTX NVLINK™ CONNECTOR</h4>
                                <span>
                                    Double the effective GPU memory capacity to 48 GB and scale performance with up to 100 GB/s in total bandwidth of data transfer utilizing the NVIDIA NVLink™ technology.
                                </span>

                            </div>
                            <div className="cover">
                                <h4>VIRTUALLINK</h4>
                                <span>
                                    The VirtualLink™ connector simplifies connectivity by meeting the power, display, and bandwidth demands of the next-gen HMD devices to support more immersive experiences.
                                </span>
                            </div>
                        </div>
                    </div>

                    <h3 className="specifications"><span>GPU's NVLINK™ Bridge</span></h3>
                    <div className="images_or_boxes">

                        <div className="nvlink_text">
                            <h4>TITAN RTX NVLINK™ CONNECTOR</h4>
                            <span>
                                Double the effective GPU memory capacity to 48 GB and scale performance up to 100 GB/s in total bandwidth of data transfer when you combine the power of 2 TITAN RTX cards utilizing NVIDIA NVLink technology inside the TITAN RTX NVLink bridge.Titan RTX NVLink bridge not included, available separately. TITAN RTX cards are sold individually, with 2x cards required for NVLink, in addition to NVLink bridge.
                            </span>
                        </div>

                        <img className="img_nvlink_text" src={require('../../../../../images/GPU/titan.PNG')} alt="" />
                    </div>
                    <h3 className="specifications"><span>NVIDIA GPU Architecture</span></h3>
                    <div className="gaming_media">
                        <img src={require('../../../../../images/GPU/gpu_architecture.PNG')} alt="" />
                        <h4>UP TO 6 TIMES FASTER PERFORMANCE</h4>
                        <span>
                            The greatest leap since the invention of the NVIDIA® CUDA® GPU in 2006, The RTX GPUs are powered by the Turing Architecture, this gives you 6x faster performance over previous-generation graphics cards. Turing uses a new 12nm manufacturing process and also brings the power of real-time ray tracing and AI to your games.
                        </span>
                    </div>
                    <h3 className="specifications"><span>Tracing Technologies & GDDR6</span></h3>
                    <div className="gaming_media">
                        <img src={require('../../../../../images/GPU/GDDR6.PNG')} alt="" />
                        <h4>WORLD'S FIRST FOR RAY TRACING & GDDR6</h4>
                        <span>
                            The GeForce RTX TITAN delivers truly unique real-time ray-tracing technologies for cutting-edge, hyper-realistic graphics, this means the RTX TITAN is light years ahead of other cards and gives you the most realistic gaming experience ever. The RTX cards also are the first graphics cards to feature GDDR6 memory that has a speed of 14Gbps (14,000 MHz).
                        </span>
                    </div>
                    <h3 className="specifications"><span>GeForce RTX TITAN Features</span></h3>
                    <div className="features">
                        <div className="first_child_gpu">
                            <img src={require('../../../../../images/GPU//features/features_01.PNG')} alt="" />
                            <h4>GEFORCE EXPERIENCE</h4>
                            <span>
                                The essential companion to your GeForce graphics card. Capture and share videos, screenshots, and livestreams. Keep your drivers up to date and optimize your games.
                            </span>
                        </div>
                        <div className="second_child_gpu">
                            <img src={require('../../../../../images/GPU//features/features_02.PNG')} alt="" />
                            <h4>GAME READY DRIVERS</h4>
                            <span>
                                Get the highest levels of performance, and the smoothest experience possible, from the moment you start playing.
                            </span>

                        </div>
                        <div className="third_child_gpu">
                            <img src={require('../../../../../images/GPU//features/features_03.PNG')} alt="" />
                            <h4>NVIDIA SHADOWPLAY</h4>
                            <span>
                                Record and share high-quality gameplay videos, screenshots, and livestreams with your friends.
                            </span>

                        </div>
                        <div className="fourth_child_gpu">
                            <img src={require('../../../../../images/GPU//features/features_04.PNG')} alt="" />
                            <h4>NVIDIA ANSEL</h4>
                            <span>
                                Turn your screenshots into art with this powerful in-game photo mode that captures 360, HDR, and super-resolution photos.
                            </span>

                        </div>
                    </div>
                    <div className="features">
                        <div className="first_child_gpu">
                            <img src={require('../../../../../images/GPU//features/features_05.PNG')} alt="" />
                            <h4>DIRECTX 12</h4>
                            <span>
                                Power new visual effects and rendering techniques for more lifelike gaming.
                            </span>
                        </div>
                        <div className="second_child_gpu">
                            <img src={require('../../../../../images/GPU//features/features_06.PNG')} alt="" />
                            <h4>NVIDIA G-SYNC & HDR</h4>
                            <span>
                                Get smooth, tear-free gameplay at refresh rates up to 240 Hz, plus HDR, and more. This is the ultimate gaming display and the go-to equipment for enthusiast gamers.
                            </span>

                        </div>
                        <div className="third_child_gpu">
                            <img src={require('../../../../../images/GPU//features/features_07.PNG')} alt="" />
                            <h4>VIRTUAL REALITY</h4>
                            <span>
                                By combining advanced VR rendering, real-time ray tracing, and AI, the GeForce RTX will take VR to a new level of realism.
                            </span>

                        </div>
                        <div className="fourth_child_gpu">
                            <img src={require('../../../../../images/GPU//features/features_08.PNG')} alt="" />
                            <h4>4K GAMING</h4>
                            <span>
                                Step up to the ultimate 4K gaming experience with the GeForce RTX and enjoy today’s biggest games in amazing detail.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default withRouter(InfoPageGPU);





