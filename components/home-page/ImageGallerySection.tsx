import { imageGallery } from "@/assets";
import Image from "next/image";
export default function ImageGallerySection() {
    return (
        <div className="image-gallery">
            <div className="image-gallery-wrapper">
                {
                    imageGallery && imageGallery.map((img, index) => (
                        <div key={img.alt + img.src} className={`image-gallery__item ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                            <Image priority width={400} height={400} className="image-gallery__image" src={img.src} alt="speaking" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}