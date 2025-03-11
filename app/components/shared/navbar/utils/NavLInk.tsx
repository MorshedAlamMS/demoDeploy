import { ScrollToSection } from '~/components/ui-action/ScrollToSection'
import { buttonClass } from './constant'

/**
 * NavLink component renders a button that navigates to a specific section.
 *
 * @param {string} id - The identifier of the section to scroll to.
 * @param {React.ReactNode} children - The content to be displayed inside the button.
 * @param {string} activeSection - The currently active section id.
 *
 * @returns A button element with styling based on the active section.
 */

export const NavLink = ({
  id,
  children,
  activeSection,
}: {
  id: string
  children: React.ReactNode
  activeSection: string
}) => {
  const isActive = activeSection === id

  return (
    <button
      onClick={() => ScrollToSection(id)}
      className={`${buttonClass} ${isActive ? 'bg-white' : ''}`}
    >
      {children}
    </button>
  )
}
