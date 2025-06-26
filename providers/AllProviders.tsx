import { tokenCache } from "@/cache";
import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

export default function AllProviders({ children }: { children: ReactNode }) {
    const publishKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
    const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL as string);
    return (
        <ClerkProvider tokenCache={tokenCache} publishableKey={publishKey}>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                <ClerkLoaded>
                    {children}
                </ClerkLoaded>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}