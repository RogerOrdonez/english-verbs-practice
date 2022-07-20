import tw from 'twin.macro'
import { FC, useContext } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { ThemeContext } from '../../shared/context'

export const ThemeToggle: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <button
      css={[
        tw`absolute right-0 mt-2 mr-2 sm:mt-4 sm:mr-4 p-2 z-50`,
        tw`outline-none transition-all rounded-md`,
      ]}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <FaSun
          css={[
            tw`text-gray-800 dark:text-gray-50 text-xl`,
            tw`cursor-pointer`,
          ]}
        />
      ) : (
        <FaMoon
          css={[
            tw`text-gray-800 dark:text-gray-50 text-xl`,
            tw`cursor-pointer`,
          ]}
        />
      )}
    </button>
  )
}
