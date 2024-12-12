interface Env {
  MAPBOX_API_KEY: string;
}

export const env: Env = {
  MAPBOX_API_KEY: import.meta.env.VITE_MAPBOX_API_KEY,
};