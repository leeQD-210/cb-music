import * as actionTypes from './constant';
import { getSongComment } from '@/api/comment';
const changeSongComment = (songComments) => ({
  type: actionTypes.CHANGE_SONG_COMMENT,
  songComments,
});
const changeSongHotComment = (songHotComments) => ({
  type: actionTypes.CHANGE_SONG_HOT_COMMENT,
  songHotComments,
});
const changeSongCommentTotal = (songCommentsTotal) => ({
  type: actionTypes.CHANGE_SONG_COMMENT_TOTAL,
  songCommentsTotal,
});
export const getComment = (id, limit, pageNo, type) => {
  return (dispatch) => {
    switch (type) {
      case 'song':
        getSongComment(id, limit, pageNo).then((res) => {
          dispatch(changeSongComment(res.comments));
          pageNo === 1 && dispatch(changeSongHotComment(res.hotComments));
          dispatch(changeSongCommentTotal(res.total));
        });
        break;
      default:
        return '';
    }
  };
};
