'use client';

import Image from 'next/image';
import Logo from './assets/logo-full.svg';
import './styles.css';
import FormItemInput from '@/components/FormItemInput';
import useCTGform from '@/hooks/projects/useCTGform';
import { CTGformState } from '@/types/projects';
import { useRef, useState } from 'react';
import UploadIcon from './assets/icon-upload.svg'
import ErrorIcon from '@/components/ErrorIcon';


export default function ConferenceTicketGenerator() {
    const { values, errors, handleChange, handleSubmit } = useCTGform<CTGformState>({ name: '', email: '', githubUser: '' })
    return (
        <section className="ctgp-font _container">
            {/* Background patterns */}
            <div className="pattern-top"></div>
            <div className="pattern-bottom"></div>

            {/* Content */}
            <div className="content">
                <a href="#" className="content__header-logo">
                    <Image src={Logo} width={300} height={100} alt={'logo'} />
                </a>
                <h1 className="content__title">Your Journey to Coding Conf 2025 Starts Here!</h1>
                <p className="content__description">
                    Secure your spot at next year&apos;s biggest coding conference.
                </p>
            </div>
            {/* Form */}
            <form className='form' onSubmit={handleSubmit}>
                {/* <div className='form__upload-wrapper'>
                    <div className="form__upload">
                        <input
                            id="file-upload"
                            type="file"
                            className="hidden"
                            onChange={() => { }}
                        />
                        <label
                            htmlFor="file-upload"
                            className="cursor-pointer flex flex-col items-center"
                        >
                            <div className="file-upload__icon">
                                <Image src={UploadIcon} width={30} height={30} alt='upload icon' />
                            </div>
                            <div>
                                <p className="form-upload__text">Drag and drop or click to upload</p>
                            </div>
                        </label>
                    </div>

                    <div className='flex items-center'>
                        <ErrorIcon errorFill='default-fill' errorStroke='default-stroke' />
                        <p className="form-upload__message">Upload your photo (JPG or PNG, max size: 500KB).</p>
                    </div>
                </div> */}
                <FileUpload />
                <FormItemInput
                    value={values.name}
                    onChange={handleChange}
                    label='Full Name'
                    placeholder='Full Name'
                    name='name'
                    errorMessage={errors.name}
                />
                <FormItemInput
                    value={values.email}
                    onChange={handleChange}
                    label='Email Address'
                    placeholder='Email Address'
                    name='email'
                    errorMessage={errors.email}
                />
                <FormItemInput
                    value={values.githubUser}
                    onChange={handleChange}
                    label='Github Username'
                    placeholder='Github Username'
                    name='githubUser'
                    errorMessage={errors.githubUser}
                />
                <input type="submit" value='Generate My Ticket' />
            </form>
        </section>
    );
}






export function FileUpload() {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                    onChange={handleChange}
                />
                {!file && (
                    <label htmlFor="file-upload" className="upload-label">
                        <div className="file-upload-icon">
                            <Image
                                className="upload-image"
                                src={UploadIcon}
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