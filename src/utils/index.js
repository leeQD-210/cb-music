// 处理数量
export function handleCount(count) {
  const num = parseInt(count / 10000);
  const numLeft = parseInt((count % 10000) / 1000);
  if (num > 0) {
    return num + '.' + numLeft + '万';
  } else {
    return count;
  }
}
// 处理持续时间
export function handleDurationTime(time) {
  const totalSeconds = parseInt(time / 1000);
  const totalMinutes = parseInt(time / 1000 / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return totalMinutes + ':' + seconds;
}
// 处理时间戳
export function handleTimeStamp(timeStamp, type = 'date') {
  if (!timeStamp) return '';
  const date = new Date(timeStamp);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  if (type === 'time') {
    return month + '月' + day + '日' + hour + ':' + minute;
  }
  return month + '月' + day + '日';
}
// 处理歌单分类数据
export function handleCatListData(data) {
  const categoryData = Object.entries(data.categories).map(([key, value]) => {
    return {
      name: value,
      subs: [],
    };
  });
  for (let item of data.sub) {
    categoryData[item.category].subs.push(item);
  }
  return categoryData;
}
// 生成字母分类数组
export function generateAlphaList() {
  const alphaList = [{ name: '热门', value: -1 }];
  const start = 'A'.charCodeAt(0);
  const last = 'Z'.charCodeAt(0);
  for (let i = start; i < last; i++) {
    let obj = { name: String.fromCharCode(i), value: i };
    alphaList.push(obj);
  }
  alphaList.push({ name: '其他', value: 0 });
  return alphaList;
}
