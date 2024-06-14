import { useConfigStore } from './stores'
import { routeTree } from '@/routeTree.gen'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
  context: {
    config: {
      auth: {
        id: 0
      },
    },
    queryClient
  }
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  const config = useConfigStore()
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ config }}/>
    </QueryClientProvider>
  )
}

export default App
