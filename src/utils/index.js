export function handleCount(count) {
  const num = parseInt(count / 10000);
  const numLeft = parseInt((count % 10000) / 1000);
  if (num > 0) {
    return num + '.' + numLeft + '万';
  } else {
    return count;
  }
}
