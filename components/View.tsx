import React from 'react'
import Ping from './Ping'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'
import { writeClient } from '@/sanity/lib/write-client'
import { unstable_after as after } from 'next/server'

const View = async({id}:{id:string}) => {

  const {views: Totalviews} = await client.withConfig({useCdn: false}).fetch(STARTUP_VIEWS_QUERY, {id})
 
  after(async ()=>  await writeClient.patch(id).set({views: Totalviews + 1}).commit())
 

  return (
    <div className="view-container">
        <div className="absolute -top-2 -right">
            <Ping/>
        </div>
        <p className="view-text">
            <span className="font-black">{formatNumber(Totalviews)}</span>
        </p>
    </div>
  )
}

export default View


function formatNumber(num: number) {
  if(num == 1) return `${num} view`;
  else return `${num} views`;
}