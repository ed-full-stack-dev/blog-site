interface ShowProps<T> {
    when: T | undefined | null | false;
    fallback: React.ReactNode;
    children: React.ReactNode | ((item: T) => React.ReactNode);
}

export default function Show<T>({ when, fallback, children }: ShowProps<T>) {
    return when ? (typeof children === 'function' ? children(when) : children) : fallback;
}