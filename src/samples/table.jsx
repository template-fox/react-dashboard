import React from 'react'
export default ()=>{
    return <table>
    <thead>
        <tr>
            <td colSpan="2">Sell Order</td>
            <td className="text-right">
                <span className="material-icons cursor-pointer">more_vert</span>
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-left">Price</td>
            <td className="text-center">Amount</td>
            <td className="text-center">Total</td>
        </tr>
        <tr>
            <td className="text-left">31.89</td>
            <td className="text-center">0.05</td>
            <td className="text-center">$13,498</td>
        </tr>
        <tr>
            <td className="text-left">50.62</td>
            <td className="text-center">0.59</td>
            <td className="text-center">$12,366</td>
        </tr>
        <tr>
            <td className="text-left">81.55</td>
            <td className="text-center">0.07</td>
            <td className="text-center">$14,946</td>
        </tr>
        <tr>
            <td className="text-left">13.79</td>
            <td className="text-center">0.11</td>
            <td className="text-center">$10,358</td>
        </tr>
        <tr className="td-active ">
            <td className="text-left">32.08</td>
            <td className="text-center">0.65</td>
            <td className="text-center">$11,695</td>
        </tr>
        <tr>
            <td className="text-left">11.48</td>
            <td className="text-center">0.09</td>
            <td className="text-center">$12,152</td>
        </tr>
        <tr>
            <td className="text-left">27.95</td>
            <td className="text-center">0.57</td>
            <td className="text-center">$15,236</td>
        </tr>
        <tr>
            <td className="text-left">70.91</td>
            <td className="text-center">0.89</td>
            <td className="text-center">$14,137</td>
        </tr>
        <tr>
            <td className="text-left">64.77</td>
            <td className="text-center">0.84</td>
            <td className="text-center">$17,027</td>
        </tr>
        <tr>
            <td className="text-left">90.83</td>
            <td className="text-center">0.27</td>
            <td className="text-center">$13,085</td>
        </tr>
    </tbody>
</table>
}