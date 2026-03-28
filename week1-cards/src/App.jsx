import ProfileCard from "./components/ProfileCard.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">My Team</h1>
      <div className="flex flex-wrap justify-center gap-6">
        <ProfileCard
          name="Abdullah Khalil"
          role="Frontend Developer"
          bio="Loves building UIs with React and Tailwind CSS."
          skills={["React", "Tailwind", "JavaScript"]}
        />
        <ProfileCard
          name="Ali Hassan"
          role="Backend Developer"
          bio="Python expert, builds fast APIs and databases."
          skills={["React", "Tailwind", "JavaScript"]}
        />
        <ProfileCard
          name="Muhammad Ali"
          role="Full Stack Developer"
          bio="Comfortable on both ends, loves AI integrations."
          skills={["React", "Tailwind", "JavaScript"]}
        />
        <ProfileCard name="Abdullah Khalil" role="Frontend Developer" bio="Loves building UIs with React and Tailwind CSS." />
      </div>
    </div>
  );
}

export default App;