import ErrorIcon from "@/components/ErrorIcon";
import useFileUpload from "@/hooks/projects/useFileUpload";
import Image from "next/image";
interface FileUploadProps {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export function FileUpload({ handleChange }: FileUploadProps) {
    const {
        file,
        dragActive,
        selectedIcon,
        fileInputRef,
        handleDrag,
        handleDrop,
        handleFileInputChange,
        handleRemove,
        triggerFileInput,
    } = useFileUpload();
    return (
        <div className="form-upload-wrapper">
            {/* Drag-and-Drop Area */}
            <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                className={`form-upload ${dragActive ? "drag-active" : ""}`}
            >
                <input
                    id="file-upload"
                    ref={fileInputRef}
                    type="file"
                    className="hidden-input"
                    onChange={
                        (e) => {
                            handleFileInputChange(e)
                            handleChange(e)
                        }
                    }
                />
                {!file && (
                    <label htmlFor="file-upload" className="upload-label">
                        <div className="file-upload-icon">
                            <Image
                                className="upload-image"
                                src={selectedIcon}
                                width={50}
                                height={50}
                                alt="upload icon"
                            />
                        </div>
                        <p className="form-upload-text">Drag and drop or click to upload</p>
                    </label>
                )}

                {file && (
                    <div className="file-preview">
                        <div
                            className="file-preview-icon"
                            onClick={(e) => e.stopPropagation()} // Prevent triggering input
                        >
                            <Image
                                className="preview-image"
                                src={selectedIcon}
                                width={50}
                                height={50}
                                alt="uploaded icon"
                            />
                        </div>
                        <div className="button-group">
                            {/* Remove Button */}
                            <button type="button" className="btn btn-remove" onClick={handleRemove}>
                                Remove
                            </button>

                            {/* Change Button */}
                            <button type="button" className="btn btn-change" onClick={triggerFileInput}>
                                Change
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {/* Additional Instructions */}
            <div className="form-upload-instructions">
                <ErrorIcon errorFill="default-fill" errorStroke="default-stroke" />
                <p className="form-upload-message">Upload your photo (JPG or PNG, max size: 500KB).</p>
            </div>
        </div>
    );
}