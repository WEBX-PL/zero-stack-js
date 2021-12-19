import { UiButton } from "ui";

export default function Web() {
  const welcomeMessage = "hey!";
  console.log("My Application Version", process.env.NEXT_PUBLIC_MACZAX);
  return (
    <div>
      <h1>{welcomeMessage}</h1>
      <UiButton />
    </div>
  );
}
