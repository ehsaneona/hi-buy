'use client';

import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from 'react';

interface ContextProps {
    frameIndex: number;
    setFrameIndex: Dispatch<SetStateAction<number>>;
    manuallyFrameIndex: number;
    setManuallyFrameIndex: Dispatch<SetStateAction<number>>;
}

const GlobalContext = createContext<ContextProps>({
    frameIndex: 0,
    setFrameIndex: (): number => 0,
    manuallyFrameIndex: 0,
    setManuallyFrameIndex: (): number => 0,
});

export const GlobalContextProvider = ({ children }) => {
    const [frameIndex, setFrameIndex] = useState(0);
    const [manuallyFrameIndex, setManuallyFrameIndex] = useState(null);

    return (
        <GlobalContext.Provider
            value={{
                frameIndex,
                setFrameIndex,
                manuallyFrameIndex,
                setManuallyFrameIndex,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
