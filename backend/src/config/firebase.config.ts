import admin from 'firebase-admin';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Ensure env vars are loaded
dotenv.config();

let db: admin.firestore.Firestore;
let auth: admin.auth.Auth;

try {
    console.log('[firebase-config]: Attempting Firebase Admin SDK initialization...');
    const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
    if (!serviceAccountPath) {
        throw new Error('GOOGLE_APPLICATION_CREDENTIALS environment variable is not set.');
    }

    // Resolve absolute path in case relative path is provided
    const resolvedPath = path.resolve(serviceAccountPath);

    if (!fs.existsSync(resolvedPath)) {
        throw new Error(`Firebase service account file not found at path: ${resolvedPath}`);
    }
    const serviceAccount = JSON.parse(
      fs.readFileSync(resolvedPath, 'utf8')
      ) as admin.ServiceAccount & { project_id?: string };

    const projectId =
    process.env.FIREBASE_PROJECT_ID ||
    serviceAccount.projectId ||
    serviceAccount.project_id;
    console.log(
    '[firebase-config]: using projectId =',
    projectId
);
    
 

    
    console.log('[firebase-config]: using projectId =', projectId);

    if (!projectId) {
        throw new Error('Firebase project ID is not configured in FIREBASE_PROJECT_ID or service account file.');
    }

    // Check if already initialized (useful for hot-reloading environments)
    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            projectId,
        });
        console.log('[firebase-config]: Firebase Admin SDK initialized successfully.');
    } else {
        console.log('[firebase-config]: Firebase Admin SDK already initialized.');
    }

    // Get the initialized services
    db = admin.firestore();
    auth = admin.auth();

} catch (error) {
    console.error('[firebase-config]: FATAL Error initializing Firebase Admin SDK:', error);
    throw error;
}

// Export the initialized services
export { db, auth };
