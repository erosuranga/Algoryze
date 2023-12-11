import Image from 'next/image'
import clsx from 'clsx'

import backgroundImage from '@/images/background.jpg'

export function BackgroundImage({ className, position = 'left' }) {
 return (
 <div
  className={clsx(
  'absolute inset-0 overflow-hidden bg-zinc-950',
  className,
  )}
 >
  <Image  
  src={backgroundImage}
  alt=""  
  priority
  unoptimized
  />
  <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-950" />
  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-zinc-950" />
 </div>
 )
}
