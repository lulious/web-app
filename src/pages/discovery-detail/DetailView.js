import React from "react";
import { Button, Input, Tabs, Pagination } from "antd";
import "./DetailView.less";
import PickNone from "img/pick-none.png";
import CollectionNone from "img/collection-none.png";
import BuyNone from "img/buy-none.png";
import ShareNone from "img/share-none.png";
import UserIcon from "img/user-icon_01.png";
import User_01 from "img/user_01.png";
import Recommand_01 from "img/recommand_01.png";
import Video_01 from "img/video_01.png";
import Login from "components/home/Login/Login";
import Header from "components/home/Header/Header";
import WorkCard from "components/discovery/WorkCard/WorkCard";
import FixedForm from "components/home/FixedForm/FixedForm";
import Footer from "components/home/Footer/Footer";
import CommentItem from "components/discovery/CommentItem/CommentItem";
import RecommandItem from "components/discovery/RecommandItem/RecommandItem";

const prefixCls = "detail-page-container";
const { TabPane } = Tabs;
const { TextArea } = Input;
function itemRender(current, type, originalElement) {
  if (type === "prev") {
    return <a className="pagination-button ant-pagination-item">上一页</a>;
  }
  if (type === "next") {
    return <a className="pagination-button ant-pagination-item">下一页</a>;
  }
  return originalElement;
}

const DetailView = props => {
  const {
    showLogin,
    setShowLogin,
    showRegister,
    setShowRegister,
    bottom,
    tabIndex,
    filterActive,
    onPageChange,
    onTabChange,
    onFilterChange
  } = props;
  return (
    <div className={prefixCls}>
      {showLogin ? (
        <Login handleClose={() => setShowLogin(false)} activeKey="login" />
      ) : null}
      {showRegister ? (
        <Login
          handleClose={() => setShowRegister(false)}
          activeKey="register"
        />
      ) : null}
      <Header setShowLogin={setShowLogin} setShowRegister={setShowRegister} />

      <div className="container">
        <div className="content-container">
          <div className="work-container">
            <div className="video">
              <img className="video-cover" src={Video_01} alt="" />
            </div>
            <div className="video-info">
              <div className="info">
                <div className="title">我爱打飞机</div>
                <div className="scan-count">
                  <span className="count">834947次浏览</span>
                  <div className="br" />
                  <span className>更新于2018.12.27</span>
                </div>
              </div>
              <div className="operation">
                <div className="pick">
                  <div className="top">
                    <img className="pick-icon" src={PickNone} alt="" />
                    <span>点赞</span>
                  </div>
                  <div className="count">1123</div>
                </div>
                <div className="collection">
                  <div className="top">
                    <img
                      className="collection-icon"
                      src={CollectionNone}
                      alt=""
                    />
                    <span>收藏</span>
                  </div>
                  <div className="count">1123</div>
                </div>
                <div className="buy">
                  <div className="top">
                    <img className="buy-icon" src={BuyNone} alt="" />
                    <span>购买代码</span>
                  </div>
                  <div className="count">1123人已购买</div>
                </div>
                <div className="share">
                  <div className="top">
                    <img className="share-icon" src={ShareNone} alt="" />
                    <span>分享</span>
                  </div>
                  <div className="count">1123</div>
                </div>
              </div>
            </div>
          </div>
          <div className="work-info">
            <div className="user-info">
              <img className="user-icon" src={UserIcon} alt="" />
              <div>
                <div className="user-name">小苹果</div>
                <div className="user-intro">这家伙很懒，什么都没留下</div>
                <Button type="primary" className="button">
                  + 关注
                </Button>
              </div>
            </div>
            <div className="tabs-container">
              <Tabs defaultActiveKey="1">
                <TabPane tab="作品说明" key="1">
                  <div className="work-intro">
                    <div className="title">作品说明</div>
                    <div>更新了更新了</div>
                  </div>
                  <div className="operation-intro">
                    <div className="title">操作说明</div>
                    <div>作者很懒，没有留下任何操作说明！</div>
                  </div>
                </TabPane>
                <TabPane tab="Ta的更多作品" key="2">
                  暂无
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="comment-container">
            <div className="title">评论（883）</div>
            <div className="comment-input">
              <img className="user-icon" src={UserIcon} alt="" />
              <div className="textarea-container">
              <TextArea className="textarea" rows={3} maxLength="200" />
              <div>还可以输入200字</div>
              </div>
              <Button className="button" type="primary">提交评论</Button>
            </div>
            <div className="comment-list">
              {[1,1,1,1,1,1].map(item => {
                return (
                  <CommentItem name="张小" userIcon={User_01} comments="你这个作品不好耍 我没进去." date="2016-12-03" pickCount="0" replyCount="0" />
                )
              })}
            </div>
          </div>
          <div className="recommand-container">
            <div className="title">推荐作品</div>
            <div className="recommand-list">
              {[1,1,1,1].map(item => {
                return (
                  <RecommandItem coverImg={Recommand_01} name="智慧小乡村" scan="864k" pick="7886" userIcon={UserIcon} userName="小苹果" />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <FixedForm className="fixed-form" bottom={bottom} />
      <Footer />
    </div>
  );
};
export default DetailView;
