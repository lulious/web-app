import React from "react";
import classNames from "classnames";
import PickIcon from "img/comment-pick.png";
import ReplyIcon from "img/comment-reply.png"; 
import './CommentItem.less';

const prefixCls = 'comment-item-container';
export default class CommentItem extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const { className, name, userIcon, comments, date, pickCount, replyCount} = this.props;
    const cls = classNames({
      [prefixCls]: true,
      [className]: true
    })
    return (
      <div className={cls}>
        <img className="user-icon" src={userIcon} alt="" />
        <div className="container">
          <div className="name">{name}</div>
          <div className="comments">{comments}</div>
          <div className="bottom">
            <div className="date">{date}</div>
            <div className="pick-reply">
              <div className="pick">
                <img className="pick-icon" src={PickIcon} alt="" />
                <span>赞 {pickCount>0 ? (
                  <span>({pickCount})</span>
                ): null}</span>
              </div>
              <div className="reply">
                <img className="reply-icon" src={ReplyIcon} alt="" />
                <span>回复 {replyCount>0?(
                  <span>{replyCount}</span>
                ):null}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}