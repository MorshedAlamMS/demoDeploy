// Importing SVG components for each work process step
import DesignSvg from '~/components/svg/process/DesignSvg'
import HelloSvg from '~/components/svg/process/HelloSvg'
import MessageSvg from '~/components/svg/process/MessageSvg'
import PaymentSvg from '~/components/svg/process/PaymentSvg'
import RevisionSvg from '~/components/svg/process/RevisionSvg'

// Importing the work process data from the content configuration file
import { myWorkProcess } from '~/ContentData'
// Importing the IProcess type for type safety and consistency
import { IProcess } from '~/types'

// Array of SVG icons corresponding to each work process step
// 🔗 Each icon component is imported and assigned a unique key to ensure proper rendering
const icons = [
  <HelloSvg key={0} />,
  <MessageSvg key={1} />,
  <PaymentSvg key={2} />,
  <DesignSvg key={3} />,
  <RevisionSvg key={4} />,
]

// Array of title CSS classes for each work process step
// 🎨 These classes define the maximum width for each title to maintain a consistent and responsive layout
const titleClass = [
  'lg:max-w-[48px] max-w-[36px]', // Title class for step 1 (Hello)
  'lg:max-w-[117px] max-w-[88px]', // Title class for step 2 (Message)
  'lg:max-w-[89px] max-w-[67px]', // Title class for step 3 (Payment)
  'lg:max-w-[101px] max-w-[76px]', // Title class for step 4 (Design)
  'lg:max-w-[106px] max-w-[80px]', // Title class for step 5 (Revision)
]

// Mapping the work process data to create the final process data array
// 📝 The `processData` array will contain objects with icon, title, description, and titleClass properties
export const processData: IProcess[] = myWorkProcess.map((process, index) => ({
  // Assigning the icon from the icons array based on the index
  icon: icons[index],
  // Assigning the title from the imported work process data
  title: process.processTitle,
  // Assigning the description from the imported work process data
  description: process.processDescription,
  // Assigning the CSS class for the title based on the index
  titleClass: titleClass[index],
}))
