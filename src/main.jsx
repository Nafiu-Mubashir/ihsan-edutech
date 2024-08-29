import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'; // Import Redux provider
import { Router } from './Router.jsx'; // Import your custom router
import { store } from './lib/index.js';

// Set up your query client with default options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      staleTime: 60000,
      cacheTime: 65000,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

// Render your application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap with Redux provider */}
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <RouterProvider router={Router} />
          <ToastContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
