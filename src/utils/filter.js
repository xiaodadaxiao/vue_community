//过滤得到富文本中纯文本概述
export function getText(html) {
  var msg = "";
  if (html == "" || html == null) return msg;
  //1、过滤pre标签、包括内容
  var re1 = /<pre[^>]*>[^<]*<\/pre>/gi;
  msg = html.replace(re1, ""); //执行替换成空字符
  //2、过滤html标签
  var re2 = /<[^<>]+>/gi;
  msg = msg.replace(re2, ""); //执行替换成空字符
  return msg;
}

//得到富文本中图片中的url/（数组）
export function getImgUrls(html) {
  if (html == "" || html == null) return [];
  var urls = [];
  let imgReg = /<img.*?(?:>|\/>)/gi; //匹配图片中的img标签
  let srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i; // 匹配图片中的src
  let arr = html.match(imgReg); //筛选出所有的img
  for (let i = 0; i < arr.length; i++) {
    let src = arr[i].match(srcReg);
    // 获取图片地址
    src && urls.push(src[1]);
  }
  return urls;
}

//将富文本中img的src变成v-lazy
export function srcToLazy(html) {
  let reg = /(<img.*)(src)([^>]*>)/gi;
  html = html.replace(reg, "$1" + "v-lazy" + "$3");
  return html;
}
