import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // Optional: icon library

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg hover:bg-blue-400 transition-all bg-blue-200 p-4 cursor-pointer "
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    )
  );
}
