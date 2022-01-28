// 处理数量
export function handleCount(count) {
  const num = parseInt(count / 10000)
  const numLeft = parseInt((count % 10000) / 1000)
  if (num > 0) {
    return num + '.' + numLeft + '万'
  } else {
    return count
  }
}
// 处理持续时间
export function handleDurationTime(time) {
  const totalSeconds = parseInt(time / 1000)
  const totalMinutes = parseInt(time / 1000 / 60).toString().padStart(2, '0')
  const seconds = (totalSeconds % 60).toString().padStart(2, '0')
  return totalMinutes + ':' + seconds
}
