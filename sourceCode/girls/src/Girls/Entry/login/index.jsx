import React, { Component } from 'react'
import '../../style/login.scss'
import { NavLink } from 'react-router-dom'
export default class Login extends Component {
    render() {
        return (
            <div>
                我是login
                <NavLink to='/registe' className='a'>忘记密码？</NavLink>
            </div>
        )
    }
}
