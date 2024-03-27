'use client'

import Image from "next/image";
import GridCard from "./Card";
import { tipsData } from "@/constants";

const Grid = () =>{
    return(

<div className="lg:md:grid flex flex-col lg:md:grid-cols-3 gap-10">
        {tipsData.slice(0,3).map((tip)=>{

            return(
                <div>
                    <GridCard image={`/assets/grid/${tip.path}`} label={tip.label} text={tip.text}/>
                </div>
            )
        })}
</div>
    )
}
export default Grid