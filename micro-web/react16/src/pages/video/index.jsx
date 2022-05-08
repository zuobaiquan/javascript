import React from 'react'
class VideoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navList: [
        {
          label: '全部',
          value: 0
        },
        {
          label: '车评',
          value: 1
        },
        {
          label: '花边',
          value: 2
        },
        {
          label: '事故',
          value: 3
        },
        {
          label: '自驾游',
          value: 4
        },
        {
          label: '改装',
          value: 5
        },
        {
          label: '分类六',
          value: 6
        },
      ]
    }
  }
  componentDidMount() {
  }

  render() {
    const { navList } = this.state
    return (
      <div className="video-container">
        {
          navList.map(v => <div>{v.value}--{v.label}</div>)
        }
      </div>
    )
  }
}

export default VideoList
