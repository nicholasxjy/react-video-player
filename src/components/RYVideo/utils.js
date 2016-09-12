export function formatTime(duration) {
  let secs = parseInt(duration%60, 10);
  let mins = parseInt((duration/60)%60, 10);

  secs = ("0"+secs).slice(-2);
  mins = ("0"+mins).slice(-2);
  return `${mins}:${secs}`;
}
