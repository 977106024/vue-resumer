/**
 * Created by Administrator on 2017/3/3.
 */
//通过看LeanClound文档的错误码列表可得知
const map = {
  202:'用户名已被注册',
  210:'用户名和密码不匹配',
  211:'找不到该用户',
  217:'无效的用户名',
  unknown:'请求失败,请稍后再试'
}

export default function({code}){
  return map[code] || map.unknow
}
