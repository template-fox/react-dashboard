import React from 'react'
import Icon from '../components/icons/theme'
export default () => {
    return <div class="flex items-center justify-center min-h-screen">
        <div className="max-w-md w-full bg-white p-8 shadow rounded-lg">
            <div class="flex items-center mb-4">
                <h5>Ultimate dashboard</h5>
                <span class="ml-2"> - Intellectual property</span>
            </div>
            <span >User Login --</span>
            <h3 class="mt-4 mb-6">Millions of Quality Resources /</h3>
            <hr />
            <div class="mt-6 mb-4">
                <label className="block pb-2" htmlFor="username">Username / Email Address</label>
                <div className="flex-normal border px-4 pl-2 rounded-full ">
                    <span className="material-icons">
                        person
                    </span>
                    <input type="text" autoFocus />
                </div>
            </div>
            <div class="mt-6 mb-4">
                <label className="block pb-2" htmlFor="password">Password</label>
                <div className="flex-normal border rounded-full pl-2 px-4">
                    <span className="material-icons-outlined">
                        lock
                    </span>
                    <input type="password" />
                </div>
            </div>
            <div class="flex-normal">
                <div class="flex-normal">
                    <input type="checkbox" name="" id="" /> <span class="pl-2">Remember me?</span>
                </div>
                <a href="/">Forget password?</a>
            </div>
            <div class="mt-4 mb-6">
                <button class="bg-focused w-full text-background rounded-full py-2">Login</button>
            </div>
            <div class="mb-4">
                <span>No Account Yet? <a href="">Register now</a> </span>
            </div>
            <div class="bg-light rounded-xl flex py-8 justify-around">
                <Icon icon="facebook" />
                <Icon icon="add_to_drive" />
                <Icon icon="share" />
            </div>
        </div>
        <div class="max-w-xl rounded-lg">
            <img src="/images/login.jpeg" class="rounded-tr-lg rounded-br-lg" alt="" />
        </div>
    </div>
}