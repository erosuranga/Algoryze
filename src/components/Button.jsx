import Link from 'next/link'
import clsx from 'clsx'

export function Button({ className, ...props }) {
 className = clsx(
 'inline-flex justify-center rounded-md p-2 px-3 text-base font-semibold text-gray-100 hover:underline hover:underline-offset-8 hover:decoration-yellow-400 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70',
 className,
 )

 return typeof props.href === 'undefined' ? (
 <button className={className} {...props} />
 ) : (
 <Link className={className} {...props} />
 )
}
