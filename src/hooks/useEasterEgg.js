import { create } from 'zustand';

export const EGG_IDS = {
  PHONE_FLUSH: 5,
  MATRIARCH_VEENA: 8,
  BIRTH_CERT: 9,
};

export const useEasterEggStore = create((set) => ({
  foundEggs: new Set(),
  birthCertActive: false,

  unlockEgg: (eggId) =>
    set((state) => {
      const newSet = new Set(state.foundEggs);
      newSet.add(eggId);
      return { foundEggs: newSet };
    }),

  setBirthCertActive: (active) => set({ birthCertActive: active }),
}));
