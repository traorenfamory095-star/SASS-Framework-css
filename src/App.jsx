import ProfileCard from "./components/ProfilCard";
import profiles from "./data/profiles";

function App() {
  return (
    <main className="container">

      <h1>Notre équipe</h1>

      <section className="profiles">

        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
          />
        ))}

      </section>

    </main>
  );
}

export default App;