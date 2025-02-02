'use client';

import Image from 'next/image';
import Logo from './assets/logo-full.svg';
import './styles.css';

export default function ConferenceTicketGenerator() {
    return (
        <section className="ctgp-font _container">
            {/* Background patterns */}
            <div className="pattern-top"></div>
            <div className="pattern-bottom"></div>

            {/* Content */}
            <form className='form'>
                <div className="content">
                    <a href="#" className="content__header-logo">
                        <Image src={Logo} width={300} height={100} alt={'logo'} />
                    </a>
                    <h1 className="content__title">Your Journey to Coding Conf 2025 Starts Here!</h1>
                    <p className="content__description">
                        Secure your spot at next year&apos;s biggest coding conference.
                    </p>
                </div>
            </form>
        </section>
    );
}