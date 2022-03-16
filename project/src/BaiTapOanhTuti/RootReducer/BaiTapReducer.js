let Game = {
  you: "keo",
  win: 0,
  sum: 0,
  com: [
    { hinh: "./img/keo.png", ident: "keo" }
    
  ],
};

export const BaiTapReducer = (state = Game, action) => {
  switch (action.type) {
    case "KEO": {
      state.you = action.chon;
      return { ...state };
    }
    case "BUA": {
      state.you = action.chon;
      return { ...state };
    }
    case "BAO": {
      state.you = action.chon;
      return { ...state };
    }
    case "PLAY_GAME": {
      state.sum++;
        let arr=[];
      const arrRan = [
        { hinh: "./img/keo.png", ident: "keo" },
        { hinh: "./img/bua.png", ident: "bua" },
        { hinh: "./img/bao.png", ident: "bao" }
      ];

      const random = Math.floor(Math.random() * arrRan.length);
      console.log(random, arrRan[random]);
      arr.push(arrRan[random]);
      state.com=[...arr];
      let {you,com} = state;
      if((you=="keo"&&com[0].ident=="bao")||(you=="bua"&&com[0].ident=="keo")||(you=="bao"&&com[0].ident=="bua")) state.win++;
      
      return { ...state };
    }

    default:
      return state;
  }
};
