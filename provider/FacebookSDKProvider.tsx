'use client';

import { app } from 'firebase-admin';
import { useEffect } from 'react';

export default function FacebookSDKProvider({ children }: { children: React.ReactNode }) {
   
  const appId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID!
  

  useEffect(() => {
    if (window.FB) return;

    const loadFacebookSDK = () => {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/sdk.js';
      script.async = true;
      script.defer = true;
      script.id = 'facebook-jssdk';
      document.body.appendChild(script);
    };

    window.fbAsyncInit = function() {
      if (!window.FB) return;
      
      window.FB.init({
        appId: appId,
        cookie: true,
        xfbml: true,
        version: 'v18.0'
      });
      
      window.FB.AppEvents.logPageView();
    };

    loadFacebookSDK();

    return () => {
      const script = document.getElementById('facebook-jssdk');
      if (script) document.body.removeChild(script);
      delete (window as { fbAsyncInit?: () => void }).fbAsyncInit;
    };
  }, []);

  return <>{children}</>;
}