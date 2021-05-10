import React from 'react'

export default (props) => {
    return <button className={"flex shadow w-10 h-10 rounded-full items-center justify-center " + (props.className || '') + (props.dark ? ' bg-dark text-primary ' : ' bg-white text-focused  ')}>
    <i className="material-icons-outlined">{props.icon}</i>
    </button>
}