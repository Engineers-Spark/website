import { getAssetPath } from "@/utils/paths";
import { ImageIcon, X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to load images from gallery directory
    const loadGalleryImages = async () => {
      try {
        const images: GalleryImage[] = [];

        // Helper function to check if image actually loads
        const tryLoadImage = async (
          imagePath: string,
          alt: string,
        ): Promise<boolean> => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              images.push({
                id: images.length + 1,
                src: imagePath,
                alt: alt,
              });
              resolve(true);
            };
            img.onerror = () => resolve(false);
            // Set a timeout to avoid hanging
            setTimeout(() => resolve(false), 3000);
            img.src = imagePath;
          });
        };

        // Check for the specific files that exist in the directory
        const knownImages = [
          "auto1.jpg",
          "cybermazev51.jpg",
          "cybermazev52.jpg",
          "cybermazev53.jpg",
          "IntrotoCyber1.jpg",
          "introtocyber2.jpg",
          "linuxfunds1.jpg",
          "linuxfunds2.jpg",
          "pwn1.jpg",
          "trafficana1.jpg",
        ];

        // Load all known images
        for (const filename of knownImages) {
          const imagePath = getAssetPath(`/gallery/${filename}`);
          const altText = filename.replace(".jpg", "").replace(/\d+$/, "");
          await tryLoadImage(imagePath, altText);
        }

        // Try common naming patterns with reasonable limits
        const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];

        // Try image1.jpg to image10.jpg pattern
        for (let i = 1; i <= 10; i++) {
          for (const ext of imageExtensions) {
            const imagePath = getAssetPath(`/gallery/image${i}.${ext}`);
            await tryLoadImage(imagePath, `Gallery image ${i}`);
          }
        }

        // Try common naming patterns (limited to avoid too many requests)
        const commonNames = ["photo", "img", "team", "event"];

        for (const name of commonNames) {
          for (let i = 1; i <= 5; i++) {
            for (const ext of imageExtensions) {
              const imagePath = getAssetPath(`/gallery/${name}${i}.${ext}`);
              await tryLoadImage(imagePath, `${name} ${i}`);
            }
          }
        }

        setGalleryImages(images);
      } catch (error) {
        console.error("Error loading gallery images:", error);
      } finally {
        setLoading(false);
      }
    };

    loadGalleryImages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-primary py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-white">Gallery</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Loading gallery images...
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
          </div>
        </div>
      </div>
    );
  }

  if (galleryImages.length === 0) {
    return (
      <div className="min-h-screen bg-primary py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-white">Gallery</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore moments from our cybersecurity journey - workshops,
              competitions, community events, and memorable experiences.
            </p>
          </div>

          {/* Empty State */}
          <div className="text-center">
            <div className="bg-primary/80 border border-accent/20 rounded-lg p-12">
              <ImageIcon className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">
                No Images Yet
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white">Gallery</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore moments from our cybersecurity journey - workshops,
            competitions, community events, and memorable experiences.
          </p>
          <p className="text-sm text-white/60 mt-4">
            {galleryImages.length} image{galleryImages.length !== 1 ? "s" : ""}{" "}
            found
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="bg-primary/80 border border-accent/20 hover:border-accent/40 transition-colors cursor-pointer group overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  onError={(e) => {
                    // Hide broken images
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors p-2"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
