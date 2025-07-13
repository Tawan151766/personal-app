import React from "react";

export default function ImagePreviewModal({ src, alt, onClose }) {
  if (!src) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 bg-white/80 rounded-full p-2 text-black hover:bg-white z-10"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg shadow-lg object-contain max-h-[80vh] bg-white"
        />
      </div>
    </div>
  );
}