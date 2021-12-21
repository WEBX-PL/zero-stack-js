import { UiButton } from "ui";

import { GetStaticProps } from "next";
import { converter, db } from "firebase-client-admin";
import { FC } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const appRef = db.collection("article").doc("1").withConverter(converter);
  await appRef.set({ title: "Test Article Title", lastUsed: new Date() });
  const appSnap = await appRef.get();
  const appData = appSnap.data();
  await appRef.delete();
  return {
    props: {
      data: appData,
    },
  };
};

const Page: FC<{ data: { title: string; lastUsed: Date } }> = ({ data }) => {
  const { title, lastUsed } = data;
  return (
    <div>
      <h1>{title}</h1>
      <h2 suppressHydrationWarning>
        {new Date(lastUsed).toLocaleDateString()}
      </h2>
      <UiButton />
    </div>
  );
};

export default Page;
