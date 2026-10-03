// this env variable will come from clerk JWT. 
// and the template will be link to Convex env variable
if (!process.env.CLERK_ISSUER_URL) {
    throw new Error("CLERK_ISSUER_URL is not set");
}


const authConfig = {
    providers: [
      {
        domain: process.env.CLERK_ISSUER_URL ?? '',
        // this is the JWT template name.
        applicationID: "convex",
      },
    ]
  };

  export default authConfig;