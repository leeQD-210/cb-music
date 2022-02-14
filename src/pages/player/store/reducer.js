import * as actionTypes from './constant';
import { Map } from 'immutable';
const defaultState = Map({
  playList: [
    {
      name: '雅俗共赏',
      id: 411214279,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: '许嵩',
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 31,
      crbt: null,
      cf: '',
      al: {
        id: 34749138,
        name: '青年晚报',
        picUrl:
          'https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg',
        tns: [],
        pic: 3431575794705764,
      },
      dt: 249621,
      h: {
        br: 320000,
        fid: 0,
        size: 9987177,
        vd: -22200,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5992323,
        vd: -19600,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3994896,
        vd: -17800,
      },
      a: null,
      cd: '1',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 5302271,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 14026,
      publishTime: 1461723397683,
    },
  ],
  currentSong: {
    name: '雅俗共赏',
    id: 411214279,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 5771,
        name: '许嵩',
        tns: [],
        alias: [],
      },
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: null,
    fee: 8,
    v: 31,
    crbt: null,
    cf: '',
    al: {
      id: 34749138,
      name: '青年晚报',
      picUrl:
        'https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg',
      tns: [],
      pic: 3431575794705764,
    },
    dt: 249621,
    h: {
      br: 320000,
      fid: 0,
      size: 9987177,
      vd: -22200,
    },
    m: {
      br: 192000,
      fid: 0,
      size: 5992323,
      vd: -19600,
    },
    l: {
      br: 128000,
      fid: 0,
      size: 3994896,
      vd: -17800,
    },
    a: null,
    cd: '1',
    no: 2,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 8192,
    originCoverType: 0,
    single: 0,
    noCopyrightRcmd: null,
    mv: 5302271,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 14026,
    publishTime: 1461723397683,
  },
  currentSongIndex: 0,
  currentLyric: [],
  // 0 顺序播放 1单曲循环 2 随机播放
  playAction: 0,
  lyricIndex: 0,
  isPlay: false,
  songUrl: '',
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList);
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong);
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set('currentSongIndex', action.currentSongIndex);
    case actionTypes.CHANGE_CURRENT_LYRIC:
      return state.set('currentLyric', action.currentLyric);
    case actionTypes.CHANGE_PLAY_ACTION:
      return state.set('playAction', action.playAction);
    case actionTypes.CHANGE_LYRIC_INDEX:
      return state.set('lyricIndex', action.lyricIndex);
    case actionTypes.CHANGE_PLAY_STATUS:
      return state.set('isPlay', action.isPlay);
    case actionTypes.CHANGE_CURRENT_SONG_URL:
      return state.set('songUrl', action.songUrl);
    default:
      return state;
  }
};
export default reducer;
