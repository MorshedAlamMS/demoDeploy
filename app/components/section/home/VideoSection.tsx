import { useState } from 'react'
import LeftSvg from '~/components/svg/videoSection/LeftSvg'
import PauseSvg from '~/components/svg/videoSection/PauseSvg'
import PlaySvg from '~/components/svg/videoSection/PlaySvg'
import RightSvg from '~/components/svg/videoSection/RightSvg'

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleTogglePlay = () => {
    setIsPlaying(prev => !prev)
  }

  return (
    <section className="lg:h-[387px] md:h-[298px] h-[149px]">
      <div className="md:max-w-[700px] mx-auto lg:px-0 md:px-[33px] px-[26px] flex">
        <span className="mr-5">
          <RightSvg />
        </span>
        <div className="relative lg:max-w-[676px] md:max-w-[520px] mx-auto rounded-[20px] overflow-hidden">
          <img
            className="w-full h-full object-contain"
            src={isPlaying ? '/video.gif' : '/videoImage.png'}
            alt="GIF Animation"
          />
          <button
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 hover:bg-black hover:bg-opacity-50 rounded-full ease-in-out pt-1 px-1"
            onClick={handleTogglePlay}
          >
            {isPlaying ? <PauseSvg /> : <PlaySvg />}
          </button>
        </div>
        <span className="ml-3">
          <LeftSvg />
        </span>
      </div>
    </section>
  )
}

export default VideoSection
