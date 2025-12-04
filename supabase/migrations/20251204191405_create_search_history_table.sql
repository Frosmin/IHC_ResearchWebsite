/*
  # Create search history table

  1. New Tables
    - `search_history`
      - `id` (uuid, primary key)
      - `query` (text, the search term)
      - `type` (text, category: centro, laboratorio, investigacion, or general)
      - `result_count` (integer, number of results found)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `search_history` table
    - Add policy to allow anyone to read and create search records (public access for analytics)
*/

CREATE TABLE IF NOT EXISTS search_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  query text NOT NULL,
  type text DEFAULT 'general',
  result_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_search_history_query ON search_history(query);
CREATE INDEX IF NOT EXISTS idx_search_history_created_at ON search_history(created_at DESC);

ALTER TABLE search_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert searches"
  ON search_history
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public to read search history"
  ON search_history
  FOR SELECT
  TO anon, authenticated
  USING (true);
