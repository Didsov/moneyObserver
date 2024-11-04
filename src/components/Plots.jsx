import React from 'react'
import CumulativePlot from './plots/CumulativePlot'
import CategoryLinePlot from './plots/CategoryLinePlot'
import CategoryDonPlus from './plots/CategoryDonPlus'
import CategoryDonMinus from './plots/CategoryDonMinus'





const Plots = ({transferList , categoryList}) => {

  return (
    <div className='w-full h-full p-4  grid md:grid-cols-1 xl:grid-cols-2 items-center text-center justify-center gap-4'>
        <div className="w-full h-full max-h-[75%] xl:col-span-2 col-span-1 items-center flex justify-center">
        
        <CumulativePlot  transferList={transferList} categoryList={categoryList}/>
        </div>
        
        <div className="w-full h-64 items-center flex  justify-center">
        <CategoryDonPlus transferList={transferList} categoryList={categoryList}/>
        </div>
        <div className="w-full h-64 items-center flex  justify-center">
        <CategoryDonMinus transferList={transferList} categoryList={categoryList}/>

        </div>
    </div>
  )
}

export default Plots