interface ContentHeaderProps {
    title: React.ReactNode;
    description: React.ReactNode;
}

export default function ContentHeader({ title, description }: ContentHeaderProps) {
    return (
        <div className="content-header">
            {title}
            {description}
        </div>
    )
}