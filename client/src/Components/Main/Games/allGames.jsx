import React from 'react';
import { Link } from 'react-router-dom';

import FixedFormatPrice from '../../fixedFormatPrice';
import { ProductConsumer } from '../../../context';

class allBoxes extends React.Component {
  
    render() {
        let { productsGame, startIndexGame, url } = this.props
        let countStart = startIndexGame;
        let countStop = startIndexGame + 20;

        let tempCountShowGamesMap = 0;
        return (

            <div className="all_boxes">
                {
                    productsGame.map((game, key) => {
                        tempCountShowGamesMap++;
                        if (tempCountShowGamesMap >= startIndexGame) {
                            countStart++;
                            if (countStart < countStop) {
                                
                                return (
                                    <div className="box" key={key} >
                                        <div className="imageGame" >
                                            <Link to={url + '/' + game.id}> <img src={game.picture} alt=""/></Link>
                                        </div>
                                        <span>{game.name}</span>
                                        <h3>${FixedFormatPrice.formatCurrency(game.price)}</h3>
                                        <ProductConsumer>
                                            {value => {
                                                return (
                                                    <div className="buttons" >
                                                        <Link to='#' onClick={() => value.addToCart(game)} >Buy now</Link>
                                                    </div>
                                                )
                                            }}
                                        </ProductConsumer>
                                    </div>
                                )
                            }
                        }
                    })
                }
            </div>
        )
    }
}
export default allBoxes;