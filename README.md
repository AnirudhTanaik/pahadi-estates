# Pahadi Estates

Premium real estate website for a property brokerage in Himachal Pradesh.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database & Auth**: Supabase
- **Deployment**: Vercel

## Setup Instructions

### 1. Clone and install

```bash
git clone <repo>
cd pahadi-estates
npm install
```

### 2. Configure Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **Settings → API** and copy your Project URL and anon key
3. Create `.env.local` in the project root:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
NEXT_PUBLIC_WHATSAPP_NUMBER=919800000000
```

### 3. Set up the database

In Supabase Dashboard → SQL Editor, run the contents of:
1. `supabase/migrations/001_schema.sql` — creates tables and policies
2. `supabase/seed.sql` — adds 6 sample properties

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Set up admin account

In Supabase Dashboard → Authentication → Users → Add User, create an admin user with an email and password. Use these credentials to log in at `/admin/login`.

## Deploying to Vercel

1. Push your code to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Add the same environment variables from `.env.local` in Vercel project settings
4. Deploy — Vercel will auto-build and deploy

## Admin Panel

Access the admin panel at `/admin/login` with your Supabase admin credentials.

- **Dashboard**: Stats overview and recent enquiries
- **Properties**: Add, edit, delete listings; toggle featured status
- **Enquiries**: View all enquiries, mark read/unread

## Adding Properties

1. Go to `/admin/login`
2. Navigate to Properties → Add New
3. Fill in all details and upload photos
4. Photos are stored in Supabase Storage (bucket: `property-images`)

## WhatsApp Integration

Update `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` with your WhatsApp business number in international format (e.g., `919816XXXXXX` for +91 98XX XXXXXX).
