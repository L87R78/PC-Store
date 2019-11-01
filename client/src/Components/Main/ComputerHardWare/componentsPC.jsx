import React, { Component, Fragment } from 'react';

import { withRouter } from "react-router";
import NavComponentsAndDropDown from './navComponentsAndDropDown/navComponentsAndDropDown';
import ListComponentsAndInfo from './listComponentsAndInfo/listComponentsAndInfo';

class NavComponentsPC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentClickProducts: [],
            currentClickChildInfo: {},
            handlerCheckClickItemOnCurComponent: true,
        }
    }
    handleCurrentComponents = (data, itemsOfParrent) => {
        if (itemsOfParrent.name === 'Apple' || itemsOfParrent.name === 'Lenovo') {
            this.props.history.location.pathname = '/laptops';
        } else {
            this.props.history.location.pathname = '/computerHardWare';
        }

        let currUrl = this.props.history.location.pathname;
        this.props.history.push(currUrl + '/' + itemsOfParrent.name + '/' + data.model_name);

        let arr = [];
        arr.push(data);
        this.setState({
            currentClickProducts: arr,
            handlerCheckClickItemOnCurComponent: false,
        })
    }

    handleCurrentClickChild = (currentClickChild) => {
        this.setState({
            currentClickChildInfo: currentClickChild,
        })
    }
    componentDidUpdate() {
        if (this.state.handlerCheckClickItemOnCurComponent === false) {
            this.setState({
                handlerCheckClickItemOnCurComponent: true
            })
        }
    }
    render() {
        let { currentClickProducts, currentClickChildInfo } = this.state;
       
        return (
            <Fragment>
                < NavComponentsAndDropDown
                    handlerCheckClickItemOnCurComponent={this.state.handlerCheckClickItemOnCurComponent}
                    data={this.props.data}
                    handleCurrentComponents={this.handleCurrentComponents}
                    url={this.props.history.location.pathname}
                />
                < ListComponentsAndInfo
                    data={this.props.data}
                    currentClickProducts={currentClickProducts}
                    handleCurrentClickChild={this.handleCurrentClickChild}
                    currentClickChildInfo={currentClickChildInfo}
                    handlerCheckClickItemOnCurComponent={this.state.handlerCheckClickItemOnCurComponent}
                    url={this.props.history.location.pathname}
                />
            </Fragment>
        )
    }
}

export default withRouter(NavComponentsPC);
