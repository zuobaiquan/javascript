import React from 'react'
class Information extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 11
    }
  }
  componentDidMount() {
  }

  render() {
    const { count } = this.state
    return (
      <div className="information-container">
        资讯：{count}
      </div>
    )
  }
}

export default Information
