export default function MatchInfo() {
  return (
    <div
      className="text-gray-100 flex justify-center items-center flex-col p-8 gap-4 border border-opacity-25 rounded-lg bg-gray-900"
      style={{
        backgroundImage:
          'url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Anfield_stadium_%28Liverpool%29_panorama_view_from_main_stand.jpg/2880px-Anfield_stadium_%28Liverpool%29_panorama_view_from_main_stand.jpg")',
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
      }}
    >
      <h3 className="font-bold text-xl">Match Info</h3>
      <div>
        <ul className="flex justify-center items-center w-full gap-8">
          <li className="flex flex-col gap-2 bg-gray-800 p-4 rounded-lg">
            <span className="text-gray-200 font-lg font-bold">📅 Date</span>
            <span>2/17/2022</span>
          </li>
          <li className="flex flex-col gap-2 bg-gray-800 p-4 rounded-lg">
            <span className="text-gray-200 font-lg font-bold">⏱️ Time</span>
            <span>8:00 PM</span>
          </li>
          <li className="flex flex-col gap-2 bg-gray-800 p-4 rounded-lg">
            <span className="text-gray-200 font-lg font-bold">📍 Venue</span>
            <span>Anfield</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
