import React from 'react';
import Highlight from '../components/highlight'
import Table from '../components/tables/theme'
import ExpandedTable from '../samples/expanded-table'
import Chart from '../samples/chart'
import Sidebar from '../sections/sidebar';
import Icon from '../components/icons/theme'
export default () => {
    return <main class="flex">
        <Sidebar />
        <div className="content  flex-grow relative">
            <div className="text-superlight md:hidden">
                <div className="pt-8 px-8">
                    <span className="material-icons" onclick="document.getElementById('opener').click()">menu</span>
                    <a href="/" className="text-4xl font-bold ml-2">Wallet</a>
                </div>
            </div>
            <div className="flex-grow flex justify-between p-8">
                <div className="max-w-md w-full">
                    <div className="rounded-full border shadow-sm bg-white px-4 flex items-center">
                        <span className="material-icons align-middle">search</span>
                        <input className="py-2 px-2 outline-none flex-grow" type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="flex max-w-[15em] w-full justify-around">
                    <Icon icon="notifications" />
                    <Icon icon="message" />
                    <Icon icon="redeem" />
                    <Icon icon="settings" />
                </div>
            </div>
            <div className="px-2 sm:px-4 md:px-8 pb-8">
                <div className="bg-primary rounded-xl p-2 pt-4 md:p-6">
                    <div>
                        <div className="flex justify-between items-center px-4">
                            <h4>Dashboard</h4>
                            <select>
                                <option>Filters</option>
                            </select>
                        </div>
                        <div id="charts" className="flex flex-wrap justify-between">
                            <Highlight icon="attach_money" link="true" value="$1400" stat='45%' stat_icon='trending_up' />
                            <Highlight icon="account_balance" link="true" value="$232,400" stat='64%' stat_icon='north_east' />
                            <Highlight icon="receipt" link="true" value="$2400" stat='634' stat_icon='timeline' />
                            <Highlight icon="group" link="true" value="12" stat='7%' stat_icon='trending_up' />
                        </div>
                        <div className="w-full flex flex-wrap ">
                            <div className="flex-grow w-full lg:w-1/2 xl:w-3/4">
                                <div id="market-overview">
                                    <div className="p-4">
                                        <div className="market-header flex items-center">
                                            <div className="flex-grow">
                                                <h5>Market Overview</h5>
                                                <p className="text-superlight text-xs">Price value update</p>
                                            </div>

                                            <select>
                                                <option value="monthly">
                                                    Monthly (2020)
                                                </option>
                                            </select>
                                        </div>
                                        <div className="w-full">
                                            <Chart />
                                        </div>
                                    </div>
                                </div>
                                <div id="recent-activities" className="p-4">
                                    <h4 className="py-4">Recent Activities</h4>
                                    <div className="bg-background shadow rounded-xl p-4 py-6 overflow-y-auto">
                                        <ExpandedTable />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 xl:w-1/4 w-full p-4">
                                <Table />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
}