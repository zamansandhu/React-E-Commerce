import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import './Loading.css'

export default function Loading() {

    const scalatonCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    return (
        <div className='skelton' >
            {
                scalatonCount.map(() => (
                    <div>
                        <Skeleton variant="rectangular" width={250} height={170} />
                        <Skeleton width="90%" />
                        <Skeleton width="70%" />
                        <Skeleton width="20%" />
                    </div>
                ))
            }
        </div>
    )
}
