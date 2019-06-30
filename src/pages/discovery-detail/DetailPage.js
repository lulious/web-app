import React from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import DetailView from "./DetailView";
import { getScrollTop, getWindowHeight, getScrollHeight } from "utils/util";
import videojs from 'video.js';
import 'video.js/dist/video-js.css'

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showRegister: false,
      bottom: "0",
      tabIndex: 0,
      filterActive: 0,
      oddLength: 200,
      text: ''
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

  getWorkDetail = id => {

  }

  checkLength = e => {
    const length = e.target.value.length;
    this.setState({
      oddLength: 200-length,
      text: e.target.value
    })
  }

  addComment = () => {
    const text = this.state.text;
    console.log(text);
    this.setState({
      oddLength: 200,
      text: ''
    })
  }

  initVideo = () => {
    const video = document.getElementById('video');
    this.player = videojs(video, {
      controls: true, // 是否显示控制条
      // poster: 'xxx', // 视频封面图地址
      preload: 'auto',
      // autoplay: true,
      language: 'zh-CN', // 设置语言
      muted: false, // 是否静音
      fluid: true,
      inactivityTimeout: false,
      controlBar: { // 设置控制条组件
        //  设置控制条里面组件的相关属性及显示与否
        'currentTimeDisplay':true,
        'durationDisplay':true,
        'remainingTimeDisplay':false,
        playToggle: true,
        volumePanel: {
          inline: false,
        },      
        /* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
        children: [
          {name: 'playToggle'}, // 播放按钮
          {name: 'currentTimeDisplay'}, // 当前已播放时间
          {name: 'progressControl'}, // 播放进度条
          {name: 'durationDisplay'}, // 总时间
          { // 倍数播放
            name: 'playbackRateMenuButton',
            'playbackRates': [0.5, 1, 1.5, 2, 2.5]
          },
          {
            name: 'volumePanel', // 音量控制
            inline: false, // 不使用水平方式
          },
          {name: 'FullscreenToggle'} // 全屏
        ]
      },
      sources: [{
        src: 'https://video.codemao.cn/lesson/boxgkk-L3-rpgyx-dg68gc-V2.0.mp4'
    }]
  }, function onPlayerReady(){
  });
  }

  componentDidMount() {
    this.initVideo();
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
        checkLength={this.checkLength}
        addComment={this.addComment}
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
