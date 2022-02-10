import { getCatList } from '@/api/catlist'
import * as actionTypes from './constant'
import { handleCatListData } from '@/utils'
const changeCatList = (catList) => ({
  type: actionTypes.CHANGE_CAT_LIST,
  catList
})
export const getList = () => {
  return (dispatch) => {
    getCatList().then((res) => {
      console.log(handleCatListData(res))
      dispatch(changeCatList(handleCatListData(res)))
    })
  }
}
