type Platform = {
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

export type PlatformLogo = {
  id: number;
  alpha_channel?: boolean;
  animated?: boolean;
  checksum?: string;
  height?: number;
  image_id?: string;
  url?: string;
  width?: number;
};

export default Platform;
