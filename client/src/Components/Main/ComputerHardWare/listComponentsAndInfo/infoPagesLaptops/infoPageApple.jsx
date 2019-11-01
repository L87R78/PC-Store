import React, { Component } from 'react';
import { withRouter } from "react-router";

import ImageAndBuyBox from '../image_and_buyBox';
import ScrollTop from '../windowScrollTop';

class InfoPageApple extends Component {
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
        let { product, url } = this.props;
        ScrollTop();
        if (url === '/laptops') {
            this.props.history.push(url + '/Apple' + '/MacBook 13.3' + '/' + this.props.product.id);
        } else {
            this.props.history.push(url + '/' + this.props.product.id);
        }
        return (
            <div className="image_and_boxPrice_All_bosex">

                <div className="image_and_info">
                    < ImageAndBuyBox product={product} />
                    <h3 className="product_name">{product.itemOfModel_name}</h3>
                    <div className="info">

                    </div>
                    <div className="detailed_overview_apple">
                        <h3 className="specifications"><span>Lightness Strikes Again</span></h3>
                        <span>
                            The most loved Mac is about to make you fall in love all over again. Available in silver, space grey and gold, the new thinner and lighter MacBook Air features a brilliant Retina display with True Tone technology, Touch ID, the latest-generation keyboard and a Force Touch trackpad. The iconic wedge is created from 100 per cent recycled aluminium, making it the greenest Mac ever. And with all-day battery life, MacBook Air is your perfectly portable, do-it-all notebook.
                        </span>
                        <h3 className="specifications"><span>Four Million Pixels</span></h3>
                        <span>
                            With a resolution of 2560x1600 for over 4 million pixels, the results are positively jaw-dropping. Images take on a new level of detail and realism. Text is sharp and clear. And True Tone technology automatically adjusts the white point of the display to match the colour temperature of your environment — making web pages and email look as natural as the printed page. With 48 per cent more colours than the previous generation, everything you see is rich and vibrant. The display glass goes right to the edge of the enclosure, making the borders 50 per cent thinner than before. So you can focus on what’s on your screen. And you’re going to love what you see.
                        </span>
                        <h3 className="specifications"><span>Fingerprint is Your Password</span></h3>
                        <span>
                            The advanced security and convenience of Touch ID are now built directly into MacBook Air. Simply place your finger on the Touch ID sensor and — just like that — your Mac unlocks. Use your fingerprint to immediately access locked documents, notes and system settings, without entering yet another password. Online shopping is even easier — select Apple Pay at checkout, and with just one touch you’re done. No need to enter shipping or billing info, and your card details are never shared. With Touch ID, your private information stays private.
                        </span>
                        <h3 className="specifications"><span>Apple T2 Security Chip</span></h3>
                        <span>
                            MacBook Air features the Apple T2 Security Chip — second-generation custom Mac silicon designed by Apple to make MacBook Air even more secure. So when you use Touch ID to unlock your Mac, authenticate a document or pay a merchant online, your information stays safe. With on-the-fly data encryption, all your data stored on the SSD is automatically and fully encrypted. And thanks to the T2 Security Chip, a familiar voice comes to MacBook Air — Hey Siri is always ready to open apps, find documents, play music and answer your questions.
                        </span>
                        <h3 className="specifications"><span>A Real Hands-On Experience</span></h3>
                        <span>
                            The latest-generation MacBook Air keyboard features our butterfly mechanism — providing four times more key stability than a traditional scissor mechanism, along with greater comfort and responsive­ness. And individual LED-backlit keys with an ambient light sensor help you type in low-light environments.
                        </span>
                        <h3 className="specifications"><span>Force Touch Trackpad</span></h3>
                        <span>
                            The Force Touch trackpad lets you interact with your Mac in a variety of ways based on subtle differences in pressure. You have precise control and a uniform response — no matter where you click the trackpad — as well as plenty of room for Multi-Touch gestures like pinch and zoom. Your fingers will feel right at home.
                        </span>
                        <h3 className="specifications"><span>Your All-Purpose Notebook</span></h3>
                        <span>
                            Even though it weighs just 1.25 kilos, the new MacBook Air packs quite a punch. An eighth-generation Intel Core i5 processor helps you power through daily activities, from reading email and browsing the web to creating Keynote presentations and editing in iMovie. Up to 16GB of memory lets you work seamlessly even with multiple apps open, while up to 1TB of SSD storage lets you launch apps in a flash and provides plenty of room for all your documents, photos and videos.
                        </span>
                        <h3 className="specifications"><span>Battery Life</span></h3>
                        <span>
                            With up to 12 hours of battery life, MacBook Air is your day-in, day-out dynamo. Check email, browse the web, shop online, write documents, watch videos, manage spreadsheets and more, all without plugging in. Taking a transatlantic flight? Line up the films, because MacBook Air is ready to play for up to 13 hours — non-stop.
                        </span>
                        <h3 className="specifications"><span>One for All, All in One</span></h3>
                        <span>
                            Thunderbolt 3 combines ultra-high bandwidth with the ultra-versatility of the USB-C industry standard to create one revved-up universal port — and MacBook Air has two of them. Thunderbolt 3 integrates data transfer, charging and video output in a single connector, delivering up to 40Gb/s of throughput for twice the bandwidth of Thunderbolt 2. Existing devices are easily connected with a cable or adapter. And Thunderbolt 3 is reversible, so no matter how you plug it in, it’s always the right way up.
                        </span>
                        <h3 className="specifications"><span>Sound That Speaks Volumes</span></h3>
                        <span>
                            With the latest in processing and tuning techniques, MacBook Air sounds better than ever. Stereo speakers deliver twice the bass and 25 per cent more volume than the previous generation. And wider stereo sound creates immersive audio when you’re listening to music or watching a film. The FaceTime camera lets one — or many — of your friends and family members see you in high definition. And three microphones form an array that more accurately captures your voice for FaceTime calls, dictation and talking to Siri.
                        </span>
                        <h3 className="specifications"><span>Made with 100% Aluminium</span></h3>
                        <span>
                            Introducing an aluminium alloy created by Apple that delivers the same strength, durability and flawless finish — without mining any new aluminium from the earth. It’s designed to use shavings of recaptured aluminium that are re-engineered down to the atomic level. The result is an enclosure as incredibly beautiful and strong as any we have made, and the greenest Mac ever created.
                        </span>
                        <h3 className="specifications"><span>Simply Powerful</span></h3>
                        <span>
                            macOS is the operating system that powers everything you do on a Mac. It lets you do things you simply can’t do with other computers. That’s because it’s designed specifically for the hardware it runs on — and vice versa. And macOS Mojave brings new features inspired by its most powerful users but designed for everyone.
                        </span>
                        <h3 className="specifications"><span>Mac + iPhone</span></h3>
                        <span>
                            Your Mac works with your iPhone in ways no other computer can. Messages: Send and receive text messages on your Mac. All the messages that appear on your iPhone appear on your Mac too, so all your conversations are always up to date. Handoff: Start a document, email, text, note and more on your Mac and finish it on your iPhone — or vice versa.
                        </span>
                        <h3 className="specifications"><span>Features</span></h3>
                        <div className="features_apple">
                            <span>
                                • 1.6GHz dual-core 8th-generation Intel Core i5 processor, Turbo Boost up to 3.6GHz.
                            </span>
                            <span>
                                • 2560x1600 Retina display with IPS technology and True Tone.
                            </span>
                            <span>
                                • Intel UHD Graphics 617.
                            </span>
                            <span>
                                • 8GB 2133MHz LPDDR3 memory.
                            </span>
                            <span>
                                • 256GB SSD storage.
                            </span>
                            <span>
                                • Two Thunderbolt 3 ports.
                            </span>
                            <span>
                                • Backlit Keyboard - British.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default withRouter(InfoPageApple);
