import React from 'react'
import gear from './gear.gif'

function Spinner() {

    return (
      <div className='text-center'>
        <img src={gear} alt='loading'></img>
      </div>
    )
}

export default Spinner