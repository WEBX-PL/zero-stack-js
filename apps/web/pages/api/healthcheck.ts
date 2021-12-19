const { db } = require("firebase-client-admin");
const { FieldValue } = require("firebase-admin/firestore");

const handler = async (req, res) => {
  const appRef = db.collection("test").doc("1");
  const now = new Date();
  await appRef.set({ name: "test", lastUsed: FieldValue.serverTimestamp() });
  const appSnap = await appRef.get();
  const appData = appSnap.data();
  const lastUsed = appData.lastUsed.toDate();
  await appRef.delete();
  res.status(200).json({
    db: {
      data: { ...appData, lastUsed },
      ping: lastUsed.valueOf() - now.valueOf(),
      pingTotal: new Date().valueOf() - now.valueOf(),
    },
  });
};

export default handler;
