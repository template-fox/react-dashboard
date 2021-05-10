import React from 'react'

export default (props) => {
    let parentClass = 'bg-green-100 text-green-900 border-green-200'
    let iconClass = 'bg-green-200 text-green-800 border-green-300'
    let icon = 'done'
    let text = 'completed'
    switch (props.type) {
        case 'pending':
        case 'warning':
            parentClass = 'bg-yellow-100 text-yellow-900 border-yellow-200'
            iconClass = 'bg-yellow-200 text-yellow-800 border-yellow-300'
            icon = 'info'
            text = 'pending'
            break;
        case 'danger':
        case 'error':
            parentClass = 'bg-red-100 text-red-900 border-red-200'
            iconClass = 'bg-red-200 text-red-800 border-red-300'
            icon = 'error'
            text = 'error'
            break;
        case 'primary':
        case 'info':
            parentClass = 'bg-primary text-light border-light'
            iconClass = 'bg-superlight text-background border-light'
            icon = 'trending_up'
            text='working'
            break;
    
        default:
            break;
    }

    if(props.icon) {
        icon = props.icon
    }

    if(props.text) {
        text = props.text
    }
    return <div className={"inline-flex w-36 items-center border shadow-sm px-4 py-1 text-sm rounded-full " + parentClass}>
        <span className={"material-icons rounded-full text-xs w-6 mr-2 flex items-center justify-center h-6  border-2 " + iconClass}>done</span>
        {text}
    </div>
}