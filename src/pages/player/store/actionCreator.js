import { getSongDetail, getSongLyric, getPlayUrl } from '@/api/player'
import { parseLyric } from '@/utils/parseLyric'
import * as actionTypes from './constant'
import { message } from 'antd'
// 添加歌曲到播放列表
const changePlayList = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: playList
})
const changeCurrentSong = (songDetail) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: songDetail
})
// 切换当前歌曲索引
const changeCurrentSongIndex = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentSongIndex
})
const changeCurrentSongUrl = (songUrl) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_URL,
  songUrl
})
// 切换当前歌词
const changeCurrentLyric = (lyric) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC,
  currentLyric: lyric
})
export const changePlayStatus = (isPlay) => ({
  type: actionTypes.CHANGE_PLAY_STATUS,
  isPlay
})
// 切换播放顺序
export const changePlayAction = (action) => ({
  type: actionTypes.CHANGE_PLAY_ACTION,
  playAction: action
})
// 切换歌词索引
export const changeLyricIndex = (index) => ({
  type: actionTypes.CHANGE_LYRIC_INDEX,
  lyricIndex: index
})
// 播放列表添加歌曲信息
export const addSong = (id) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const index = playList.findIndex((item) => item.id === id)
    if (index > -1) return
    getSongDetail(id).then((res) => {
      dispatch(changePlayList([...playList, ...res.songs]))
    })
  }
}
//  向播放列表添加多首歌曲
export const addSongByTracks = (tracks) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    // (new Set([...playList, ...tracks]))
    const newTracks = []
    tracks.forEach((item) => {
      if (!playList.some((sItem) => sItem.id === item.id)) {
        newTracks.push(item)
      }
    })
    dispatch(changePlayList([...playList, ...newTracks]))
    message.success({ content: '歌曲已添加至播放列表！' })
  }
}
// 切换播放歌曲
export const changeSong = (id) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const index = playList.findIndex((item) => item.id === id)
    if (index > -1) {
      dispatch(changeSongIndex(index))
    } else {
      getSongDetail(id).then((res) => {
        dispatch(changePlayList([...playList, ...res.songs]))
        // 切换当前歌曲索引
        dispatch(changeCurrentSongIndex(playList.length))
        dispatch(changeCurrentSong(res.songs[0]))
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
    } else {
      dispatch(changeCurrentSong({}))
      dispatch(changeCurrentLyric([]))
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
// 从播放列表中删除歌曲
export const deleteSong = (type, index) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    switch (type) {
      case 'single':
        playList.splice(index,1)
        dispatch(changePlayList([...playList]))
        if (playList[index - 1]) {
          dispatch(changeSongIndex(index - 1))
        } else {
          dispatch(changeSongIndex(index))
        }
        break
      case 'all':
        dispatch(changePlayList([]))
        dispatch(changeSongIndex(0))
        break
      default:
        return '其他操作'
    }
  }
}
export const getSongUrl = (id) => {
  return (dispatch) => {
    getPlayUrl(id).then((res) => {
      dispatch(changeCurrentSongUrl(res.data[0].url))
    })
  }
}
