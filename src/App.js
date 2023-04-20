import "./App.css";
import FavoriteClubs from "./components/FavoriteClubs";
import MatchInfo from "./components/MatchInfo";
import MatchStats from "./components/MatchStats";
import MatchSummary from "./components/MatchSummary";
import UserNotification from "./components/UserNotification";

function App() {
  return (
    <div className="bg-gray-800">
      <header className="px-10 py-6 bg-gray-900">
        <nav className="flex justify-between">
          <a className="font-bold text-lg italic text-yellow-400" href="#">
            <span className="mr-2 not-italic">⚽</span>
            MySoccerStat
          </a>
          <ul className="text-gray-200 flex gap-12">
            <li className="underline underline-offset-8 text-yellow-400 font-medium hover:opacity-80">
              <a href="#">Matches</a>
            </li>
            <li>Teams</li>
            <li>Competitions</li>
            <li>Account</li>
          </ul>
        </nav>
      </header>
      <div className="flex items-center justify-between my-10 container mx-auto">
        <UserNotification />
      </div>
      <div className="grid gap-8 grid-cols-2 m-10 container mx-auto">
        <MatchStats />
        <MatchSummary />
        <MatchInfo />
        <FavoriteClubs />
      </div>
      <footer className="text-white pb-20 text-sm text-center" id="footer">
        MySoccerStat Inc. All Rights Reserved.
        <br />
        <a
          href="/privacy"
          className="underline underline-offset-8 text-yellow-400 hover:opacity-80"
        >
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}

export default App;
