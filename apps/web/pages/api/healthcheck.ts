const { db } = require("firebase-client-admin");
const { FieldValue } = require("firebase-admin/firestore");
import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  const appRef = db.collection("test").doc("1");
  const now = new Date();
  await appRef.set({ name: "test", lastUsed: FieldValue.serverTimestamp() });
  const appSnap = await appRef.get();
  const appData = appSnap.data();
  const lastUsed = appData.lastUsed.toDate();
  await appRef.delete();
  const curr = new Date();
  const session = await getSession({ req });
  res.status(200).json({
    db: {
      data: { ...appData, lastUsed },
      ping: lastUsed.valueOf() - now.valueOf(),
      pingTotal: curr.valueOf() - now.valueOf(),
      session,
    },
  });
};

export default handler;
