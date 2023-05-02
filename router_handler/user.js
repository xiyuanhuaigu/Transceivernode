const express = require('express')
const db = require('../db/index')


exports.regUser = (req, res) => {
    // 接收表单数据
    const userinfo = req.body
    // 判断数据是否合法
    if (!userinfo.schoolnum || !userinfo.password) {
        return res.send({ status: 1, message: '用户名或密码不能为空！' })
    }
    const sql1 = `select * from user where schoolnum=?`
    // 判断用户名是否以及存在
    db.query(sql1, [userinfo.schoolnum], function (err, results) {
        // 执行 SQL 语句失败
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        // 用户名被占用
        if (results.length > 0) {
            return res.send({ status: 1, message: '用户名被占用，请更换其他用户名！' })
        } else {
            // 进行注册
            const sql2 = `insert into user set ?`
            db.query(sql2, { schoolnum: userinfo.schoolnum, password: userinfo.password }, (err, results) => {

                if (err) {
                    res.send("错误")
                }
                if (results.affectedRows !== 1) {
                    res.send("注册失败")
                }
                res.send("注册成功")
            })
        }
    })
}
exports.login = (req, res) => {
    res.send('login OK')
}
