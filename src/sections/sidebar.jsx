import React from 'react'
import routes from '../lists/routes';
export default ()=>{
    return <div className="max-w-xs hidden xl:block w-full">
    <div className="px-8 py-8 text-focused pl-16">
        <a href="/" className="text-4xl font-bold pl-12">Wallet</a>
    </div>
    <div className="profile">
        <div className="bg-white rounded-full border-superlight border-4 w-24 mx-auto mb-4">
            <img src="/images/profile.png" className="rounded-full" alt="" />
        </div>
        <div>
            <h4 className="font-bold text-center text-xl text-focused">Alex Granger</h4>
            <p className="text-center text-light">Paid user</p>
        </div>
        <div id="menu" className="px-8 pl-16 text-light pt-6">
            <ul>
                {routes.map(e=><li key={e.name} className={"p-2 pl-4  py-2 mb-3 focused " + ( e.name== 'Dashboard' ? ' bg-primary rounded-full ' : '') }><a href="/"><span
                    className="material-icons-outlined align-middle">{e.icon}</span><span
                        className="pl-4">{e.name}</span></a></li>)}
            </ul>
        </div>
    </div>
</div>
}