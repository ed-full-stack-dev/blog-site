import Image from "next/image";
import clsx from "clsx";

type AvatarProps = {
  src?: string;
  alt?: string;
  initials?: string;
  square?: boolean;
  className?: string;
};

export default function Avatar({ src, alt = "", initials, square = false, className }: AvatarProps) {
  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center overflow-hidden text-gray-700 font-medium",
        square ? "rounded-md" : "rounded-full",
        "w-12 h-12 sm:w-16 sm:h-16",
        className
      )}
    >
      {src ? (
        <Image placeholder="empty" src={src} alt={alt} width={64} height={64} className="object-cover w-full h-full" style={{ height: "auto", width: "auto" }} />
      ) : (
        <span className="text-lg">{initials}</span>
      )}
    </div>
  );
}

