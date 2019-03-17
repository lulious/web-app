import React from 'react';
import {connect} from 'dva';
import styles from './Content.less';
import { getColorByType }  from 'utils/util';

class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: [],
      bgColor: ''
    }
  }

  componentDidUpdate = (prevProps,prevState) => {
    const activeItem = this.props.activeItem;
    const list = this.props.list[activeItem];
    if(prevProps.activeItem !== activeItem){
      const bgColor = getColorByType(activeItem);
      this.setState({
        bgColor: bgColor,
        list: list
      });
    }
  }

  
  render(){
    console.log(this.props);
    const { bgColor, list } = this.state;
    const style = {
      backgroundColor: bgColor
    };
    return (
      <div className={styles.content}>
        <div className={styles.top}>
          {list.map(item => {
            return (
              <div className={styles['icon-container']} style={style} key={item}>
               {item}
              </div>
            )
          })}
        </div>
        <div className={styles.bottom}></div>
      </div>
    )
  }
}
export default connect(
  ({lesson})=>{
   return {...lesson}
  },
  (dispatch)=>{
    return {}
  })(Content)