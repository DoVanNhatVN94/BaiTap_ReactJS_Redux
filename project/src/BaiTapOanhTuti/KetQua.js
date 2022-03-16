import React, { Component } from 'react';
import { connect } from 'react-redux';


 class KetQua extends Component {
  render() {
    let {dispatch} = this.props;
    let {win,sum} = this.props.Game;
    return (
      <div className='text-center'>
          <h1 className='text-warning'>I'm iron man, i love<br/>you 3000 !!</h1>
          <div className='py-1'>
          <p className='text_success'>Số bàn thắng : <span className='text-warning'>{win}</span></p>
          <p className='text_success'>Số bàn chơi : <span className='text-warning'>{sum}</span></p>
          </div>
            <button onClick={()=>{
            let action={
              type:'PLAY_GAME'
            }
            dispatch(action);
          }} className='btnGame'>Play Game</button>
      </div>
    )
  }
}
const mapStateToProps = (rootReducer)=>{
  return{
    Game:rootReducer.BaiTapReducer
  }
}

export default connect(mapStateToProps)(KetQua);