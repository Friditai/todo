import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyAuDc5HH8jLTUtAFP8JKizviEGs1Fu5lvU",
  authDomain: "todo-app-cf68b.firebaseapp.com",
  projectId: "todo-app-cf68b",
  storageBucket: "todo-app-cf68b.appspot.com",
  messagingSenderId: "267603978977",
  appId: "1:267603978977:web:0ed53ae11b1e0836da25a0",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore()),
    ]),
  ],
};
