// utils/mixpanel.t
import mixpanel from 'mixpanel-browser'


const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN!;

export const initMixpanel = () => {
  if (typeof window !== 'undefined' && MIXPANEL_TOKEN) {
    mixpanel.init(MIXPANEL_TOKEN, {
      debug: process.env.NODE_ENV === 'development',
    });
  }
};

export default mixpanel;
