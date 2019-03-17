import React from 'react';
import {connect} from 'dva';
import LessonView from './LessonView'
import { getList } from 'services/query';

class LessonPage extends React.Component{
  
  componentDidMount = () => {
    getList().then(res=>{
      this.props.setList({list: res.data})
    })
  }
  
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
      setList: (payload) => {
        return dispatch({
          type: 'lesson/set',
          payload
        });
      }
    }
  })(LessonPage)