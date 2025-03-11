import { Link } from '@remix-run/react'
import { IBlog } from '~/types'

const BlogCard = ({ thumbnail, title, content, update_date, slug }: IBlog) => {
  return (
    <Link to={slug}>
      <div className="lg:w-[321px] lg:h-[180px] md:w-[336px] md:h-[188px] h-[195px] lg:rounded-[14px] rounded-xl overflow-hidden">
        <img
          src={thumbnail ? thumbnail : '/nobanner.png'}
          alt="Thumbnail"
          className="w-full h-full"
        />
      </div>
      <div className="mt-[6px] px-[10px] pb-[10px]">
        <p className="text-quaternary-text text-xs font-medium leading-[20px]">
          {new Date(update_date).toDateString()}
        </p>
        <h3 className="text-lg font-medium leading-[28px] text-primary-text">
          {title.slice(0, 55)}
        </h3>
        <div
          className="mt-2 prose prose-lg text-tertiary-text font-normal leading-[22px] text-sm"
          dangerouslySetInnerHTML={{ __html: content.slice(0, 80) }}
        />
      </div>
    </Link>
  )
}

export default BlogCard
