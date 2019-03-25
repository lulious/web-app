import React from 'react';
import {connect} from 'dva';
import HomeView from './HomeView'

class HomePage extends React.Component{
  
  render(){
    return (
      <HomeView />
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