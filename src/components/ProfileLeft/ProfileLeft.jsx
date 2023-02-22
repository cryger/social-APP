import React from 'react'
import { FollowersCard } from '../FollowersCard/FollowersCard'
import { InfoCard } from '../InfoCard/InfoCard'
import { LogoSearch } from '../LogoSearch/LogoSearch'

export const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}
