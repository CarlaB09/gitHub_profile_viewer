export function renderProfile(userData, container) {
  container.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar of ${
    userData.name
  }" class="profile-avatar">
      <div class="profile-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio || "No bio available 😢."}</p>
      </div>
    </div>

    <div class="profile-counters">
        <div class="followers">
            <h4>👥 Followers</h4>
            <span>${userData.followers}</span>
        </div>
        <div class="following">
            <h4>👥 Following</h4>
            <span>${userData.following}</span>
        </div>
    </div>
  `;
}
