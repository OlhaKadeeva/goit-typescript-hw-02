export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface UnsplashApiResponse {
  results: UnsplashImage[];
  total_pages: number;
}
