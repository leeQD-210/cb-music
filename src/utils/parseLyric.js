/**
[00:00.000] 作曲 : 许嵩
[00:01.000] 作词 : 许嵩
[00:22.240]天空好想下雨
[00:24.380]我好想住你隔壁
[00:26.810]傻站在你家楼下
[00:29.500]抬起头数乌云
[00:31.160]如果场景里出现一架钢琴
[00:33.640]我会唱歌给你听
[00:35.900]哪怕好多盆水往下淋
[00:41.060]夏天快要过去}
 */

// [00:31.160]如果场景里出现一架钢琴
export const parseLyric = (lyric) => {
  const parseReg = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
  let lyricSplit = lyric.split('\n')
  let lyricArr = []
  for (let line of lyricSplit) {
    if (line) {
      const arr = parseReg.exec(line)
      if (!arr) continue
      const minute = arr[1] * 1000 * 60
      const second = arr[2] * 1000
      const milSecond =
        arr[3].length === 3 ? arr[3]* 1 : arr[3] * 10
      const content = line.replace(parseReg, '').trim()
      lyricArr.push({
        time: minute + second + milSecond,
        content: content
      })
    }
  }
  return lyricArr
}
