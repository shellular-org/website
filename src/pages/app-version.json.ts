import { APP_STORE_URL, PLAY_STORE_URL } from "@/data/appLinks";

export async function GET() {
  return new Response(
    JSON.stringify({
      android: {
        version: "0.0.13",
        versionCode: 13,
        storeUrl: PLAY_STORE_URL,
      },
      ios: {
        version: "0.0.13",
        versionCode: 13,
        storeUrl: APP_STORE_URL,
      },
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
