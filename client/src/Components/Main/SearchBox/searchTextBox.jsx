import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DataLaptops from '../../../data/dataLaptops';
import DataGames from '../../../data/dataGames';
import DataPCHardware from '../../../data/dataComponentsPC';
import ShowSearchBox from './showSearchBox';


const ContainerInfoSearchBox = styled.div`
    top: ${props => props.searchTextBox}%;
    position: fixed;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.phoneSearchBox}px;
    height: 450px;
    z-index: 9999;
    border-radius: 3px;
    background: white;
`;

class SearchTextBox extends Component {
    render() {
        let { showHideSearchBox, hideSearchBox, textInput, phoneSearchBox } = this.props;
        let brand = [];
        let products = [];
        let countProducts = 0;
        DataLaptops.boxes.map(el => {
            products = [];
            el.items.map(item => {
                let name = item.items_name.toLowerCase();
                let dataName = name.indexOf(textInput.toLowerCase())
                if (dataName >= 0 && textInput !== '') {
                    let obj = {};
                    obj.brand = item.items_name;
                    obj.items = [];
                    item.models.map(ite => {
                        obj.items.push(ite);
                        countProducts++;
                    })
                    return products.push(obj)
                }
            })
            brand.push(products);
        })

        DataPCHardware.boxes.map(el => {
            products = [];
            el.items.map(item => {
                let name = item.items_name.toLowerCase();
                let dataName = name.indexOf(textInput.toLowerCase())
                if (dataName >= 0 && textInput !== '') {
                    let obj = {};
                    obj.brand = item.items_name;
                    obj.items = [];
                    item.models.map(ite => {
                        obj.items.push(ite);
                        countProducts++;
                    })
                    return products.push(obj);
                }
            })
            brand.push(products);
        })
        let arrGames = [];
        DataGames.properties.map(el => {
            let name = el.itemOfModel_name.toLowerCase();
            let dataName = name.indexOf(textInput.toLowerCase())
            if (dataName >= 0 && textInput !== '') {
                countProducts++;
                let obj = {};
                obj.brand = el.itemOfModel_name;
                obj.Game = el;
                return arrGames.push(obj);
            }
        })
        brand.push(arrGames);
        let result = brand.filter(e => e.length);
        
        return (
            <ContainerInfoSearchBox className="show_search_info_box" searchTextBox={showHideSearchBox}
                phoneSearchBox={phoneSearchBox}>
                <div className="resultItems_and_btnClose">
                    <h4>SEARCH RESULTS (<span>{countProducts}</span>)</h4>
                    <Link to="#" className="btnSlideHide" onClick={(e) => hideSearchBox('-2000')}>x</Link>
                </div>
                {
                    textInput !== '' && result.length > 0
                        ? < ShowSearchBox result={result} hideSearchBox={hideSearchBox} />
                        : <div className="brand_empty">
                            <span ><i className="fas fa-exclamation-circle"></i> No results were found for your search query <span className="empty_result">{textInput}</span> , please try again. </span>
                        </div>
                }
            </ContainerInfoSearchBox>
        )
    }
}
export default SearchTextBox;
