import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";


export default function InitalLayout() {
    const { isLoaded, isSignedIn } = useAuth()

    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded) return;

        const authSecrren = segments[0] === "(auth)";

        if (!authSecrren && !isSignedIn) router.replace("/(auth)/login");
        else if (isSignedIn && authSecrren) router.replace("/(tabs)/home");

    }, [isLoaded, segments, isSignedIn])

    if (!isLoaded) return null;

    return <Stack screenOptions={{ headerShown: false }} />
}