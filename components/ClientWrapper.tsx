"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";
import SchematicWrapped from "./SchematicWrapped";
import { ConvexClientProvider } from "./ConvexClientProvider";


export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const schematicPubKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;

  if (!schematicPubKey) {
    throw new Error(
      "NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY is not set.Please add it your .env.local file"
    );
  }

  return (
  //<ClerkProvider> 
    <ConvexClientProvider>
    <SchematicProvider publishableKey={schematicPubKey}>
        <SchematicWrapped>
          {children}
        </SchematicWrapped>
    </SchematicProvider>
    </ConvexClientProvider>
  //</ClerkProvider>
   );
}
