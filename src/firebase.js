// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // 👈  이 줄을 꼭 추가하세요!
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChzVrsVtoJjAdT5-5UXnsgAd5tD1jUGpM",
    authDomain: "stage-view-c3457.firebaseapp.com",
    projectId: "stage-view-c3457",
    storageBucket: "stage-view-c3457.firebasestorage.app",
    messagingSenderId: "234052284915",
    appId: "1:234052284915:web:959b897762a8c3c416e286",
    measurementId: "G-BFTDV4SY81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ⭐ 데이터베이스(db)를 내보내서 다른 파일들이 쓸 수 있게 함
export const db = getFirestore(app);