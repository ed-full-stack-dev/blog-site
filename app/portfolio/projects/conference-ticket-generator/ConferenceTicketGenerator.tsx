'use client';

import Image from 'next/image';
import Logo from './assets/logo-full.svg';
import useCTGform from '@/hooks/projects/useCTGform';
import { CTGformState } from '@/types/projects';
import CtGform from './CtGform';
import './styles.css';
import Show from '@/components/Show';
import { useEffect, useState } from 'react';


export default function ConferenceTicketGenerator() {
    const { values, errors, handleChange, handleSubmit, isSubmitSuccessful } = useCTGform<CTGformState>({ name: '', email: '', githubUser: '', file: null })
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
            <Show when={isSubmitSuccessful} fallback={<CtGform values={values} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} />} >
                <TicketGenerator values={values} />
            </Show>
        </section>
    );
}


interface TicketGeneratorProps {
    values: CTGformState;
}
function TicketGenerator({ values }: TicketGeneratorProps) {
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
                        <Image src={Logo} width={200} height={200} alt="logo" />
                    </div>
                    <span className="ticket-date">{`${new Date().toDateString()} / Austin, TX`}</span>
                </div>
                <div className="ticket-footer">
                    {/* Display Avatar */}
                    <Image
                        src={avatar || Logo}
                        width={60}
                        height={60}
                        alt="avatar"
                        className="ticket-avatar"
                    />
                    <p className="ticket-username">{values.name}</p>
                    <p className="ticket-email">{values.email}</p>
                    <p className="ticket-github">{values.githubUser}</p>
                </div>
            </div>
            <div className="ticket__right">
                {/* Additional details or design */}
            </div>
        </div>
    );
}