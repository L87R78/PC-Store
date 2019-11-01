import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import ScrollTop from './windowScrollTop';

import ListChilds from './listChildsAndInfo/listChilds';
import Filter from './filter';
import InfoPageMotherboards from './infoPagesPChardware/infoPageMotherboards';
import InfoPageMemory from './infoPagesPChardware/infoPageMemory';
import InfoPageCPU from './infoPagesPChardware/infoPageCPU';
import InfoPageCases from './infoPagesPChardware/infoPageCases';
import InfoPageGPU from './infoPagesPChardware/infoPageGPU';
import InfoPageLenovo from './infoPagesLaptops/infoPageLenovo';
import InfoPageApple from './infoPagesLaptops/infoPageApple';



class ShowListComponentsAndInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            sort: '',
            showReadMore: 'hide',
            clickBtnReadMore: 0,
            clickStop: true,
            afterCurrClickHideShowAllProducts: 'show',
            currentInfoChildAfterClickImg: {},
            showCurrentUrlProducts: false
        }
        
    }

    showTextReadMore = () => {
        let click = this.state.clickBtnReadMore;
        click++;
        if (click % 2 === 0) {
            this.setState({
                showReadMore: 'hide',
                clickBtnReadMore: click
            })
        } else {
            this.setState({
                showReadMore: 'show',
                clickBtnReadMore: click
            })
        }
    }
    afterCurrClickHideShowAllProducts = (product) => {
        this.setState({
            afterCurrClickHideShowAllProducts: 'hide',
            currentInfoChildAfterClickImg: product
        })
    }
    closeCurrClickHideShowAllProducts = () => {
        this.setState({
            afterCurrClickHideShowAllProducts: 'show',
        })
        let getUrlWithoutID = this.props.history.location.pathname;
        getUrlWithoutID = getUrlWithoutID.substr(0, getUrlWithoutID.lastIndexOf("/"));

        this.props.history.push(getUrlWithoutID);
    }

    handlefilteredProducts = (e) => {
        this.setState({
            sort: e.target.value
        });
        this.setState(state => {
            if (state.sort !== '') {
                state.products[0].itemOfModel.sort((a, b) => {
                    if (state.sort === 'lowest') {
                        return (a.price > b.price ? 1 : -1)
                    } else if (state.sort === 'highest') {
                        return (a.price < b.price ? 1 : -1)
                    } else if (state.sort === 'AlphabeticalAZ') {
                        return (a.itemOfModel_name.localeCompare(b.itemOfModel_name));
                    } else {
                        return (b.itemOfModel_name.localeCompare(a.itemOfModel_name));
                    }
                })
            }
        })
    }

    shouldComponentUpdate(prevState) {
        if (this.state.showCurrentUrlProducts === true) {
            this.setState({
                showCurrentUrlProducts: false
            })
        }

        if (prevState.currentClickProducts.length > 0 && this.state.clickStop === true
            || prevState.handlerCheckClickItemOnCurComponent === false) {
            this.setState({
                products: prevState.currentClickProducts,
                showReadMore: 'hide',
                clickBtnReadMore: 0,
                afterCurrClickHideShowAllProducts: 'show',
                clickStop: false
            })
            return true
        } else if (prevState.currentClickProducts.length === 0) {
            return true
        }
        return true
    }
   
    
    render() {
        ScrollTop();
        let { handleCurrentClickChild, data, url } = this.props;
        let currentInfoChildAfterClickImg = this.state.currentInfoChildAfterClickImg;

        if (this.state.products.length === 0 || this.state.products === undefined) {
            let arr = [];
            arr.push(data.boxes[0].items[0].models[0])
            this.setState({
                products: arr,
            })
        }
        let getUrl = url;
        getUrl = getUrl.split("/");
        let resultUrl = getUrl[getUrl.length - 1];


        if (resultUrl === 'computerHardWare'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[0].items[0].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });

            
        } else if (resultUrl === 'laptops'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[0].items[0].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        else if (resultUrl === '3XS Professionally'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[0].items[0].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        } else if (resultUrl === 'AMD X399 Socket-TR4'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[0].items[0].models[1])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        } else if (resultUrl === 'Gigabyte X499-WU8'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[0].items[1].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        } else if (resultUrl === 'Intel X299-Socket'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[0].items[2].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        //end motherboard

        //memory ram
        else if (resultUrl === 'DDR4 Dual-2133MHz'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[1].items[0].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        else if (resultUrl === 'DDR4 Channel-3600MHz'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[1].items[0].models[1])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        //end memory ram

        //CPU
        else if (resultUrl === 'Core X-series'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[2].items[0].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        else if (resultUrl === 'Core i7 Socket-1151'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[2].items[0].models[1])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        // end CPU

        //Cases
        else if (resultUrl === 'Cases without Window'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[3].items[0].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        else if (resultUrl === 'Windowed Mid Tower'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[3].items[1].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        // end Cases

        // GPU
        else if (resultUrl === 'GeForce RTX'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[4].items[0].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        else if (resultUrl === 'VR Headsets'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[4].items[1].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        // end GPU
        //lenovo

        else if (resultUrl === 'ThinkPad T-series'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[0].items[0].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        else if (resultUrl === 'ThinkPad X-series'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[0].items[0].models[1])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        else if (resultUrl === 'ThinkPad Yoga-series'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[0].items[0].models[2])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        else if (resultUrl === 'ThinkPad E-series'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[0].items[0].models[3])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        else if (resultUrl === 'IdeaPad 330s'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[0].items[1].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        else if (resultUrl === 'IdeaPad 520'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[0].items[1].models[1])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        else if (resultUrl === 'Lenovo Yoga 530'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[0].items[2].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        else if (resultUrl === 'Legion Y-series'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[0].items[3].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        //end lenovo

        //Apple

        else if (resultUrl === 'MacBook 13.3'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[1].items[0].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        } else if (resultUrl === 'MacBook Pro 13'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[1].items[1].models[0])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        } else if (resultUrl === 'MacBook Pro 15'
            && this.state.showCurrentUrlProducts === false) {
            let arr = [];
            arr.push(data.boxes[1].items[1].models[1])
            this.setState({
                products: arr,
                showCurrentUrlProducts: true,
                afterCurrClickHideShowAllProducts: 'show',
            });
        }
        //end Apple


        return (

            this.state.products.map((el, key) => {
                let tempCurrProduct = '';

                switch (el.type) {
                    case 'Motherboards': tempCurrProduct = < InfoPageMotherboards product={currentInfoChildAfterClickImg} url={url} />
                        break;
                    case 'Memory - RAM': tempCurrProduct = < InfoPageMemory product={currentInfoChildAfterClickImg} url={url} />
                        break
                    case 'CPU': tempCurrProduct = < InfoPageCPU product={currentInfoChildAfterClickImg} url={url} />
                        break;
                    case 'Cases': tempCurrProduct = < InfoPageCases product={currentInfoChildAfterClickImg} url={url} />
                        break;
                    case 'GPU': tempCurrProduct = < InfoPageGPU product={currentInfoChildAfterClickImg} url={url} />
                        break;

                    case 'Lenovo ThinkPad': tempCurrProduct = < InfoPageLenovo product={currentInfoChildAfterClickImg} url={url} />
                        break;
                    case 'Lenovo IdeaPad': tempCurrProduct = < InfoPageLenovo product={currentInfoChildAfterClickImg} url={url} />
                        break;
                    case 'Lenovo Yoga': tempCurrProduct = < InfoPageLenovo product={currentInfoChildAfterClickImg} url={url} />
                        break;
                    case 'Lenovo Legion': tempCurrProduct = < InfoPageLenovo product={currentInfoChildAfterClickImg} url={url} />
                        break;
                    case 'MacBook Air': tempCurrProduct = < InfoPageApple product={currentInfoChildAfterClickImg} url={url} />
                        break;

                    case 'MacBook Pro': tempCurrProduct = < InfoPageApple product={currentInfoChildAfterClickImg} url={url} />
                        break;
                    default:
                        break;
                }
                return (
                    <Fragment>
                        <div className="current_component_clicked_on_parrent" key={key}>
                            <div className="current_componentTop">
                                <div className="name_and_btnReadMore">
                                    <span>{el.type}</span>
                                    <Link to="#" className="read_more_button" onClick={this.showTextReadMore}>read more
                                        {this.state.showReadMore === 'show'
                                            ? <i className="fas fa-chevron-up"></i>
                                            : <i className="fas fa-chevron-down"></i>
                                        }
                                    </Link>
                                </div>
                                {
                                    this.state.afterCurrClickHideShowAllProducts === 'show'
                                        ? < Filter handlefilteredProducts={this.handlefilteredProducts} />
                                        : <button onClick={() => this.closeCurrClickHideShowAllProducts('show')}>Back to products</button>
                                }

                            </div>
                            {
                                this.state.showReadMore === 'show'
                                    ? <div className="show_readMore_info">
                                        {el.description}
                                        <p>If you don't see the exact specification you want and would like us to custom build an overclocked bundle for you please click <Link to="#">HERE.</Link></p>
                                    </div>
                                    : null
                            }

                            <h4>{el.model_name}</h4>

                            <div className="current_component_childs" key={key}>
                                <div className={"allChilds " + this.state.afterCurrClickHideShowAllProducts}>
                                    {el.itemOfModel.map((item, key) => {
                                        return (
                                            < ListChilds
                                                key={key}
                                                item={item}
                                                handleCurrentClickChild={handleCurrentClickChild}
                                                afterCurrClickHideShowAllProducts={this.afterCurrClickHideShowAllProducts}
                                            />
                                        )
                                    })}
                                </div>
                                {
                                    this.state.afterCurrClickHideShowAllProducts === 'hide'
                                        ? tempCurrProduct
                                        : null
                                }
                            </div>
                        </div>
                    </Fragment>
                )
            })
        )
    }
}

export default withRouter(ShowListComponentsAndInfo);

