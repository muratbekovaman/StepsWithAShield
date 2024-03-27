import React from 'react'

import { tipsData } from "@/constants";
import TipCard from '@/components/shared/tips/TipCard';
function Tips() {
  return (
    <>
    {tipsData.map((tip, index)=>{

        return(
            <div>
                <TipCard key={tip.label} index={index+1} image={`/assets/grid/${tip.path}`} label={tip.label} text={tip.text}/>
            </div>
        )
    })}
    </>
  )
}

export default Tips