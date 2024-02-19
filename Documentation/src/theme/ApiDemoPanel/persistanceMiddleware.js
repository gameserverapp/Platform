import { setAuthData, setSelectedAuth } from "./Authorization/slice";
import { setServer, setServerVariable } from "./Server/slice";
import { createStorage, hashArray } from "./storage-utils";
export function createPersistanceMiddleware(options) {
  const persistanceMiddleware = (storeAPI) => (next) => (action) => {
    const result = next(action);
    const state = storeAPI.getState();
    const storage = createStorage(options?.authPersistance);
    if (action.type === setAuthData.type) {
      for (const [key, value] of Object.entries(state.auth.data)) {
        if (Object.values(value).filter(Boolean).length > 0) {
          storage.setItem(key, JSON.stringify(value));
        } else {
          storage.removeItem(key);
        }
      }
    }
    if (action.type === setSelectedAuth.type) {
      if (state.auth.selected) {
        storage.setItem(
          hashArray(Object.keys(state.auth.options)),
          state.auth.selected
        );
      }
    }
    if (action.type === setServer.type) {
      if (state.server.value?.url) {
        // FIXME What to use as key?
        storage.setItem(
          `docusaurus.openapi.server/${state.server.value?.url}`,
          JSON.stringify(state.server.value)
        );
      }
    }
    if (action.type === setServerVariable.type) {
      if (state.server.value?.url) {
        storage.setItem(
          `docusaurus.openapi.server/${state.server.value?.url}`,
          JSON.stringify(state.server.value)
        );
      }
    }
    return result;
  };
  return persistanceMiddleware;
}
