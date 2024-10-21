import { Stack } from 'expo-router/stack';
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { store } from '../store/store';
export default function Layout() {
  const queryClient = new QueryClient();
  
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      </QueryClientProvider>
    </Provider>
  );
}
