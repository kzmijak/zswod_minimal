import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { rootPersistConfig, rootReducer } from './rootReducer';

// ----------------------------------------------------------------------

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);
export { store, persistor };
export type { RootState, AppDispatch };
