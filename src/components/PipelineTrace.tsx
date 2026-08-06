import { useEffect, useState } from "react";

export default function PipelineTrace() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9999] h-[2px] w-full bg-white dark:bg-dark-900" aria-hidden="true">
      <div
        className="h-full bg-teal-500 transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%`, boxShadow: "0 0 12px rgba(0,240,255,0.7)" }}
      />
    </div>
  );
}