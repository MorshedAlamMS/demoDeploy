import { useLocation } from '@remix-run/react'
import { useEffect, useState } from 'react'

export function DashboardNavBar() {
  const [exactPath, setExactPath] = useState('Dashboard')
  const location = useLocation()

  // * Helper function to format the path
  const formatPath = (path: string) => {
    if (!path) return ''
    return path
      .split('-') // * Split at dashes
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // * Capitalize each word
      .join(' ') // * Join with spaces
  }

  // * useEffect to update the exact path
  useEffect(() => {
    const path = location.pathname.split('/')[2]
    // * If the path is not empty, format it and update the state
    if (path) {
      setExactPath(formatPath(path)) // * Format the path while updating the state
    }
  }, [location.pathname])

  return (
    <div className="w-full h-[60px] md:px-[16px] pl-3 py-[8px] flex items-center justify-start">
      {/* Display the exact path */}
      <p className="flex items-center gap-[8px]">
        <span className="text-quaternary-text font-inter font-regular text-[14px] leading-6">
          Home{' '}
        </span>
        <span className="text-quaternary-text font-inter font-regular text-[14px] leading-6">
          {'/'}
        </span>{' '}
        <span className="text-secondary-text font-geist font-bold text-[14px] leading-6">
          {' '}
          {exactPath}
        </span>
      </p>
    </div>
  )
}
