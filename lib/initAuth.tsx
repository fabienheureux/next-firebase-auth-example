import { init } from 'next-firebase-auth';

const firebaseClientInitConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const initAuth = () => {
    init({
        authPageURL: '/auth',
        appPageURL: '/',
        loginAPIEndpoint: '/api/login', // required
        logoutAPIEndpoint: '/api/logout', // required
        onLoginRequestError: (err) => {
            console.error(err);
        },
        onLogoutRequestError: (err) => {
            console.error(err);
        },
        firebaseAuthEmulatorHost: 'localhost:9099',
        useFirebaseAdminDefaultCredential: true,
        firebaseClientInitConfig,
        cookies: {
            name: 'CultureGreen', // required
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: false,
            // secure: process.env.NODE_ENV !== 'development',
            signed: false,
            // signed: process.env.NODE_ENV !== "development",
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            // keys: [
            //     process.env.COOKIE_SECRET_CURRENT,
            //     process.env.COOKIE_SECRET_PREVIOUS,
            // ],
        },
        onVerifyTokenError: (err) => {
            console.error(err);
        },
        onTokenRefreshError: (err) => {
            console.error(err);
        },
    } as any);
};

export default initAuth;
