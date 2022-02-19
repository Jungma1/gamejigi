import { useState, useCallback } from 'react';

export default function useInput(initialValue: string) {
  const [input, setInput] = useState(initialValue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInput(e.target.value);
    },
    []
  );

  const onReset = useCallback(() => setInput(''), []);

  return [input, onChange, onReset]
}
