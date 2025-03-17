import { FaChevronRight } from "react-icons/fa";
import DateDisplay from '../DateDisplay'
import './styles.css'
import Blog from "@/types/blog";
import Link from "next/link";
interface ArticleCardProps {
    blog: Blog
}
export default function ArticleCard({
    blog: { title, date, summary, slug }
}: ArticleCardProps) {
    const formattedDate = new Date(date).toDateString();
    return (
        <article className="article-card">
            <DateDisplay date={formattedDate} formattedDate={formattedDate} />
            <h2 className="article-card__title">{title}</h2>
            <p className="article-card__description">{summary}</p>
            <div className='article-card__footer'>
                <Link href={`/blog/${slug}`} className="article-card__read-more">Read article
                    <FaChevronRight className="article-card__icon" />
                </Link>
            </div>
        </article>
    )
}