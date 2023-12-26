import React from 'react'
import loading from './load.gif'
 const Loading = () =>  {
    
        return (
            <div className='text-center'>
               <img src={loading} alt="loading..." style={{width:"50px"}} />
            </div>
        )
    
}

export default Loading;
