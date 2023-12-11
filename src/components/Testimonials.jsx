'use client'

import Image from 'next/image'
import Isotipo from '../images/logos/isotipo_golden.png'
import '../styles/title.css'
import '../styles/colortext.css'

const testimonials = [
    {
        author: {
            name: 'Ana Martínez',
            handle: 'anam',
        },
        header: 'Saludos',
        body: "Hola a todos, soy Ana Martínez, también conocida como 'anam'. Quiero compartir algunas reflexiones sobre mi experiencia y aprendizajes. En este mensaje, exploraremos juntos la importancia de la perseverancia y el amor por la vida. Acompáñenme en este viaje lleno de descubrimientos.",
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        author: {
            name: 'Ricardo Sánchez',
            handle: 'ricardos',
        },
        header: 'Aventuras Nocturnas',
        body: "Saludos a todos, me llamo Ricardo Sánchez, conocido en la red como 'ricardos'. Les comparto una emocionante historia de mis aventuras nocturnas. Desde explorar misteriosos callejones hasta descubrir lugares ocultos, les invito a sumergirse en esta fascinante travesía llena de sorpresas.",
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        author: {
            name: 'María Rodríguez',
            handle: 'maria_r',
        },
        header: 'Reflexiones Diarias',
        body: "¡Hola a todos! Soy María Rodríguez, o como me conocen en línea, 'maria_r'. En este mensaje, compartiré algunas reflexiones diarias sobre la vida, el amor y la gratitud. Acompáñenme en este viaje cotidiano lleno de lecciones y momentos especiales que nos recuerdan la belleza de vivir plenamente cada día.",
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

export function Testimonials() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/** topbar */}
                <div className="h-16">
                    <Image
                        src={Isotipo}
                        alt="isotipo"
                        className="h-16 w-auto text-gray-100"
                    />
                </div>

                {/** Title */}
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="font-Optician text-4xl font-medium text-[#efb810] sm:text-5xl">
                        Utilizado por
                        <div className="gold-shine-animation">+50,000 traders</div>
                    </h2>
                </div>

                {/** Content */}
                <div className="mx-auto mt-16 flow-root max-w-2xl font-AkzidenzLight font-medium sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 grid grid-cols-1 sm:-mx-4 sm:grid-cols-2 sm:text-[0] md:grid-cols-2 lg:grid-cols-3 ">
                        {/** Card */}
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="h-full grow pt-8 sm:inline-block sm:w-full sm:px-4"
                            >
                                <figure className="h-full rounded-2xl bg-[#12151f] p-8 text-sm leading-6 shadow-2xl shadow-gray-950">
                                    <blockquote className="text-xl font-semibold text-gray-50">
                                        <p>{`${testimonial.author.name}`}</p>
                                    </blockquote>
                                    <blockquote className="text-gray-200 ">
                                        <p>{`“${testimonial.body}”`}</p>
                                    </blockquote>
                                    <div className="items-cente text-[#efb810 mt-2 flex fill-current">
                                        {[1, 2, 3, 4, 5].map((star) => '⭐️ ')}
                                    </div>
                                    <figcaption className="mt-6 flex items-center gap-x-4 ">
                                        <img
                                            className="h-10 w-10 rounded-full bg-gray-50"
                                            src={testimonial.imageUrl}
                                            alt=""
                                        />
                                        <div>
                                            <div className="font-semibold text-gray-300">
                                                {testimonial.author.name}
                                            </div>
                                            <div className="text-gray-400">{`@${testimonial.author.handle}`}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
