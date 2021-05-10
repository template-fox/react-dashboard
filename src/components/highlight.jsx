import React from 'react'
export default (props) => {
    return <div className="p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
        <div className="bg-background border hover:shadow shadow-primary  rounded-xl p-4">
            <div className="flex justify-between mb-6">
                <div
                    className="bg-dark text-white w-12 h-12 flex items-center justify-center rounded-xl ">
                    <i className="material-icons text-3xl">{props.icon}</i>
                </div>
                <div className="w-12 h-12 flex items-center justify-center"><i
                    className="material-icons cursor-pointer">{props.link && 'more_vert'}</i></div>
            </div>
            <div className="flex justify-between">
                <div className="w-1/2">
                    <h4 className="text-3xl font-bold text-focused mb-1">{props.value}</h4>
                    <span className="text-superlight"><span className="font-bold">
                        {props.stat}
                    </span> this week</span>
                </div>
                <div className="flex-grow flex justify-around items-start">
                    <i className="text-focused material-icons text-7xl text-focused">{props.stat_icon}</i>
                </div>
            </div>
        </div>
    </div>

}