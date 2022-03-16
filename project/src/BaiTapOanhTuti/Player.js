import React, { Component } from "react";
import { connect } from "react-redux";
//kết nối đến store redux


class Player extends Component {
  render() {
    console.log(this.props);
    let {dispatch} = this.props;
    let {you} = this.props.Game
    let select = `./img/${you}.png`;
    return (
      <div className="player text-center">
        <div className='speech-bubble'>
          <img src={select}  alt="" />
        </div>
          <img src="./img/player.png" className='img-fluid'  alt="" />
        <div>
          <button onClick={()=>{
            let action={
              type:'KEO',
              chon:'keo'
            }
            dispatch(action);
          }}><img src="./img/keo.png"  alt="" /></button>
          <button onClick={()=>{
            let action={
              type:'BUA',
              chon:'bua'
            }
            dispatch(action);
          }} className="mx-4"><img src="./img/bua.png"  alt="" /></button>
          <button onClick={()=>{
            let action={
              type:'BAO',
              chon:'bao'
            }
            dispatch(action);
          }}><img src="./img/bao.png"  alt="" /></button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (rootReducer)=>{
  return{
    Game:rootReducer.BaiTapReducer
  }
}

export default connect(mapStateToProps)(Player);