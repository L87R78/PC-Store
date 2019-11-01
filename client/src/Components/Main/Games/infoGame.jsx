import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom';

import Data from '../../../data/dataGames';
import FixedFormatPrice from '../../fixedFormatPrice';
import NotFoundPage from '../NotFoundPage/notFoundPage';

import { ProductConsumer } from '../../../context';

class InfoGame extends Component {

    // scrollTop = () => {
    //     window.scrollTo(0, 0);
    // }
    render() {
        let currentGame = {};
        Data.properties.forEach(key => {
            if (key.id === this.props.match.params.id) {
                return currentGame = key
            }
        })

        //window.scrollTo(0, 0);
        return (
            <Fragment>
                {
                    currentGame.id !== undefined
                        ? <div className="box_infoGame" >
                            <br />
                            <div className="imageGame" >
                                <div className="game_img">
                                    <img src={currentGame.picture} alt="" />
                                </div>
                            </div>
                            <div className="box" >

                                <div className="infoGame">
                                    <span>{currentGame.itemOfModel_name}</span>
                                    <hr />
                                    <div className="infoGame_cart">
                                        <span>{currentGame.descriptions}</span>
                                    </div>
                                    <div className="price_and_btn">
                                        <h3>${FixedFormatPrice.formatCurrency(currentGame.price)}</h3>
                                        <ProductConsumer>
                                            {value => {
                                                return (<Link className="btn_buy" to='#' onClick={() => value.addToCart(currentGame)}>Buy now</Link>)
                                            }}
                                        </ProductConsumer>
                                    </div>
                                </div>
                            </div>
                            <div className="box_btn_back">
                                <Link to="/games" className="btn_back" onClick={this.scrollTop} ><span>Back to Products</span></Link>
                            </div>
                        </div>
                        : < NotFoundPage />
                }
            </Fragment>
        )
    }
}
export default InfoGame;

