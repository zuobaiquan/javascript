import React from 'react'
import { Router, Route, hashHistory, Redirect } from 'react-router';

// 资讯页面
import Information from '../pages/information/index.jsx'
// 视频页
import Video from '../pages/video/index.jsx'

class BasicMap extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        {/* 资讯列表 */}
        <Route path="/information" component={Information} />
        {/* 视频 */}
        <Route path="/video" component={Video} />
      </Router>
    )
  }
}

export default BasicMap
