import { create } from "zustand";

const mainStore = create((set, get) => ({
  message: "",
  setMessage: (newMessage) => set({ message: newMessage }),

  hand: "",
  hands: ["🫱", "✌️", "✊"],
  setHand: (newHand) => set({ hand: newHand }),

  playerResult: 0,
  addPlayerResult: () =>
    set((state) => ({ playerResult: state.playerResult + 1 })),

  computerResult: 0,
  addComputerResult: () =>
    set((state) => ({ computerResult: state.computerResult + 1 })),

  game: [],
  playedGame: (result) => set((state) => ({ game: [...state.game, result] })),
}));

export default mainStore;
