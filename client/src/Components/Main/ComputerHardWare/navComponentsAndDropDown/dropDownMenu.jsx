import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class BigDropDown extends Component {

    state = {
        showClickItemsOfSection: false,
    }

    clickedItemsOfSection = () => {
        this.setState({
            showClickItemsOfSection: true,
        })

        if (this.state.showClickItemsOfSection) {
            this.setState({
                showClickItemsOfSection: false
            })
        }
    }

    render() {
        let { key, item, handleCurrentComponents, itemsOfParrent } = this.props;
      
        let direction = '';
        if (this.state.showClickItemsOfSection === true) {
            direction = <i className="fas fa-arrow-up"></i>
        } else {
            direction = <i className="fas fa-arrow-down"></i>
        }
        return (
            <div className="drop_down_menu_items" key={key}>
                <li>
                    <NavLink to="#" onClick={this.clickedItemsOfSection}>{item.items_name}
                        {direction}
                        {
                            this.state.showClickItemsOfSection === true
                                ? <div className="drop_down_menu_items_item">
                                    {
                                        item.models.map((model, key) => {
                                            return (
                                                 <Link to='#'
                                                    key={key}
                                                    onClick={() => handleCurrentComponents(model, itemsOfParrent)}
                                                >
                                                    {model.model_name}
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                                : null
                        }
                    </NavLink>
                </li>
            </div>
        )
    }
}
export default BigDropDown;