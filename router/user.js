const express = require('express');

// 创建路由对象
const router = express.Router()
// 导入用户路由模块
const userHandler = require('../router_handler/user')

// 注册新用户
router.post('/reguser', userHandler.regUser)
// 登录
router.post('/login',userHandler.login)



  module.exports = router