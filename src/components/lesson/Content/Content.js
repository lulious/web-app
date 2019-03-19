import React from 'react';
import {connect} from 'dva';
import uuid from 'uuid/v4';
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
  
  reoder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  onDragEnd = (res) => {
    console.log(res);
    const { list,result, bgColor} = this.state;
    const { destination, source } = res;
    if(!destination){
      return ;
    }

    // 一个Droppable里面拖拽排序
    if(source.droppableId === 'result' && destination.droppableId === 'result'){
      const reorderRes =  this.reoder(result, source.index, destination.index);
      console.log(reorderRes)
      this.setState({
        result: reorderRes
      })
    }

    // 两个Droppable之间拖拽
    if(source.droppableId === 'droppable' && destination.droppableId === 'result'){
      const item = list[source.index];
      result.splice(destination.index, 0 ,{ content: item, id: uuid(), bgColor: bgColor});
      this.setState({
        result: result
      });
    }
    
  };
  
  render(){
    console.log(this.props,this.state);
    const { bgColor, list, result } = this.state;

    return (
      <DragDropContext onDragEnd = {this.onDragEnd}>
        

      <div className={styles.content}>
      <Droppable droppableId="droppable" isDropDisabled={true}>
        {(provided, snapshot) => (
          <div 
            ref={provided.innerRef}
            className={styles.top}
            {...provided.droppableProps}
          >
           {list.map((item, index) => (
            <Draggable key={index} draggableId={`droppable-${index}`} index={index}  >
              {(provided, snapshot) => (
                <React.Fragment>
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div className={styles['icon-container']} style={{backgroundColor: bgColor}} >
                      {item}
                    </div>
                  </div>
                  {snapshot.isDragging && (
                    <div className={styles['icon-container']} style={{backgroundColor: bgColor}} >
                      {item}
                    </div>
                  )}
                </React.Fragment>
              )}
            </Draggable>
           ))}
           {provided.placeholder}
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
            <Draggable key={item.id} draggableId={item.id} index={index}  >
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
            {provided.placeholder}
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