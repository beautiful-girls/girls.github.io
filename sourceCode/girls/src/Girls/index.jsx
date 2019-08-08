import React, { Component } from 'react'
import { BrowserRouter , Route , Switch , Redirect } from 'react-router-dom'
// 引入组件
import Login from './Entry/login/index.jsx'
import Registe from './Entry/registe/index.jsx'
import CreateLogin from './Entry/up-to-date/login'

export default class Home extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                {/* 写路由 */}
                <Redirect exact from='/' to='/login'></Redirect>
            </Switch>
               
            </BrowserRouter>
        )
    }
}
