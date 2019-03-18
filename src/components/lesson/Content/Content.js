import React from 'react';
import {connect} from 'dva';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styles from './Content.less';
import { getColorByType }  from 'utils/util';
import { getList } from 'services/query';
import PlayIcon from 'img/play-icon.png';



class Content extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: [],
      result: [],
      bgColor: ''
    }
  }
  componentDidMount = () => {
    const activeItem = this.props.activeItem;
    const bgColor = getColorByType(activeItem);
    getList().then(res=>{
      this.props.setList({list: res.data});
      const list = res.data[activeItem];
      this.setState({
        bgColor: bgColor,
        list: list
      });
    })
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
  onDragEnd = (res) => {
    console.log(res);
    const { destination, source } = res;
    if(!destination){
      return ;
    }
    if(destination.droppableId === 'result' && source.droppableId === 'droppable'){
      const { result, list, bgColor} = this.state;
      result.push({
        content: list[source.index],
        bgColor: bgColor
      });
      this.setState({
        result: result
      })
    }
  };
  
  render(){
    console.log(this.props,this.state);
    const { bgColor, list, result } = this.state;
    const style = {
      backgroundColor: bgColor
    };
    return (
      <DragDropContext onDragEnd = {this.onDragEnd}>
        
  
      <div className={styles.content}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div 
            ref={provided.innerRef}
            className={styles.top}
            {...provided.droppableProps}
          >
           {list.map((item, index) => (
            <Draggable key={item} draggableId={`droppable-${index}`} index={index}  >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <div className={styles['icon-container']} style={style} >
                    {item}
                  </div>
                </div>
              )}
            </Draggable>
           ))}
  
          </div>
        )} 
      </Droppable>
      
      <Droppable droppableId="result">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={styles.bottom}
            {...provided.droppableProps}
          >
           {result.map((item, index) => (
            <Draggable key={item.content} draggableId={`result-${index}`} index={index}  >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <div className={`${styles['icon-container']} ${styles.result}`} style={{backgroundColor: item.bgColor}} >
                    {item.content}
                  </div>
                </div>
              )}
            </Draggable>
           ))}

            <div className={styles.play}>
              <img className={styles['play-icon']} src={PlayIcon} alt="" />
            </div>
          </div>
        )}
        
      </Droppable>
      </div>
      </DragDropContext>
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
  })(Content)