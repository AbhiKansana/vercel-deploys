import React from 'react'
import FollowerComp from '../comp/FollowerComp'

const Followers = ({data}) => {
  return (
    <div>
        <FollowerComp data={data}/>
    </div>
  )
}

export default Followers