export default function InfiniteScrollGallery() {
    const images = Array.from({ length: 12 }, (_, i) => `/books/b${i+1}.png`);
  
    return (
      <div className="scroll-wrapper">
        <div className="scroll-content">
          {images.concat(images).map((src, index) => (
            <div className="image-item" key={index}>
              <img src={src} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
  
        <style jsx>{`
          .scroll-wrapper {
            overflow: hidden;
            width: 100%;
            background: transparent;
          }
  
          .scroll-content {
            display: flex;
            animation: scroll 20s linear infinite;
          }
  
          .image-item {
            flex: 0 0 auto;
            margin-right: 16px;
          }
  
          .image-item img {
            width: 122px;
            height: 162px;
            object-fit: cover;
            border-radius: 8px;
          }
  
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
  
          @media (max-width: 639px) {
            .image-item img {
              width: 79px;
              height: 105px;
            }
          }
        `}</style>
      </div>
    );
  }
  