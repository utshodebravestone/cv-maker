import { CVType } from "../types";

interface ActionUpdate {
  type: "ACTION_UPDATE";
  payload: CVType;
}

export const actionUpdate = (cv: CVType): ActionUpdate => ({
  type: "ACTION_UPDATE",
  payload: cv,
});

export type Action = ActionUpdate;
