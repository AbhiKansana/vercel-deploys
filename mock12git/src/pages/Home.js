import React from 'react'
import RepoTable from '../comp/Table'

const Home = ({data}) => {
  return (
    <div>
        <RepoTable data={data}/>
    </div>
  )
}

export default Home