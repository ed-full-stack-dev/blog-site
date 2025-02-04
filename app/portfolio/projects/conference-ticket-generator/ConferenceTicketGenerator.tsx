'use client';

import useCTGform from '@/hooks/projects/useCTGform';
import { CTGformState } from '@/types/projects';
import CtGform from './CtGform';
import Show from '@/components/Show';
import TicketGenerator from './TicketGenerator';
import ContentHeader from './ContentHeader';
import ContentLogo from './ContentLogo';
import PatternBackground from './PatternBackground';
import './styles.css';



export default function ConferenceTicketGenerator() {
    const { values, errors, handleChange, handleSubmit, isSubmitSuccessful } = useCTGform<CTGformState>({ name: '', email: '', githubUser: '', file: null })
    return (
        <section className="ctgp-font _container">
            <PatternBackground />
            <div className="content">
                <ContentLogo />
                <Show when={isSubmitSuccessful}
                    fallback={
                        <ContentHeader
                            title={<h1 className='content__title'>Your Journey to Coding Conf 2025 Starts Here!</h1>}
                            description={<p className='content__description'>Secure your spot at next year&apos;s biggest coding conference.</p>}
                        />
                    }
                >
                    <ContentHeader
                        title={<h1 className='content__title'>Congrats, <span className='main__title--name'>{values.name}!</span> Your ticket is ready.</h1>}
                        description={<p className='content__description'>We have emailed your ticket to <span className='main__title--email'>{values.email}</span>  and will send updates in the run up to the event.</p>}
                    />
                </Show>
            </div>
            <Show when={isSubmitSuccessful} fallback={<CtGform values={values} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} />} >
                <TicketGenerator values={values} />
            </Show>
        </section>
    );
}




