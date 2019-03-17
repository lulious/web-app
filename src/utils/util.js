const COLOR = {
  'action': '#e64e1c',
  'event': '#ff860b',
  'outward': '#e5d003',
  'sound': '#97c203',
  'pen': '#0ca1bf',
  'data': '#3375b2'
};
export function getColorByType(type){
  return COLOR[type];
}