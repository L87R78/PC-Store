import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router";
import { ProductConsumer } from '../../../context';
import ShowCartProducts from './showCartProducts';
import { Link } from 'react-router-dom';
//import laptops from '../../../images/home_images/laptops.PNG';
//import desktops from '../../../images/home_images/desktops.PNG';
import SearchTextBox from './searchTextBox';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textInput: "",
            showHideSearchBox: -2000,
            openSearchBoxInfo: false,
            width: '',
            phoneSearchBox: 600
        }
        window.addEventListener("resize", this.update);
    }
    componentDidMount() {
        this.update();
    }
    update = () => {
        this.setState({
            width: window.innerWidth
        });
    };

    scrollTop = () => {
        window.scrollTo(0, 0);
    }
    handleClick = (e) => {
        this.setState({
            showHideSearchBox: 50,
        });
    }

    handleChange = (e) => {

        this.setState({
            textInput: e.target.value
        });
    }

    hideSearchBox = () => {
        this.setState({
            showHideSearchBox: -2000,
            textInput: "",
        });
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextState.textInput.length > 0 && nextState.openSearchBoxInfo === false) {
            if (this.state.width > 768) {
                this.setState({
                    showHideSearchBox: 50,
                    openSearchBoxInfo: true,
                    phoneSearchBox: 600,
                })
            } else {
                this.setState({
                    showHideSearchBox: -2000,
                    openSearchBoxInfo: true,
                    phoneSearchBox: 340,
                })
            }

        }
        else if (nextState.textInput.length === 0 && nextState.openSearchBoxInfo === true) {
            this.setState({
                showHideSearchBox: -2000,
                openSearchBoxInfo: false,
                textInput: ''
            })
        }
    }

    render() {
        return (
            <div className="top_search_Account_cart">

                <div className="logo_img">
                    <img src={require('../../../images/logo_PC_store2.PNG')} alt="" />
                </div>

                <div className="search">
                    <input type="text" className="search_text"
                        placeholder='Search keyword'
                        onChange={this.handleChange}
                        value={this.state.textInput}
                    />
                    <button onClick={(e) => this.handleClick(this.state.textInput)} >Search</button>
                </div>


                <div className="account">
                    <div className="icon">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="login_and_create">
                        <h5>MY ACCOUNT <Link to="#"><i className="fas fa-chevron-down"></i></Link></h5>
                        <div className="log_create">
                            <div className="log">
                                <Link to="/login">Login</Link>
                            </div>
                            <span>|</span>
                            <div className="create">
                                <Link to="/register">Create Account</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart_box">
                    <ProductConsumer>
                        {value => < ShowCartProducts
                            count={value.countHeaderCart}
                            cart={value.cart}
                            notificationColorHeaderCart={value.notificationColorHeaderCart}
                        />}
                    </ProductConsumer>
                </div>



                < SearchTextBox
                    showHideSearchBox={this.state.showHideSearchBox}
                    hideSearchBox={this.hideSearchBox}
                    textInput={this.state.textInput}
                    phoneSearchBox={this.state.phoneSearchBox}
                />
            </div>
        )
    }
}
export default withRouter(Home);