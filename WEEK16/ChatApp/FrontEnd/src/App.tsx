const App = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center bg-gradient-to-br from-blue-100 to-pink-100">
      <div className="w-full max-w-2xl h-[85vh] bg-white/80 rounded-xl border border-blue-300 shadow-2xl flex flex-col p-6 mt-8 overflow-y-auto">
      {/* Chat messages will go here */}
      </div>
      <div className="w-full max-w-2xl h-20 bg-white/90 rounded-b-xl border-t border-blue-200 flex items-center px-6 mb-8 shadow-lg">
      <form className="flex w-full gap-3">
        <input
        type="text"
        className="flex-1 bg-white px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholder="Type your message..."
        />
        <button
        className="bg-gradient-to-r from-blue-500 to-pink-400 px-6 py-2 rounded-lg border border-black text-white font-semibold hover:from-blue-600 hover:to-pink-500 transition"
        type="submit"
        >
        Send
        </button>
      </form>
      </div>
    </div>
  )
}

export default App

