import Isologo from '../images/logos/isologo_golden.png'
import Image from 'next/image'


export function Logo(props) {

 return (
 <div className="flex flex-row ">
  <Image src={Isologo} alt="isologo" className="h-12 w-auto text-gray-100" />
 </div>
 )
}
