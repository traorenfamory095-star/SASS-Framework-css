function ProfileCard({ profile }) {
  return (
    <article className="profile-card">
      <div className="profile-card__content">

        <h2>{profile.name}</h2>

        <span className="profession">
          {profile.profession}
        </span>

        <p>
          {profile.description}
        </p>

        <button className={`button button-${profile.buttonType}`}>
          Voir le profil
        </button>

      </div>
    </article>
  );
}

export default ProfileCard;
