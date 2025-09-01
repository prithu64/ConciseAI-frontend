// ChatWindow.jsx
export default function ChatWindow({ messages }) {
  return (
    <div className="w-full max-w-md h-[60vh] bg-white rounded shadow p-4 flex flex-col overflow-y-auto">
      {messages.length === 0 ? (
        <p className="text-gray-400 text-center mt-10">Ask me anything...</p>
      ) : (
        messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-4 py-2 rounded-lg max-w-[70%] ${msg.type === 'user' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-900'}`}>
              {msg.text}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
