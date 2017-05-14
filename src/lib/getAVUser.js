import AV from '../lib/AVkey'

export default function(user){
      //通过结构赋值拿到了id和attributes下的username(这里attributes是模式,并不会被赋值)
  var {id,attributes:{username}} = user || AV.User.current() || {attributes:{}}
  return {id,username}
}
