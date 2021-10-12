import { createOvermind } from "overmind";
import { createActionsHook, createStateHook } from "overmind-react";

export const useOvermindAction = createActionsHook();
export const useOvermindState = createStateHook();

export const overmind = createOvermind({
  state: {
    currentStep: 1,
    usename: "",
    email: "",
    password: "",
  },
  actions: {
    updateStep({ state }, step) {
      state.currentStep = step;
    },
    updateEmail({ state }, email) {
      state.email = email;
    },
    updateUsername({ state }, username) {
      state.username = username;
    },
    updatePassword({ state }, password) {
      state.password = password;
    },
  },
});
