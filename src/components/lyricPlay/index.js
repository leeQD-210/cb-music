import React, { memo, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { LyricPlayWrapper } from './style';
import { useSelector } from 'react-redux';
import { shallowEqual } from 'react-redux';
export default memo(function LyricPlay() {
  const lyricRef = useRef();
  const state = useSelector((state) => {
    return {
      currentLyric: state.getIn(['player', 'currentLyric']),
      lyricIndex: state.getIn(['player', 'lyricIndex']),
    };
  }, shallowEqual);
  useEffect(() => {
    if (state.lyricIndex <= 4) {
      lyricRef.current.scrollTop = 0;
    }
    if (state.lyricIndex > 4) {
      lyricRef.current.scrollTo({
        top: (state.lyricIndex - 4) * 30,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [state.lyricIndex, lyricRef]);
  return (
    <LyricPlayWrapper>
      <div className="lyric_box" ref={lyricRef}>
        {state.currentLyric.length > 0 &&
          state.currentLyric.map((item, index) => {
            return (
              <div
                className={classNames('line', {
                  current: state.lyricIndex === index,
                })}
                key={index}
              >
                {item.content || '哦豁呐'}
              </div>
            );
          })}
        {state.currentLyric.length === 0 && (
          <div className="empty_lyric">当前歌曲暂无歌词，请尝试其他歌曲！</div>
        )}
      </div>
    </LyricPlayWrapper>
  );
});
