import { create } from 'zustand';

export const EGG_IDS = {
  GRANDMASTER_TERMINAL: 1,
  KONAMI_CODE: 2,
  AFTER_MIDNIGHT: 3,
  DIGITAL_DETOX: 4,
  PHONE_FLUSH: 5,
  LABRADOR_CURSOR: 6,
  BE_HERE_NOW: 7,
  MATRIARCH_VEENA: 8,
  BIRTH_CERT: 9,
  NOT_FOUND_404: 10,
  MARSOFT_TAPE: 11,
  BRYAN_JOHNSON: 12,
};

export const useEasterEggStore = create((set) => ({
  foundEggs: new Set(),
  terminalActive: false,
  konamiActive: false,
  marsoftActive: false,
  afterMidnightActive: false,
  digitalDetoxActive: false,
  labradorCursorActive: false,
  bryanPopupActive: false,
  birthCertActive: false,

  unlockEgg: (eggId) =>
    set((state) => {
      const newSet = new Set(state.foundEggs);
      newSet.add(eggId);
      return { foundEggs: newSet };
    }),

  setTerminalActive: (active) => set({ terminalActive: active }),
  setKonamiActive: (active) => set({ konamiActive: active }),
  setMarsoftActive: (active) => set({ marsoftActive: active }),
  setAfterMidnightActive: (active) => set({ afterMidnightActive: active }),
  setDigitalDetoxActive: (active) => set({ digitalDetoxActive: active }),
  setLabradorCursorActive: (active) => set({ labradorCursorActive: active }),
  setBryanPopupActive: (active) => set({ bryanPopupActive: active }),
  setBirthCertActive: (active) => set({ birthCertActive: active }),
}));
