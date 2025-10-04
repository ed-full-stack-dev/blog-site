import clsx from "clsx";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>


export function Container<T extends React.ElementType = 'div'>({as, className, children}:ContainerProps<T>){
    const Component = as ?? 'div';
    return(
        <Component className={clsx('mx-auto max-w-7xl px-4 lg:px-8 w-full', className)}>
            <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
        </Component>
    )
}