import { fetchGithubUser } from './gitHubAPI.js';
import { renderProfile } from './profileView.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value;
    if (!userName) {
        alert('Please enter a GitHub username.');
        profileResults.innerHTML = "";
        return;
    }
    profileResults.innerHTML = `<p class="loading">Loading...</p>`;
    try {
        const userData = await fetchGithubUser(userName);
        renderProfile(userData, profileResults);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        alert('User not found. Please check the username and try again.');
        profileResults.innerHTML = "";
    }
});
