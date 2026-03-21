-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Properties table
create table if not exists properties (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz default now(),
  title text not null,
  description text,
  price numeric not null,
  price_label text,
  district text not null,
  location_name text,
  property_type text not null,
  area_bigha numeric,
  area_sqft numeric,
  latitude numeric,
  longitude numeric,
  outside_hp_eligible boolean default true,
  is_featured boolean default false,
  status text default 'active' check (status in ('active', 'sold', 'pending')),
  photos text[] default '{}',
  road_access text,
  water boolean default false,
  electricity boolean default false
);

-- Enquiries table
create table if not exists enquiries (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz default now(),
  name text not null,
  phone text not null,
  city text not null,
  is_hp_resident boolean default false,
  property_type text,
  budget text,
  message text,
  property_id uuid references properties(id) on delete set null,
  is_read boolean default false
);

-- Row Level Security
alter table properties enable row level security;
alter table enquiries enable row level security;

-- Properties: public read
create policy "Public can read active properties"
  on properties for select
  using (status = 'active');

-- Properties: authenticated users can do everything
create policy "Authenticated users can manage properties"
  on properties for all
  using (auth.role() = 'authenticated');

-- Enquiries: anyone can insert
create policy "Anyone can submit enquiry"
  on enquiries for insert
  with check (true);

-- Enquiries: authenticated users can read and update
create policy "Authenticated users can manage enquiries"
  on enquiries for all
  using (auth.role() = 'authenticated');

-- Storage bucket for property images
insert into storage.buckets (id, name, public)
values ('property-images', 'property-images', true)
on conflict (id) do nothing;

-- Storage policy: authenticated can upload
create policy "Authenticated can upload property images"
  on storage.objects for insert
  with check (bucket_id = 'property-images' and auth.role() = 'authenticated');

-- Storage policy: public can view
create policy "Public can view property images"
  on storage.objects for select
  using (bucket_id = 'property-images');
