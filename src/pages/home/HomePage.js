import React from 'react';
import {connect} from 'dva';
import { routerRedux } from 'dva/router';
import HomeView from './HomeView'

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showLogin: false,
      showRegister: false
    }
  }

  setShowLogin = (type) => {
    this.setState({
      showLogin: type
    })
  }

  setShowRegister = type => {
    this.setState({
      showRegister: type
    })
  }


  render(){
    return (
      <HomeView 
        {...this.state}
        setShowLogin={this.setShowLogin} 
        setShowRegister={this.setShowRegister}
      />
    )
  }
}
export default connect(
  ({lesson})=>{
   return {...lesson}
  },
  (dispatch)=>{
    return {
      goTo(path){
        dispatch(routerRedux.push(path));
      }
    }
  })(HomePage)