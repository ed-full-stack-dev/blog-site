import { CTGformState } from "@/types/projects";
import { generateTicketNumber } from "@/utils/shared";
import { useState, useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import Logo from './assets/logo-full.svg';
import Image from "next/image";

interface TicketGeneratorProps {
    values: CTGformState;
}
export default function TicketGenerator({ values }: TicketGeneratorProps) {
    const [avatar, setAvatar] = useState<string | null>(null);

    useEffect(() => {
        // Retrieve the uploaded image from localStorage
        const savedImage = localStorage.getItem("uploadedImage");
        setAvatar(savedImage || Logo); // Fallback to logo if no image is found
    }, []);

    return (
        <div className="ticket">
            <div className="ticket__left">
                <div className="ticket-header">
                    <div className="ticket-logo">
                        <Image src={Logo} width={250} height={100} alt="logo" />
                    </div>
                    <span className="ticket-date">{`${new Date().toDateString()} / Austin, TX`}</span>
                </div>
                <div className="ticket-footer fl">
                    {/* Display Avatar */}
                    <Image
                        src={avatar || Logo}
                        width={60}
                        height={60}
                        alt="avatar"
                        className="ticket-avatar"
                    />
                   <div className='flex flex-col text-white '>
                   <p className="ticket-username text-2xl">{values.name}</p>
                    <p className="ticket-github flex items-center gap-1"><FiGithub /> {values.githubUser}</p>
                   </div>
                </div>
            </div>
            <div className="ticket__right">
               <span>{generateTicketNumber()}</span>
            </div>
        </div>
    );
}