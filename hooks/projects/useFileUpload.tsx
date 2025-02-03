import { useState, useRef } from "react";
import UploadIcon from '../../app/portfolio/projects/conference-ticket-generator/assets/icon-upload.svg'
export default function useFileUpload() {
    const [file, setFile] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(UploadIcon);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(e.type === "dragenter" || e.type === "dragover");
    };

    const setIconIfImage = (uploadedFile: File) => {
        const fileType = uploadedFile.type;
        if (fileType === "image/jpeg" || fileType === "image/png") {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target && e.target.result) {
                    setSelectedIcon(e.target.result as string);
                }
            };
            reader.readAsDataURL(uploadedFile);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const uploadedFile = e.dataTransfer.files[0];
            setFile(uploadedFile);
            setIconIfImage(uploadedFile);
        }
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const uploadedFile = e.target.files[0];
            setFile(uploadedFile);
            setIconIfImage(uploadedFile);
        }
    };

    const handleRemove = () => {
        setFile(null);
        setSelectedIcon(UploadIcon);
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; // Reset file input
        }
    };

    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Programmatically trigger file input
        }
    };
    return {
        file,
        dragActive,
        selectedIcon,
        fileInputRef,
        handleDrag,
        handleDrop,
        handleFileInputChange,
        handleRemove,
        triggerFileInput,
    }
}