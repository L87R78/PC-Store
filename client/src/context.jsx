import React, { Component, Fragment } from 'react';
import Data from './data/dataGames';
import styled from 'styled-components';

const ContainerNotifications = styled.div`
    background-color: rgb(85, 169, 82);
    color: white;
    padding: 5px;
    border-radius: 2px;
    font-family: "Monda", sans-serif;
    position: absolute;
    position: fixed;
    top: ${props => props.notificationsAddToCart}px;
    right: 45px;
    z-index: 9999;
    transition: top 0.5s ease;
    > i {
        margin-left: 8px;
        color: #464343;
    }
`;

const ProductContext = React.createContext();
class ProductProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: Data.properties,
            cart: [],
            countHeaderCart: 0,
            orderTotal: 0,
            notificationsAddToCart: -200,
            searchBoxHome: {}
        }
    }

    addToCart = (currentProduct) => {
        let tempCountHeaderCart = this.state.countHeaderCart;
        tempCountHeaderCart++;
        let { cart } = this.state;
        let tempCartList = cart;

        if (cart.length === 0) {
            tempCartList.push(currentProduct)
        }

        let isCheckDuplicateGame = false;
        cart.forEach(itemGame => {
            Object.values(currentProduct).forEach(curr => {
                if (itemGame.id === curr) {
                    itemGame.countOrder += 1;
                    isCheckDuplicateGame = true;
                    return;
                }
            })
        })

        if (isCheckDuplicateGame === false) {
            currentProduct.countOrder += 1;

            tempCartList.push(currentProduct)
            this.setState({
                cart: tempCartList,
            })
        }
        this.setState({
            countHeaderCart: tempCountHeaderCart,
            notificationsAddToCart: 200,

        }, () => {
            setTimeout(() => {
                this.setState({
                    notificationsAddToCart: -200
                })
            }, 1000)
        });
    }
    removeAndAddProduct = (clickRemoveProduct, clickedBtn) => {
        let tempCountHeaderCart = this.state.countHeaderCart;
        let tempCartList = this.state.cart
        if (clickedBtn === 'subtract') {
            tempCartList.map(itemGame => {
                Object.values(clickRemoveProduct).forEach(currGame => {
                    if (itemGame.id === currGame) {

                        if (itemGame.countOrder > 0) {
                            itemGame.countOrder -= 1;
                            tempCountHeaderCart -= 1;
                            return;
                        }
                    }
                })
            })
        } else if (clickedBtn === 'increment') {
            tempCartList.map(itemGame => {
                Object.values(clickRemoveProduct).forEach(currGame => {
                    if (itemGame.id === currGame) {
                        itemGame.countOrder += 1;
                        tempCountHeaderCart += 1;
                        return;
                    }
                })
            })
        } else {
            tempCartList.map(itemGame => {
                Object.values(clickRemoveProduct).forEach(currGame => {
                    if (itemGame.id === currGame) {
                        tempCartList = tempCartList.filter(function (obj) {
                            tempCountHeaderCart -= itemGame.countOrder
                            itemGame.countOrder = 0;
                            return obj.index !== itemGame.index;
                        });
                    }
                })
            })
        }
        this.setState({
            countHeaderCart: tempCountHeaderCart,
            cart: tempCartList,
        })
    }

    render() {
        return (
            <Fragment>
                <ContainerNotifications notificationsAddToCart={this.state.notificationsAddToCart}>Add to cart<i className="fas fa-shopping-cart"></i> </ContainerNotifications>
                < ProductContext.Provider value={{
                    products: this.state.products,
                    addToCart: this.addToCart,
                    removeAndAddProduct: this.removeAndAddProduct,
                    cart: this.state.cart,
                    orderTotal: this.state.orderTotal,
                    countHeaderCart: this.state.countHeaderCart,
                    searchBoxHome: this.state.searchBoxHome
                }}>
                    {this.props.children}
                </ ProductContext.Provider>
            </Fragment>

        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };

