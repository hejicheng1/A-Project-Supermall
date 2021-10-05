import axios from 'axios'

// ES6 Promise的封装
export function request(options) {
  return new Promise((resolve, reject) => {
    // 1.创建axios的实例对象 instance实例的意思  axios.create可以用来创建实例
    const instance = axios.create({
      baseURL:'http://152.136.185.210:7878/api/hy66',
      timeout: 5000
    })
    // 过滤器(拦截器)
    instance.interceptors.response.use(res => {
      return res.data
    })

    // 通过实例发送网络请求
    instance(options)
        .then(res => {
          resolve(res)
        }).catch(err => {
          reject(err)
    })
  })
}

// export function request(config) {
// 	// 1、创建axios实例
// 	const instance = axios.create({
// 	baseURL:'http://...'
// 	timeout:5000     //  设置请求超时 时间
// })
// 	//  2、axios的拦截器
// 	instance.interceptors.request.use(config=>{ 
// 	//注意，这里的参数也可以不是config，可以使任意的，但是在请求成功时获取到的结果就是请求时的配置信息，所以这里见名思意参数就写config
// 	// 这里是 发送请求成功时
	
// 	请求拦截的作用
// 	1、比如config中恶一些信息不符合服务器的要求
// 	2、比如每次发送网络请求时，都希望在界面显示一个图标。可以在这里显示，然后在响应成功时再关闭掉
// 	3、某些网络请求，比如登录token，必须携带一些特殊的信息；
// 	console.log(config)  // 打印的结果是，请求时的配置信息
// }, err =>{
// 	// 请求失败时，比如没网络，这种情况一般出现的很少
// 	console.log(err)
// });
// 	// 响应拦截
// 	instance.interceptors.use.response.use(res =>{
// 	// 响应成功
// 	return res.data  // 返回响应获取到的data数据
// }，err =>{
// 	// 响应失败，	比如，接口地址写错了
// 	console.log(err)
// })
// 	//  3、发送真正的网络请求 
// 	return  instance(config)	// 这个返回的是一个 promise  
// }





