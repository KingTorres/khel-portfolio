'use client'; // This directive is required to isolate the provider on the client side

import { Provider } from 'react-redux';
import { store } from '@/src/stores/navProvider';

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}