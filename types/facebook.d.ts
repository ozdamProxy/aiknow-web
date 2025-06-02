// types/facebook.d.ts
declare global {
  interface Window {
    fbAsyncInit?: () => void;
    FB: {
      init: (params: {
        appId: string;
        cookie?: boolean;
        xfbml?: boolean;
        version: string;
      }) => void;
      login: (
        callback: (response: {
          authResponse?: {
            accessToken: string;
            expiresIn: number;
            signedRequest: string;
            userID: string;
          };
          status: string;
        }) => void,
        options?: { scope: string }
      ) => void;
      api: (
        path: string,
        params: { fields?: string },
        callback: (response: any) => void
      ) => void;
      AppEvents: {
        logPageView: () => void;
      };
      getLoginStatus: (
        callback: (response: {
          status: string;
          authResponse?: {
            accessToken: string;
            expiresIn: number;
            signedRequest: string;
            userID: string;
          };
        }) => void,
        force?: boolean
      ) => void;
      // Diğer ihtiyaç duyduğunuz metodları ekleyebilirsiniz
    };
  }
}

export {}; // Dosyanın bir modül olduğunu belirtmek için