import { FaChevronRight } from "react-icons/fa";
import DateDisplay from '../DateDisplay'
import './styles.css'
interface ArticleCardProps {
    date: string;
    formattedDate: string;
    title: string;
    description:string;
    link?:string
}
export default function ArticleCard({date, formattedDate, title, description}:ArticleCardProps) {
    return (
        <article className="article-card">
            <DateDisplay date={date} formattedDate={formattedDate} />
            <h2 className="article-card__title">{title}</h2>
            <p className="article-card__description">{description}</p>
            <div className='article-card__footer'>
                <span className="article-card__read-more">Read article
                    <FaChevronRight className="article-card__icon" />
                </span>
            </div>
        </article>
    )
}