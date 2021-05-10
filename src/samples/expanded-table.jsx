import React from 'react'
import Icon from '../components/icons/theme'
import Status from '../components/others/status'
export default ()=><table>
<tbody>
    <tr>
        <td>
            <Icon dark icon='north_west'/>
        </td>
        <td>Flux Coin</td>
        <td>10:42:23 AM</td>
        <td>+1,454</td>
        <td>
            <Status type="success"/>
        </td>
    </tr>
    <tr>
        <td><Icon icon="north_west" dark/></td>
        <td>Block Chain Support</td>
        <td>04:02:22 PM</td>
        <td>+22,000</td>
        <td>
            <Status type='pending'/>
        </td>
    </tr>
    <tr>
        <td><Icon icon="north_west" dark/></td>
        <td>Customer support Support</td>
        <td>08:02:72 PM</td>
        <td>+45,900</td>
        <td>
            <Status type='info'/>
        </td>
    </tr>
</tbody>
</table>
