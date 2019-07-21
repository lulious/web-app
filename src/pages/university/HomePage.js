
import React from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import HomeView from "./HomeView";

class HomePage extends React.Component {

  goToLocation = (type) => {
    if(type !== 'home'){
      const node = document.getElementById(type);
      node.scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
      })
    }
  }

  goToDetail = type => {
    this.props.goTo({
      pathname: '/university/detail',
      query: {
        scroll: type
      }
    })
  }

  handleSmartRoom = () => {
    this.props.goTo('/apply-smart-room')
  }

  initSwiper = () => {
    new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 0,
      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      }    
    });
  }

  componentDidMount(){
    const scroll = this.props.location.query&&this.props.location.query.scroll;
    console.log(scroll)
    scroll&&this.goToLocation(scroll)
    this.initSwiper();
  }

  render() {
    return (
      <HomeView
        goToLocation={this.goToLocation}
        goToDetail={this.goToDetail}
        handleSmartRoom={this.handleSmartRoom}
      />
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
)(HomePage);
