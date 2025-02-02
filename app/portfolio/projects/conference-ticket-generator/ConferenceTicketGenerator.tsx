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
            <div className="content">
                <a href="#" className="content__header-logo">
                    <Image src={Logo} width={300} height={100} alt={'logo'} />
                </a>
                <h1 className="content__title">Your Journey to Coding Conf 2025 Starts Here!</h1>
                <p className="content__description">
                    Secure your spot at next year&apos;s biggest coding conference.
                </p>
            </div>
            <form className='form'>
                <div className="form__item">
                    <label htmlFor="name" className='form__label'>Full Name</label>
                    <input type="text" name="name" className="form__input" placeholder="Full Name" />
                </div>
                <div className="form__item">
                    <label htmlFor="email" className='form__label'>Email Address</label>
                    <input type="text" name="email" className="form__input" placeholder="Email Address" />
                </div>
                <div className="form__item">
                    <label htmlFor="github_username" className='form__label'>Github Username</label>
                    <input type="text" name="github_username" className="form__input" placeholder="Github Username" />
                </div>
            </form>
        </section>
    );
}
/* 
<div className="form__item">
    <label htmlFor="name" className="form__label">Full Name</label>
    <div className="form__item-content">
        <input type="text" name="name" className="form__input" placeholder="Full Name" />
        <div className="form__input-border" />
    </div>
    <div className="form__error">
        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16">
            <path stroke="#D1D0D5" strokeLinecap="round" strokeLinejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z" />
            <path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
            <path stroke="#D1D0D5" strokeLinecap="round" strokeLinejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042" />
        </svg>
        <span>Please enter your full name</span>
    </div>
</div>
 */