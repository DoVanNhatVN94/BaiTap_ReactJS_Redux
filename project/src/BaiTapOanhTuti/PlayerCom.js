import React, { Component } from 'react'
import { connect } from 'react-redux';

class PlayerCom extends Component {
  render() {
    let {com} = this.props.Game;
    console.log(com);
    return (
      <div className='player text-center'>
          <div className='speech-bubble'>
          <img src={com[0].hinh} className='rotate' alt="" />
        </div>
          <img src="./img/playerComputer.png" className='img-fluid'  alt="" />
      </div>
    )
  }
}
const mapStateToProps = (rootReducer)=>{
  return{
    Game:rootReducer.BaiTapReducer
  }
}

export default connect(mapStateToProps)(PlayerCom);