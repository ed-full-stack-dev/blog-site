'use client';

import Image from 'next/image';
import Logo from './assets/logo-full.svg';
import useCTGform from '@/hooks/projects/useCTGform';
import { CTGformState } from '@/types/projects';
import CtGform from './CtGform';
import './styles.css';
import Show from '@/components/Show';
import TicketGenerator from './TicketGenerator';



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

