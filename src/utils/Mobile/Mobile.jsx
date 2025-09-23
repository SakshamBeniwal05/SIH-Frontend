import React from 'react'
import './Mobile.css'
import { IconBatteryVerticalFilled, IconAntennaBars5, IconNumber10Small, IconNumber25Small } from '@tabler/icons-react';

const Mobile = ({children}) => {
    return (
        <div className='h-[800px] w-[500px] border-2 rounded-3xl bg-[#1a191978] px-2'>
            <div className='flex justify-between pt-4'>
                <div className='flex'>
                    <IconNumber10Small />:
                    <IconNumber25Small />
                </div>
                <div className='flex'>
                    <IconAntennaBars5 />
                    <IconBatteryVerticalFilled />
                </div>
            </div>
            <div className='bg-[red] my-2'>
                {children}
            </div>
        </div>
    )
}

export default Mobile