import React from "react";
// import Sidebar from "./components/Sidebar";
// import UpdateCard from "./components/UpdateCard";

export default function Dashboard() {
  return (
    <div className="flex h-screen text-white bg-black">
      <Sidebar />

      <main className="flex-1 p-10 overflow-y-auto">
        <h2 className="text-5xl font-bold mb-6">Good afternoon</h2>
        <p className="text-gray-400 mb-10 max-w-2xl">
          My name is SJ — Welcome to sj.land. Below are some tips to get you started on this website.
        </p>

        <div className="grid grid-cols-2 gap-6 text-sm text-gray-400 mb-16">
          <p>Use keyboard shortcut 1 → 9 to navigate between pages.</p>
          <p>Don’t know me yet? More about me →</p>
          <p>Curious how the site was built? Twitter thread →</p>
          <p>I enjoy meeting random people. Open calendar →</p>
          <p>Looking for a job? Check out Talent →</p>
          <p>This website helped you? Check out some goodies →</p>
        </div>

        <section>
          <h3 className="text-xl font-semibold mb-4">Updates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <UpdateCard
              title="Merger: Compound → Compound Planning"
              description="Compound merged with Alternativ to form a new $1B+ RIA"
              date="Sep 2023"
            />
            <UpdateCard
              title="Interview on LoversMagazine"
              description="Some workspace updates. Full feature at loversmagazine.com/interviews/sj-zhang"
              date="Sep 2023"
            />
            <UpdateCard
              title="Interview on ui.land"
              description="Talked about how I got into design and touched on a little bit of my Fashion..."
              date="Apr 2023"
            />
            <UpdateCard
              title="Joined Magik as an Advisor"
              description="YC S23 - Automating Salesforce"
              date="Jan 2023"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
