import React, { Component } from 'react'
import { BrowserRouter , Route,Switch,Redirect } from 'react-router-dom'
// 引入组件

export default class Home extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}/>
                {/* 写路由 */}
                <Redirect exact from='/' to='/'></Redirect>
            </Switch>
               
            </BrowserRouter>
        )
    }
}
