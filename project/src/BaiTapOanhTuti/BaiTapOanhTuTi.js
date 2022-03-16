import React, { Component } from 'react';
import '../../src/asset/css/buble.css'
import KetQua from './KetQua.js';
import Player from './Player.js';
import PlayerCom from './PlayerCom.js';

export default class BaiTapOanhTuTi extends Component {
  render() {
    return (
      <div className='oanhTuTi container-fluid p-5'>
          <div className="row">
              <div className="col-4">
                  <Player/>
              </div>
              <div className="col-4">
                  <KetQua/>
              </div>
              <div className="col-4">
                  <PlayerCom/>
              </div>
          </div>
      </div>
    )
  }
}
