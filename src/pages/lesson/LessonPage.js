import React from 'react';
import {connect} from 'dva';
import LessonView from './LessonView'

class LessonPage extends React.Component{
  
  render(){
    return (
      <LessonView />
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
  })(LessonPage)