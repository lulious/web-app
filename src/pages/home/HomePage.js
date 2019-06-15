import React from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import HomeView from "./HomeView";
import { getScrollTop, getWindowHeight, getScrollHeight } from "utils/util";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showRegister: false,
      showDiscount: false,
      showApplySuccess: false,
      bottom: "0"
    };
  }

  setShowLogin = type => {
    this.setState({
      showLogin: type
    });
  };

  setShowRegister = type => {
    this.setState({
      showRegister: type
    });
  };

  setShowApplySuccess = type => {
    this.setState({
      showApplySuccess: type
    });
  };

  componentDidMount() {
    document.addEventListener("scroll", e => {
      const top = getScrollTop();
      const wh = getWindowHeight();
      const sh = getScrollHeight();
      if (top > 600) {
        this.setState({
          showDiscount: true
        });
      } else {
        this.setState({
          showDiscount: false
        });
      }
      if (top + wh === sh) {
        this.setState({
          bottom: "51px"
        });
      } else {
        this.setState({
          bottom: 0
        });
      }
    });
  }

  render() {
    return (
      <HomeView
        {...this.state}
        setShowLogin={this.setShowLogin}
        setShowRegister={this.setShowRegister}
        setShowApplySuccess={this.setShowApplySuccess}
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
