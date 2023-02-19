import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { categoriesApi } from './apis/api';

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(categoriesApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchCategoriesQuery } from './apis/api';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
