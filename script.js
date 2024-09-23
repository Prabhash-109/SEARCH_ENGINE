document.addEventListener("DOMContentLoaded", loadSearchHistory);

function performSearch() {
    const searchInput = document.getElementById('searchInput').value;

    if (searchInput === "") {
        alert("Please enter a search term");
        return;
    }

    let searchHistory = getSearchHistory();
    searchHistory.push(searchInput);
    saveSearchHistory(searchHistory);

    displaySearchHistory();
    document.getElementById('searchInput').value = "";  // Clear input field
}

function displaySearchHistory() {
    const searchHistoryList = document.getElementById('searchHistory');
    searchHistoryList.innerHTML = "";  // Clear current list

    let searchHistory = getSearchHistory();

    searchHistory.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        searchHistoryList.appendChild(listItem);
    });
}

function getSearchHistory() {
    const storedHistory = localStorage.getItem("searchHistory");
    return storedHistory ? JSON.parse(storedHistory) : [];
}

function saveSearchHistory(history) {
    localStorage.setItem("searchHistory", JSON.stringify(history));
}

function clearSearchHistory() {
    localStorage.removeItem("searchHistory");
    displaySearchHistory();  // Refresh display
}

function loadSearchHistory() {
    displaySearchHistory();
}