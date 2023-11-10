const config = {
	firebase: {
		apiKey: process.env.FIREBASE_API_KEY || "AIzaSyCLzV9LoxsPFpolopsjJ6IL1SpoWTcBI3k",
		authDomain: process.env.FIREBASE_AUTH_DOMAIN || "playlisteca.firebaseapp.com",
		projectId: process.env.FIREBASE_PROJECT_ID || "playlisteca",
		storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "playlisteca.appspot.com",
		messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "116062692941",
		appId: process.env.FIREBASE_APP_ID || "1:116062692941:web:94be35a708b298c66f9e04",
		measurementId: process.env.FIREBASE_MEASUREMENT_ID || "G-PPQ60S0Y5P",
	},
	domain: {},
};

export default config;
