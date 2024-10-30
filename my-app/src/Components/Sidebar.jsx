// eslint-disable-next-line react/prop-types
export default function Sidebar({ fun }) {
  return (
    <div className="w-[20%] bg-blue-400 flex flex-col pt-10 h-screen">
      <button
        className="bg-blue-700 rounded-full h-10 text-lg font-semibold border-2 border-black"
        onClick={fun}
      >
        Invoices
      </button>
    </div>
  );
}
