'use client';

import Image from 'next/image';
import Logo from './assets/logo-full.svg';
import './styles.css';
import FormItemInput from '@/components/FormItemInput';
import useCTGform from '@/hooks/projects/useCTGform';
import { CTGformState } from '@/types/projects';


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



