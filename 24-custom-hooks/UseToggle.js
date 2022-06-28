import { useCallback, useState } from 'react';
export default function App() {
    // Usage
    const [isModalOpen, setIsModalOpen] = useToggle();
    return (
        <button onClick={setIsModalOpen}>
          {isModalOpen ? 'Close Modal' : 'Open Modal'} 
        </button>
    );
}
// Hook
const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state => !state), []);
    return [state, toggle]
}