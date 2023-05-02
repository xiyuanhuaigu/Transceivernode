const express = require('express')
const app = express()
const joi = require('joi')
// 导入并使用cors
const cors = require('cors')
app.use(cors())
// 配置解析表单数据中间件
app.use(express.urlencoded({extended: false}))


const userRouter = require('./router/user')
app.use('/api', userRouter)


app.listen(3007,()=>{
    console.log('http://127.0.0.1:3007')
})