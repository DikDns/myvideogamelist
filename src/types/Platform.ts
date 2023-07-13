import { PlatformLogo } from "./PlatformLogo";

export type Platform = {
  id: number;
  abbreviation?: string;
  alternative_name?: string;
  category?: number;
  created_at?: number;
  name?: string;
  platform_logo?: PlatformLogo;
  slug?: string;
  updated_at?: number;
  url?: string;
  checksum?: string;
};
