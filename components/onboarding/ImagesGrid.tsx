// components/ImageGrid.js

interface ImageGridProps {
  selectedImages: number[];
  setSelectedImages: React.Dispatch<React.SetStateAction<number[]>>;
}

const ImageGrid: React.FC<ImageGridProps> = ({ selectedImages, setSelectedImages }) => {
  const images = Array.from({ length: 12 }, (_, i) => `/books/b${i + 1}.png`);

  const handleImageClick = (index: number) => {
    setSelectedImages((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="grid-container">
      {images.map((src, index) => (
        <div
          key={index}
          className={`grid-item ${selectedImages.includes(index) ? "selected" : ""}`}
          onClick={() => handleImageClick(index)}
        >
          <img src={src} alt={`Image ${index + 1}`} />
        </div>
      ))}

      <style jsx>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          max-width: 800px;
          margin: 0 auto;
        }

        .grid-item {
          cursor: pointer;
           border: 4px solid transparent;
          border-radius: 8px;
        }

        .grid-item.selected {
          border: 4px solid #F7C663;
          border-radius: 12px;
        }

        .grid-item img {
          width: 79px;
          height: 95px;
          object-fit: cover;
          border-radius: 8px;
        }

        @media (min-width: 640px) {
          .grid-item img {
            width: 122px;
            height: 162px;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageGrid;

  