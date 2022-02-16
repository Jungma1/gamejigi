import { useState } from 'react';

export type SettingModeType = 'default' | 'edit';

export function useSetting() {
  const [mode, setMode] = useState<SettingModeType>('default');

  return { mode, setMode };
}
