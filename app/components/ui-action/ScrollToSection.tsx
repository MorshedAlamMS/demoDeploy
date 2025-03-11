/**
 * Scrolls smoothly to the section of the page with the given ID.
 *
 * @param {string} id - The ID of the section to scroll to.
 *
 * This function finds the HTML element with the specified ID and
 * scrolls the page to its position, accounting for a fixed offset
 * (e.g., navbar height) to adjust the final scroll position.
 */

export const ScrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    const offset = 100 // Offset to account for the navbar height
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: sectionPosition - offset, behavior: 'smooth' })
  }
}
