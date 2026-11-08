# Homebase

Six paths. One mountain. A gamified life tracker for Wealth, Discipline, Vitality, Bonds, Craft and Lore, set in a hand-drawn world.

A static web app: GitHub Pages serves it, Supabase stores your progress and handles Google sign-in. Without Supabase settings it still runs and saves on the device only.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The whole app |
| `config.js` | Your Supabase URL and anon key |
| `assets/` | Artwork and app icons |
| `vendor/supabase.js` | Supabase client (v2.45.4), served locally |
| `manifest.webmanifest`, `sw.js` | Install to home screen; works offline after first load |
| `supabase/schema.sql` | Database table and privacy rules |

## Setup

### 1. Supabase project
Done: project **MCE (Main Character Energy)**, `docs` table created from `supabase/schema.sql`, and `config.js` filled in.

The anon key is meant to be public. Row-level security in the schema means each signed-in person can only read and write their own rows.

### 2. Google sign-in
1. In Google Cloud Console, create an OAuth client: **APIs & Services > Credentials > Create credentials > OAuth client ID**, type **Web application**. Set up the consent screen first if asked (External, app name Homebase).
2. Under **Authorised redirect URIs**, add the callback URL shown in Supabase at **Authentication > Sign In / Providers > Google** (it looks like `https://<project>.supabase.co/auth/v1/callback`).
3. Paste the Google **Client ID** and **Client secret** into that Supabase Google provider page and enable it.
4. In Supabase **Authentication > URL Configuration**, set **Site URL** to your Pages address, for example `https://<username>.github.io/homebase/`, and add it to **Redirect URLs**.

### 3. GitHub Pages
1. Push this folder to a GitHub repository named `homebase`.
2. **Settings > Pages**: Source **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The app goes live at `https://<username>.github.io/homebase/` within a minute or two.

### 4. Bring your data across
In the old version, or from the export file, use **Paths > Account > Import data**. Importing merges entries and never duplicates one.

## Install on your phone
Open https://conthescribe.github.io/homebase/ in Safari (iPhone) or Chrome (Android) and choose **Add to Home Screen**. It opens full screen like an app.

## Updating
Edit, commit and push; Pages redeploys automatically. After changing artwork, bump `CACHE` in `sw.js` (for example `homebase-v2`) so phones fetch the new files.
