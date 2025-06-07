import EngageEventsList from "../events/EventsList";
import EngagementAppBar from "../app-bar/AppBar";

export default function Layout() {
  return (
    <div>
      <EngagementAppBar />
      <div>
        <EngageEventsList />
      </div>
    </div>
  );
}
