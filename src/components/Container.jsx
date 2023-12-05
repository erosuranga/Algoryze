import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx(' max-w-full px-6 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}
