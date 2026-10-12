
const { initializeApp, cert } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const { getDatabase } = require("firebase-admin/database");

const serviceAccount = require(
  "C:/Users/kaush/firebase-secrets/serviceAccountKey.json"
);

const uid = process.argv[2];

if (!uid) {
  console.error("Usage: node create-admin.cjs YOUR_AUTH_UID");
  process.exit(1);
}

const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://babbihar-23fcc-default-rtdb.firebaseio.com"
});

async function main() {
  try {
    await getAuth(app).getUser(uid);

    await getDatabase(app)
      .ref(`admins/${uid}`)
      .set(true);

    console.log("SUCCESS: Admin added successfully.");
  } catch (error) {
    console.error("ERROR:", error.code || "", error.message);
    process.exitCode = 1;
  } finally {
    await app.delete();
  }
}

main();