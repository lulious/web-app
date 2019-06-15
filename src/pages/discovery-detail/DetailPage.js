import React from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import DetailView from "./DetailView";
import { getScrollTop, getWindowHeight, getScrollHeight } from "utils/util";

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showRegister: false,
      bottom: "0",
      tabIndex: 0,
      filterActive: 0
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

  onPageChange = (e) => {
    console.log(e)
  }

  onTabChange = (index) => {
    this.setState({
      tabIndex: index
    })
  }

  onFilterChange = (active) => {
    this.setState({
      filterActive: active
    })
  }

  componentDidMount() {
    document.addEventListener("scroll", e => {
      const top = getScrollTop();
      const wh = getWindowHeight();
      const sh = getScrollHeight();
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
      <DetailView
        {...this.state}
        setShowLogin={this.setShowLogin}
        setShowRegister={this.setShowRegister}
        onPageChange={this.onPageChange}
        onTabChange={this.onTabChange}
        onFilterChange={this.onFilterChange}
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
)(DetailPage);
