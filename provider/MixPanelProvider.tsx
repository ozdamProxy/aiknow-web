'use client';

import { useEffect } from 'react';
import { initMixpanel } from '../utils/mixPanel';

export const MixpanelProvider = () => {
  useEffect(() => {
    initMixpanel();
  }, []);

  return null;
};
