import React from "react";
import { Input, Pagination } from "antd";
import "./DiscoveryView.less";
import Kind_1 from "img/kind_1.png";
import Kind_2 from "img/kind_2.png";
import Kind_3 from "img/kind_3.png";
import Kind_4 from "img/kind_4.png";
import WorkIcon from "img/work-icon.png";
import CoverImg from "img/work_01.png";
import UserIcon from "img/user-icon_01.png"; 
import Login from "components/home/Login/Login";
import Header from "components/home/Header/Header";
import WorkCard from "components/discovery/WorkCard/WorkCard";
import FixedForm from "components/home/FixedForm/FixedForm";
import Footer from "components/home/Footer/Footer";

const prefixCls = "discovery-page-container";
const Search = Input.Search;
function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a className="pagination-button ant-pagination-item">上一页</a>;
  }
  if (type === 'next') {
    return <a className="pagination-button ant-pagination-item">下一页</a>;
  }
  return originalElement;
}

const DiscoveryView = props => {
  const {
    showLogin,
    setShowLogin,
    showRegister,
    setShowRegister,
    bottom,
    tabIndex,
    filterActive,
    showDiscount,
    onPageChange,
    onTabChange,
    onFilterChange
  } = props;
  return (
    <div className={prefixCls}>
     {showLogin ? <Login handleClose={() => setShowLogin(false)} activeKey="login" /> : null}
      {showRegister ? (
        <Login handleClose={() => setShowRegister(false)} activeKey="register" />
      ) : null}
      <Header setShowLogin={setShowLogin} setShowRegister={setShowRegister} />

      <div className="container">
        <div className="sort">
          <div className="sort-item">
            <img src={Kind_1} alt="" />
            <span className="title">考级答题</span>
          </div>
          <div className="sort-item">
            <img src={Kind_2} alt="" />
            <span className="title">考级答题</span>
          </div>
          <div className="sort-item">
            <img src={Kind_3} alt="" />
            <span className="title">科技活动</span>
          </div>
          <div className="sort-item">
            <img src={Kind_4} alt="" />
            <span className="title">智慧商城</span>
          </div>
        </div>
        <div className="works-container">
          <div className="head">
            <div className="left">
            <img className="work-icon" src={WorkIcon} alt="" />
            <span className="title">作品</span>
            <div className={tabIndex === 0 ? "tab tab-active":"tab"} onClick={()=>onTabChange(0)} >图形化作品</div>
            <div className={tabIndex === 1 ? "tab tab-active":"tab"} onClick={()=>onTabChange(1)}>机器人作品</div>
            </div>
           
            <Search
              className="search"
              placeholder="搜索作品"
              onSearch={value => console.log(value)}
              style={{ width: 200 }}
            />
          </div>
          <div className="filter">
            <div className={filterActive === 0? "filter-item filter-active": "filter-item"} onClick={()=>onFilterChange(0)}>最多点击</div>
            <div className="br"></div>
            <div className={filterActive === 1? "filter-item filter-active": "filter-item"} onClick={()=>onFilterChange(1)}>最新发布</div>
          </div>
          <div className="work-cards">
            {
              [1,1,1,1,1,1,1,1,1,1,1,1].map(item => {
                return (
                  <WorkCard className="card-item" isOpenSource="true" coverImg={CoverImg} name="作品名称" userName="用户" userIcon={UserIcon} scan="729" pick="873"  />
                )
              })
            }
          </div>
          <Pagination className="pagination" total={500} itemRender={itemRender} onChange={onPageChange} />
        </div>
      </div>
     
      <FixedForm className="fixed-form" bottom={bottom} />
      <Footer />
    </div>
  );
};
export default DiscoveryView;
