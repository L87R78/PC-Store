import React, { Component, Fragment } from 'react';
// import { Switch, Route } from 'react-router-dom';

// import './App.scss';
// import MainSearchBox from './Components/Main/SearchBox/mainSearchTextBox';

// import Header from './Components/Header/header';
// import SlideDrawer from './Components/SliderMenu/slideDrawer';
// import BackDrop from './Components/SliderMenu/backdrop';
// import Home from './Components/Main/Home/mainHome';
// import Games from './Components/Main/Games/mainGames';
// import InfoGame from './Components/Main/Games/infoGame.jsx';
// import ComputerHardWare from './Components/Main/ComputerHardWare/mainComponents';
// import Laptops from './Components/Main/Laptops/mainLaptops';
// import Audio from './Components/Main/Audio/mainAudio';
// import Software from './Components/Main/Software/mainSoftware';
// import NetWorking from './Components/Main/Networking/mainNetworking';
// import Mobile from './Components/Main/Mobile/mainMobile';
// import Contacts from './Components/Main/Contacts/mainContacts';
// import Cart from './Components/Main/Cart/cart';
// import Login from './Components/Main/Login/mainLogin';
// import Register from './Components/Main/Register/mainRegister';
// import NotFoundPage from './Components/Main/NotFoundPage/notFoundPage';
// import Footer from './Components/Footer/footer';

class App extends Component {
  // state = {
  //   slideDrawerOpen: false
  // }
  // drawerToggleClickHandler = () => {
  //   this.setState((prevState) => {
  //     return {
  //       slideDrawerOpen: !prevState.slideDrawerOpen
  //     }
  //   })
  // }
  // backDropClickHander = () => {
  //   this.setState({
  //     slideDrawerOpen: false
  //   })
  // }
  render() {
    // let backDrop;
    // if (this.state.slideDrawerOpen) {
    //   backDrop = < BackDrop clickCloseSlideMenu={this.backDropClickHander} />;
    // }
    return (
      <div>hello</div>
     
      // <Fragment>
      //   < MainSearchBox />
      //   < Header drawerClickHandler={this.drawerToggleClickHandler} />

      //   <SlideDrawer
      //     show={this.state.slideDrawerOpen}
      //     clickCloseSlideMenu={this.backDropClickHander}
      //   />
      //   {backDrop}
      //   <Switch>
      //     <Route exact path='/' component={Home} />
      //     <Route exact path='/games' component={Games} />
      //     <Route exact path='/games/:id' component={InfoGame} />
      //     <Route exact path='/computerHardWare' component={ComputerHardWare} />
      //     <Route exact path='/computerHardWare/:products' component={ComputerHardWare} />
      //     <Route exact path='/computerHardWare/:products/:series' component={ComputerHardWare} />
      //     <Route exact path='/computerHardWare/:products/:series/:id' component={ComputerHardWare} />
      //     <Route exact path='/laptops' component={Laptops} />
      //     <Route exact path='/laptops/:products' component={Laptops} />
      //     <Route exact path='/laptops/:products/:series' component={Laptops} />
      //     <Route exact path='/laptops/:products/:series/:id' component={Laptops} />
      //     <Route exact path='/audio' component={Audio} />
      //     <Route exact path='/software' component={Software} />
      //     <Route exact path='/networking' component={NetWorking} />
      //     <Route exact path='/mobile' component={Mobile} />
      //     <Route exact path='/contacts' component={Contacts} />
      //     <Route exact path='/cart' component={Cart} />
      //     <Route exact path='/login' component={Login} />
      //     <Route exact path='/register' component={Register} />
      //     <Route exact component={NotFoundPage} />
      //   </Switch>
      //   < Footer />
      // </Fragment>

    );
  }
}
export default App;
