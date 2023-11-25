'use client'

const testimonials = [
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    head: 'hello',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    head: 'hello',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    head: 'hello',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },

  // More testimonials...
]
const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5 text-green-800"
  >
    <path
      fillRule="evenodd"
      d="M10 0l2.42 6.18h6.07l-4.91 4.63 1.64 6.19L10 12.35l-5.21 4.65 1.64-6.19L1.51 6.18h6.07L10 0zm0 1.8L8.33 7.19H2.91l4.09 3.86-1.06 4.02L10 9.8l4.06 3.87-1.06-4.02L17.09 7.2H11.67L10 1.8z"
      clipRule="evenodd"
    />
  </svg>
)
export function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          {/*    <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
              Testimonials
            </h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by over
            <div className="text-green-700">+50,000 users</div>
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 flex-row sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-xl font-semibold text-black">
                    <p>{`“${testimonial.head}”`}</p>
                  </blockquote>
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <div className="items-cente mt-2 flex fill-current text-green-900">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} />
                    ))}
                  </div>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.author.imageUrl}
                      alt=""
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
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
