
import React from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import Header from 'components/university/header/Header';
import Course from 'img-tob/course.png';
import Solution from 'img-tob/solution-banner.png';
import Apply from 'img-tob/apply-banner.png';
import Apply_1 from 'img-tob/apply-banner_1.png';
import AI from 'img-tob/ai-banner.png';
import Platform from 'img-tob/platform-banner.png';
import Exam from 'img-tob/exam-banner-1.png';
import Footer from 'components/home/Footer/Footer';
import './HomeDetail.less';

const prefixCls = 'home-detail-page';
class HomeDetail extends React.Component {

  goToLocation = (type) => {
    this.props.goTo({
      pathname: '/university',
      query:{
        scroll: type
      }
    });
  } 

  goToPart = type => {
    const node = this.refs[type];
    node.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    })
  }

  componentDidMount(){
    const scroll = this.props.location.query&&this.props.location.query.scroll;
    console.log(scroll)
    scroll&&this.goToPart(scroll)
  }

  render() {
    return (
      <div className={prefixCls}>
          <Header goToLocation={this.goToLocation} />
          <img ref="course" className="course-banner" src={Course} alt="" />
          <img ref="apply_1" className="apply-banner-1" src={Apply_1} alt="" />
          <img ref="exam" className="exam-banner" src={Exam} alt="" />
          <img ref="apply_2" className="apply-banner" src={Apply} alt="" />
          <img ref="platform" className="platform-banner" src={Platform} alt="" />
          <img ref="ai" className="ai-banner" src={AI} alt="" />
          <img ref="solution" className="solution-banner" src={Solution} alt="" />
          <Footer />
      </div>
    );
  }
}
export default connect(
  ({ lesson }) => {
    return { ...lesson };
  },
  dispatch => {
    return {
      goTo(path) {
        dispatch(routerRedux.push(path));
      }
    };
  }
)(HomeDetail);
