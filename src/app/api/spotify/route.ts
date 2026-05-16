export const dynamic = "force-static";

const TOKEN_URL  = "https://accounts.spotify.com/api/token";
const TRACKS_URL = "https://api.spotify.com/v1/me/top/tracks?limit=3&time_range=short_term";

export async function GET() {
  const clientId     = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return Response.json({ configured: false, tracks: [] });
  }

  try {
    const basic    = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    const tokenRes = await fetch(TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
    });
    const { access_token } = (await tokenRes.json()) as { access_token: string };

    const tracksRes = await fetch(TRACKS_URL, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    const { items } = (await tracksRes.json()) as { items: SpotifyTrack[] };

    const tracks = (items ?? []).map((t) => ({
      name:     t.name,
      artist:   t.artists.map((a) => a.name).join(", "),
      url:      t.external_urls.spotify,
      duration: formatMs(t.duration_ms),
    }));

    return Response.json({ configured: true, tracks });
  } catch {
    return Response.json({ configured: false, tracks: [] });
  }
}

function formatMs(ms: number) {
  const m = Math.floor(ms / 60000);
  const s = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  return `${m}:${s}`;
}

interface SpotifyTrack {
  name: string;
  duration_ms: number;
  artists: { name: string }[];
  external_urls: { spotify: string };
}
