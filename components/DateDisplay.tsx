

export default function DateDisplay({ date, formattedDate }: { date: string, formattedDate: string }) {
    return (
        <time
            className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-200 dark:text-zinc-300 pl-3.5"
            dateTime={date}
        >
            <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-300"></span>
            </span>
            {formattedDate}
        </time>
    )
}