'use client';

import { FeatureFlag } from "@/features/flags";
import { Progress } from "@/components/ui/progress";
import { useSchematicEntitlement, useSchematicIsPending } from "@schematichq/schematic-react";


function Usage({
    featureFlag,
    title,


}:{
    featureFlag: FeatureFlag;
    title: string;

}) {
    const isPending = useSchematicIsPending();
    const {
        featureAllocation,
        featureUsage,
        value: isFeatureEnabled,
    } = useSchematicEntitlement(featureFlag);

const hasUsedAllTokens = featureUsage &&
featureAllocation &&
featureUsage>= featureAllocation;

if (isPending) {
return <div className="text-gay-500 text-center py-4">Loading...</div>
}

if(hasUsedAllTokens){
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6">
            <div className="flex items-center justify-between">
                <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
                <div className='px-4 py-2 bg-red-50 rounded-lg'>
                    <span className='text-red-700 font-medium'>{featureUsage}</span>
                    <span className='text-red-400 mx-2'>/</span>
                    <span className='font-medium text-gray-700'>/{featureAllocation}</span>
                </div>
          </div>

            <div className="relative">
                <Progress 
                value={100}
                className="h-3 bg-gray-100 rounded-full [&>*]:bg-red-600"
                />
                
                    <p className="text-sm text-red-500 mt-2">
                        You have used all your tokens for. Please upgrade your plan to continue using this feature
                    </p>
             
             
            </div>
        </div>
    )
}

if(!isFeatureEnabled){
return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className='text-xl font-semibold text-gray-800'>{title}</h2>
        <div className="px-4 py-2 bg-gray-50 rounded-lg">
            <span className="text-gray-700 font-medium">Feature is disabled</span>
        </div>

        <div className="relative">
            <Progress 
            value={0}
            className="h-3 bg-gray-100 rounded-full [&>*]:bg-gray-600"
            />
        <p className="text-sm text-gray-500 mt-2">
            This feature is not enabled for your plan. Please upgrade your plan to continue using this feature
        </p>
        </div>
    </div>
)
}

const progress = ((featureUsage || 0)  / (featureAllocation || 1)) * 100;

const getProgressColor = (percent:number) => {
    if(percent >= 80) return '[&>*]:bg-red-600';
    if(percent >= 50) return '[&>*]:bg-yellow-500';
    return '[&>*]:bg-green-500';
}

const progressColor = getProgressColor(progress);

  return (
    <div>

<div className="flex justify-between items-center mb-4 gap-4">
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    <div className="px-4 py-2 bg-gray-50 rounded-lg">
        <span className="text-gray-700 font-medium">{featureUsage} / {featureAllocation}</span>
    </div>
</div>

<div className="relative">
    <Progress 
    value={progress}
    className={`h-3 bg-gray-100 rounded-full ${progressColor}`}
    />
    {progress >= 100 ? (
        <p className="text-sm text-red-500 mt-2">
            You have used all your tokens for this feature. Please upgrade your plan to continue using this feature
        </p>
    ) : progress >= 80 ?(
        <p className="text-sm text-gray-500 mt-2">
            Warning : You have used {progress.toFixed(2)}% of your tokens for this feature
        </p>
    ): null}
</div>





    </div>
  )
}

export default Usage