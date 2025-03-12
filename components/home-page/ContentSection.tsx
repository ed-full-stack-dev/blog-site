import { BsArrowDownCircle, BsBriefcase, BsEnvelope } from "react-icons/bs";
import ArticleCard from "../article-card";
import { workIcons } from "@/assets";
import Image from "next/image";
import { BlogCollection } from "@/types/blog";

type Props = {
    data: {
        blogCollection: BlogCollection;
    }
}
export default function ContentSection({data}:Props) {

    return (
        <div className="content">
            <div className="content__articles">
                {
                    data && data.blogCollection.items.slice(0,5).map((blg) =>(
                        <ArticleCard key={blg.sys.id} date={new Date(blg.date).getDate().toString()} formattedDate={new Date(blg.date).toDateString()} title={blg.title} description={blg.summary} />
                    ))
                }
            </div>
            <div className="content__info">
                <div className="contact__container">
                    <form className="contact-form">
                        <div className="contact-form__header">
                            <BsEnvelope className="contact-form__icon" />
                            <h2 className="contact-form__title">Get in Touch</h2>
                        </div>
                        <p className="contact-form__description">
                            Have a question or just want to say hello? Fill out the form below and I&apos;ll get back to you as soon as possible.
                        </p>
                        <fieldset className="contact-form__fieldset">
                            <legend className="contact-form__legend">Contact Information</legend>
                            <div className="contact-form__field">
                                <label htmlFor="name" className="contact-form__label">Name</label>
                                <input
                                    className="contact-form__input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="contact-form__field">
                                <label htmlFor="email" className="contact-form__label">Email</label>
                                <input
                                    className="contact-form__input "
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>
                            <div className="contact-form__field">
                                <label htmlFor="message" className="contact-form__label">Message</label>
                                <textarea
                                    className="contact-form__input"
                                    id="message"
                                    name="message"
                                    placeholder="Write your message here..."
                                    rows={4}
                                    required
                                />
                                <p className="text-zinc-500 text-sm mt-1">I&apos;ll do my best to respond within 24 hours.</p>
                            </div>
                        </fieldset>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="contact-form__submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                    <div className="work">
                        <div className="work__header">
                            <BsBriefcase className="work__icon" />
                            <h2 className="work__title">Work</h2>
                        </div>
                        <ol className="mt-6 space-y-4">
                            {
                                workIcons && workIcons.map((icon, index) => (
                                    <li key={icon.alt + index} className="flex gap-4">
                                        <div className="work__logo">
                                            <Image width={7} height={7} src={icon.src} alt={icon.alt} loading="lazy" className="h-7 w-7" />
                                        </div>
                                        <dl className="work__details">
                                            <dt className="sr-only">Company</dt>
                                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 ">{icon.alt}</dd>
                                            <dt className="sr-only">Role</dt><dd className="text-xs text-zinc-500 ">{icon.position}</dd>
                                            <dt className="sr-only">Date</dt><dd className="ml-auto text-xs text-zinc-400 space-x-1 " aria-label={`${icon.startDate} until ${icon.endDate}`}>
                                                <time dateTime={icon.startDate}>{icon.startDate}</time>
                                                <span aria-hidden="true">—</span> <time dateTime={icon.endDate}>{icon.endDate}</time>
                                            </dd>
                                        </dl>
                                    </li>
                                ))
                            }
                        </ol>
                        <a className="work_download-icon" href="#">Download CV <BsArrowDownCircle className="h-6 w-6 text-gray-500" /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}