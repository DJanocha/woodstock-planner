import { Navbar } from "../_components/navbar";

const CalendarPage = () => {
  return (
    <main className="flex h-screen flex-col items-stretch justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c] px-8 text-white md:items-center">
      <div className="container flex h-[10dvh] flex-col items-stretch justify-center gap-12 py-16 md:items-center">
        <h1 className="flex flex-col items-center text-5xl font-extrabold tracking-tight sm:text-[5rem] md:flex-row">
          <span>Woodstock</span>
          <div className="flex flex-row justify-between">
            <span className="text-[hsl(280,100%,70%)]"> Planner </span>
            <span>App</span>
          </div>
        </h1>
      </div>
      <div className="h-[45-dvh] flex-1 items-center justify-center">
        <span> will be available sooon :) </span>
      </div>
      <Navbar />
    </main>
  );
};

export default CalendarPage;
