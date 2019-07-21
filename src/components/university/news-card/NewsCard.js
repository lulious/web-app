import React from 'react'
import './NewsCard.less'

const prefixCls = 'news-card';
function NewsCard(props) {
  const { coverImg, title, content } = props;
  return (
    <div className={prefixCls}>
      <div className="cover-img"></div>
      {/* <img className="cover-img" src={coverImg} alt="" /> */}
      <span className="title">{title}</span>
      <span className="content">{content}</span>
    </div>
  )
}

export default NewsCard

