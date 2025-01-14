// src/utils/navigationUtils.ts
import { useNavigate } from "react-router-dom";

// Array of routes for navigation
const pages = ["/", "/font2", "/font3", "/font4"];

// Function to navigate to the next page
export const useGoToNextPage = () => {
  const navigate = useNavigate();
  return () => {
    const currentIndex = pages.indexOf(window.location.pathname);
    const nextIndex = (currentIndex + 1) % pages.length; // Wrap around if we're at the last page
    navigate(pages[nextIndex]);
  };
};

// Function to navigate to the previous page
export const useGoToPrevPage = () => {
  const navigate = useNavigate();
  return () => {
    const currentIndex = pages.indexOf(window.location.pathname);
    const prevIndex = (currentIndex - 1 + pages.length) % pages.length; // Wrap around if we're at the first page
    navigate(pages[prevIndex]);
  };
};
