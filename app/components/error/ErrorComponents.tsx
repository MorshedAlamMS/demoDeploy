import '../../tailwind.css'
import { useEffect, useState } from 'react'
import { useNavigate } from '@remix-run/react'

const ErrorComponents = ({
  message,
  details,
  status,
}: {
  message: string | null
  details: string | null
  status: number | null
}) => {
  // * force tailwind to load
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.tailwindcss.com'
    script.async = true
    document.body.appendChild(script)
  }, [])

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const navigate = useNavigate()

  if (!isClient) return null

  return (
    <section className="h-screen w-full px border-l-[0.5px] border-r-[0.5px] flex flex-col justify-center items-center">
      <p className="text-[#FFD147] text-lg font-bold font-geist text-center">
        {status || 404}
      </p>
      <p className="max-w-[550px] text-center text-black-text font-figtree text-[35px] mt-[30px] font-normal">
        {message ||
          'Oops! It Looks Like The Page You’re Looking For Isn’t Available.'}
      </p>
      <p className="text-tertiary-text mb-[30px] text-lg font-normal leading-[28px] font-geist mt-[30px]">
        {details || 'It might have been moved or doesn‘t exist anymore.'}
      </p>
      <button
        onClick={() => {
          navigate('/')

          // * wait to complete navigation
          setTimeout(() => {
            window.location.reload() // * Force a full reload
          }, 100)
        }}
        className="mt-[30px]"
      >
        <button className="relative inline-block px-[18px] font-bold py-3 group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform group-hover:translate-x-[5px] group-hover:translate-y-[5px] bg-black rounded-[2px]"></span>
          <span className="bg-[#FFD147]  absolute inset-0 w-full h-full rounded-[2px]"></span>
          <span className="relative flex items-center gap-x-2 text-white">
            BACK TO HOME
          </span>
        </button>
      </button>
    </section>
  )
}
export default ErrorComponents
