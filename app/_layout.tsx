import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="movies/[id]" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="movies/prediction" 
        options={{ 
          headerShown: false,
          presentation: 'modal' 
        }} 
      />
      <Stack.Screen 
        name="menu" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="sidenav" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}