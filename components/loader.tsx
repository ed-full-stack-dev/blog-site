import React, { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";

interface LoaderProps {
    timer?: number; // Optional delay timer in milliseconds (default: 5000)
    fallback?: React.ReactNode; // Optional custom loading UI
    children: React.ReactNode; // Content to render after the timer ends
}

const Loader: React.FC<LoaderProps> = ({ timer = 5000, fallback, children }) => {
    const [isDelayedLoading, setIsDelayedLoading] = useState(true);

    useEffect(() => {
        const delayTimer = setTimeout(() => setIsDelayedLoading(false), timer);
        return () => clearTimeout(delayTimer); // Cleanup timer
    }, [timer]);

    if (isDelayedLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                {fallback || <RingLoader color="#2563EB" size={250} />}
            </div>
        );
    }

    return <>{children}</>;
};

export default Loader;
