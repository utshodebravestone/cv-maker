import { CVType } from "../types";
import { Action } from "./types";

export const appStateReducer = (state: CVType, action: Action): CVType => {
  const { type, payload } = action;

  switch (type) {
    case "ACTION_UPDATE":
      return payload;

    default:
      return state;
  }
};
