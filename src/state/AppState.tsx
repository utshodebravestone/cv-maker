import {
  createContext,
  useContext,
  PropsWithChildren,
  useReducer,
  Dispatch,
} from "react";
import { exampleCV } from "./exampleCV";
import { appStateReducer } from "./reducer";
import { CVType } from "../types";
import { Action } from "./types";

interface AppState {
  cv: CVType;
  dispatch: Dispatch<Action>;
}

const AppStateContext = createContext({} as AppState);

// eslint-disable-next-line react-refresh/only-export-components
export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(appStateReducer, exampleCV);

  return (
    <AppStateContext.Provider value={{ cv: state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
