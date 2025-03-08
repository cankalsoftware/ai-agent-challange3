import { getTemporaryAccessToken } from "@/actions/getTemporaryAccessToken";
import SchematicEmbed from "./SchematicEmbed";

async function SchematicComponent({componentId}: {componentId: string}) {
    if (!componentId) {
        throw new Error("Component ID is required");
    }
    // Get access token
    const accessToken = await getTemporaryAccessToken();
    if (!accessToken) {
        throw new Error("Access token is required");
    }

  return <SchematicEmbed accessToken={accessToken} componentId={componentId} />
}

export default SchematicComponent