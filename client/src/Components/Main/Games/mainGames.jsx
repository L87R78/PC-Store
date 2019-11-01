import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AllGames from './allGames';
import Filter from './filter';
import Data from '../../../data/dataGames';

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
};


class MainProducts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productsGame: Data.properties,
            sort: '',
            startIndexGame: 0,
            colorBtnActive: 1,
        }
        this.handlefilteredProducts = this.handlefilteredProducts.bind(this);

    }
    handlefilteredProducts(e) {
        this.setState({
            sort: e.target.value
        });
        this.setState(state => {
            if (state.sort !== '') {
                state.productsGame.sort((a, b) => {
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
    checkPositionBtn = (position) => {
        if (this.state.colorBtnActive !== position) {
            this.setState({ colorBtnActive: position })
        }
    };
    show_1_button = (position) => {
        this.checkPositionBtn(position)
        this.setState({
            startIndexGame: 0,
        })
        //scrollToTop();
    }
    show_2_button = (position) => {
        this.checkPositionBtn(position)
        this.setState({
            startIndexGame: 20,
        })
        //scrollToTop();
    }
    show_3_button = (position) => {
        this.checkPositionBtn(position)
        this.setState({
            startIndexGame: 36,
        })
        //scrollToTop();
    }
    colorClickedBtn = (position) => {
        if (this.state.colorBtnActive === position) {
            return "grey";
        }
        return "";
    };
    render() {
        let { productsGame, currenGameIndex, startIndexGame } = this.state;
        //scrollToTop();
        return (
            <div className="bg_Games">
                < Filter
                    countProductsGame={productsGame}
                    handlefilteredProducts={this.handlefilteredProducts}
                />

                < AllGames
                    productsGame={productsGame}
                    currenGameIndex={currenGameIndex}
                    startIndexGame={startIndexGame}
                    url={this.props.match.url}
                />
                <br />
                <div className="buttons_next_products">
                    <ul>
                        <li><button to="/games" style={{ background: this.colorClickedBtn(1) }} onClick={() => this.show_1_button(1)} >1</button></li>
                        <li><button to="/games" style={{ background: this.colorClickedBtn(2) }} onClick={() => this.show_2_button(2)} >2</button></li>
                        <li><button to="/games" style={{ background: this.colorClickedBtn(3) }} onClick={() => this.show_3_button(3)} >3</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default MainProducts;