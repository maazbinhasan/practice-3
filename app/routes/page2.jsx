
import { useEffect, useState } from "react"

const TransitionPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <   div
      className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex flex-col justify-between p-8"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      < header className="text-center" variants={itemVariants}>
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Welcome to Our Beautiful Page</h1>
        <p className="text-xl text-indigo-600">Enjoy the smooth transition as elements appear</p>
      </    header>

      < main className="flex-grow flex items-center justify-center" variants={itemVariants}>
        <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-lg max-w-2xl">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Main Content</h2>
          <p className="text-indigo-900 mb-4">
            This is where your main content goes. You can add any elements or components here, and they will smoothly
            transition into view.
          </p>
          < button
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Click me!
          </    button>
        </div>
      </    main>

      < footer className="text-center text-indigo-700" variants={itemVariants}>
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
      </    footer>
    </  div>
  )
}

export default TransitionPage

