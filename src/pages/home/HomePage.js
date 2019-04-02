import React from 'react';
import {connect} from 'dva';
import HomeView from './HomeView'

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showLogin: false
    }
  }

  setShowLogin = (type) => {
    this.setState({
      showLogin: type
    })
  }

  render(){
    return (
      <HomeView 
        {...this.state}
        setShowLogin={this.setShowLogin} 
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
    }
  })(HomePage)