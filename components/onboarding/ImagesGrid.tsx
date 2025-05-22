// components/ImageGrid.js

export default function ImageGrid() {
    // 12 elemanlı bir liste oluştur
    const images = new Array(12).fill("/onboarding/adeneme.png");
  
    return (
  <div className="grid-container">
  {images.map((src, index) => (
    <div key={index} className="grid-item">
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

    .grid-item img {
      width: 79px;
      height: 95px;
      object-fit: cover;
      border-radius: 8px;
    }

    @media (min-width: 640px) {
      /* sm ve üstü için */
      .grid-item img {
        width: 122px;
        height: 162px;
      }
    }
  `}</style>
</div>

    );
  }
  