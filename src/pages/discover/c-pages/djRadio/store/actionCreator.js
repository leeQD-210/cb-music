import * as actionTypes from './constant'
import {
  getDjCategory,
  getDjRecommend,
  getDjProgram,
  getProgramRecommend
} from '@/api/djRadio'
const changeDjRadioCategory = (djCategory) => ({
  type: actionTypes.CHANGE_DJ_CATEGORY,
  djCategory
})
// 推荐电台
const changeDjRecommend = (djRecommend) => ({
  type: actionTypes.CHANGE_DJ_RECOMMEND,
  djRecommend
})
// 电台节目
const changeDjProgram = (djProgram) => ({
  type: actionTypes.CHANGE_DJ_PROGRAM,
  djProgram
})
// 推荐节目
const changeDjRecommendProgram = (recommendProgram) => ({
  type: actionTypes.CHANGE_DJ_RECOMMEND_PROGRAM,
  recommendProgram
})
export const getDjCatelist = () => {
  return (dispatch) => {
    getDjCategory().then((res) => {
      dispatch(changeDjRadioCategory(res.categories))
    })
  }
}
export const getRecommend = () => {
  return (dispatch) => {
    getDjRecommend().then((res) => {
      dispatch(changeDjRecommend(res))
    })
  }
}
export const getProgram = (limit) => {
  return (dispatch) => {
    getDjProgram(limit).then((res) => {
      dispatch(changeDjProgram(res.toplist))
    })
  }
}
export const getDjRecommendProgram = () => {
  return (dispatch) => {
    getProgramRecommend().then((res) => {
      dispatch(changeDjRecommendProgram(res.programs))
    })
  }
}
