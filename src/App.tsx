import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { UnsplashImage, UnsplashApiResponse } from "./App.types";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const URL = import.meta.env.VITE_URL_UNSPLASH;

const App: React.FC = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  );
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get<UnsplashApiResponse>(URL, {
          params: {
            query,
            page,
            per_page: 12,
          },
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        });

        const data = response.data;

        if (page === 1) {
          setImages(data.results);
        } else {
          setImages((prev) => [...prev, ...data.results]);
        }
        setTotalPages(data.total_pages);
        setError(null);
      } catch (error: any) {
        setError("Failed to fetch images");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (image: UnsplashImage) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={loadMore} />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={Boolean(selectedImage)}
          image={selectedImage}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default App;
