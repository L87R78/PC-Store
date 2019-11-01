import React, { Component } from 'react';
import DropDownMenu from './dropDownMenu';
import { Link } from 'react-router-dom';

class NavMenuComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showClickSection: false,
            currentClickItem: {},
            counterForClikedOnItem: 0,
        }
    }

    clickedSection = (e, data) => {
        let { counterForClikedOnItem, currentClickItem } = this.state;
        let tempObj = {};
        tempObj = data

        if (data.name === currentClickItem.name) {
            if (counterForClikedOnItem % 2 === 0) {
                this.setState({
                    showClickSection: false,
                    counterForClikedOnItem: counterForClikedOnItem += 1,
                })
            } else {
                this.setState({
                    showClickSection: true,
                    counterForClikedOnItem: counterForClikedOnItem += 1,
                })
            }
        } else if (data.name !== currentClickItem.name) {
            this.setState({
                showClickSection: true,
                counterForClikedOnItem: 0,
                currentClickItem: tempObj,
            })
        }
    }

    componentWillUpdate(prevProps) {
        if (prevProps.handlerCheckClickItemOnCurComponent === false) {
            this.setState({
                showClickSection: false,
                counterForClikedOnItem: 1,
            })
        }
    }

    render() {
        let { data, handleCurrentComponents, url } = this.props;
        return (
            <div className="big_box_components">
               
                {
                    Object.values(data).map(navProductsParrent => {
                        
                        return (
                            navProductsParrent.map((itemsOfParrent, key) => {
                                return (
                                   
                                    <div className="navProductsParrent" key={key}>
                                        <div className="link_menu" key={key}>
                                            <Link to='#' onClick={(e) =>
                                                this.clickedSection(e, itemsOfParrent)
                                            }>{itemsOfParrent.name}</Link>
                                        </div >
                                       
                                        
                                        {
                                            itemsOfParrent.name === this.state.currentClickItem.name
                                                && this.state.showClickSection === true
                                                ? itemsOfParrent.items.map((item, key) => {
                                                    return (
                                                        < DropDownMenu
                                                            key={key}
                                                            item={item}
                                                            handleCurrentComponents={handleCurrentComponents}
                                                            itemsOfParrent={itemsOfParrent}
                                                        />
                                                    )
                                                })
                                                : null
                                        }
                                    </div>
                                )
                            })
                        )
                    })
                }
            </div>
        )
    }
}
export default NavMenuComponents;






















