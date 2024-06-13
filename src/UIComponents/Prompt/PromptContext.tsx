import React, { createContext, useState, useContext } from "react";

export type PromptProps = {
  title: string;
  texts: string[];
  values: string[];
  inputsNumber: number;
};

type PromptContextValue = {
  isOpen: boolean;
  props: PromptProps;
  openPrompt: (props: PromptProps) => Promise<string[]>;
  closePrompt: (inputs: string[]) => void;
};

const defaultValue: PromptContextValue = {
  isOpen: false,
  props: {
    title: "",
    texts: [],
    inputsNumber: 0,
    values: [],
  },
  openPrompt: () => Promise.resolve([]),
  closePrompt: ( inputs: string[]) => {}
};

const PromptContext = createContext<PromptContextValue>(defaultValue);

export const PromptContextProvider = ({ children }) => {
  const [prompt, setPrompt] = useState<Omit<PromptContextValue, 'openPrompt' | 'closePrompt'>>(defaultValue);
  const [resolvePromise, setResolvePromise] = useState<(value: string[]) => void>(() => {});

  const openPrompt = (props: PromptProps): Promise<string[]> => {
    return new Promise((resolve) => {
      setResolvePromise(() => resolve);
      setPrompt({
        isOpen: true,
        props,
      });
    });
  };

  const closePrompt = ( localInputs: string[]) => {
    setPrompt({
      ...prompt,
      isOpen: false, 
    });
    resolvePromise(localInputs);
  };

  return (
    <PromptContext.Provider value={{ ...prompt, openPrompt, closePrompt }}>
      {children}
    </PromptContext.Provider>
  );
};

// Custom hook to use the PromptContext
export const usePrompt = () => {
  return useContext(PromptContext);
};