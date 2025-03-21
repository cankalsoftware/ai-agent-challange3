import { featureFlagEvents } from "@/features/flags";
import { client } from "@/lib/schematic";


export async function checkFeatureUsageLimit(
    userId: string,
    eventSubtype : string
): Promise<{success: boolean; error?: string}> {
    try{
        const entitlements = await client.entitlements.getFeatureUsageByCompany({
            keys: {
                id:userId,
            }
        })

        const feature = entitlements.data.features.find(
            (entitlement) => entitlement.feature?.eventSubtype === eventSubtype
        )

        if(!feature) {
            return {
                success: false,
                error: "Feature not found in your durrent plan, please upgrade to a higher plan",
            };
        }

        const {usage, allocation} = feature;

        if( usage === undefined || allocation === undefined) {
            return {
                success: false,
                error: "Usage or allocation not found for the feature - Contact support",
            };
        }
        
        const hasExceededUsageLimit = usage >= allocation;
        
        if(hasExceededUsageLimit) {
                // find display friendly  message
                const featureName =
                Object.entries(featureFlagEvents)
                        .find(([, value]) => value.event === eventSubtype
                    )?.[0] || eventSubtype;

                return {
                    success: false,
                    error: `You have exceeded your limit for ${featureName}. Please upgrade to a higher plan to continue.`,
                };
        }

        return {
            success: true,
        };

    } catch (error){
        console.error("Error checking feature usage limit:", error);
        return {
            success: false,
            error: "An error occurred while checking feature usage limit",
        };
    }
    
    
}
