export default function FavoriteClubs() {
  const favoriteTeamLogoColors = [
    {
      id: 1,
      name: "Arsenal",
      color: "Red, Gold, Blue, White",
    },
    {
      id: 2,
      name: "Manchester City",
      color: "Blue, Gold, White",
    },
    {
      id: 3,
      name: "Manchester United",
      color: "Red, Yellow",
    },
    {
      id: 4,
      name: "Tottenham Hotspur",
      color: "Blue",
    },
  ];

  return (
    <div className="text-gray-100 flex justify-center items-center flex-col p-8 gap-4 border border-opacity-25 rounded-lg bg-gray-900">
      <div className="flex items-center gap-6">
        <h3 className="font-bold text-xl">
          Your favorite clubs and their colors
        </h3>
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400"></span>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Favorite Club
              </th>
              <th scope="col" className="px-6 py-3">
                Club Color
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {favoriteTeamLogoColors.map((color) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {color.name}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-light text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {color.color}
                </th>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
