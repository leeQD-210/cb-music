import { getSongDetail, getSongLyric } from '@/api/player'
import { parseLyric } from '@/utils/parseLyric'
import * as actionTypes from './constant'
// 添加歌曲到播放列表
const changePlayList = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: playList
})
// 切换当前歌曲
export const changeCurrentSong = (songDetail) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: songDetail
})
// 切换当前歌曲索引
const changeCurrentSongIndex = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentSongIndex
})
// 切换当前歌词
const changeCurrentLyric = (lyric) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC,
  currentLyric: lyric
})
// 播放列表添加歌曲信息
export const addSong = (id) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    getSongDetail(id).then((res) => {
      dispatch(changePlayList([...playList, ...res.songs]))
    })
  }
}
// 切换播放歌曲
export const changeSong = (id) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const index = playList.findIndex((item) => item.id === id)
    if (index > -1) {
      dispatch(changeCurrentSongIndex(index))
      return dispatch(changeCurrentSong(playList[index]))
    } else {
      getSongDetail(id).then((res) => {
        dispatch(changePlayList([...playList, ...res.songs]))
        // 切换当前歌曲
        dispatch(changeCurrentSong(res.songs[0]))
        // 切换当前歌曲索引
        dispatch(changeCurrentSongIndex(playList.length))
      })
    }
  }
}
// 切换当前歌曲索引
export const changeSongIndex = (index) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    if (playList[index]) {
      dispatch(changeCurrentSongIndex(index))
      dispatch(changeCurrentSong(playList[index]))
    }
  }
}
// 获取当前歌曲歌词
export const getLyric = (id) => {
  return (dispatch) => {
    getSongLyric(id).then((res) => {
      dispatch(changeCurrentLyric(parseLyric(res.lrc.lyric)))
    })
  }
}
