// Fonction d'inscription
function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Vérifie si l'utilisateur existe déjà
    if (localStorage.getItem(username)) {
        alert("Nom d'utilisateur déjà pris. Choisissez un autre nom.");
    } else {
        // Stocke les informations de l'utilisateur
        localStorage.setItem(username, JSON.stringify({ password }));
        alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
        window.location.href = "login.html"; // Redirige vers la page de connexion
    }
}

// Fonction de connexion
function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Vérifie si l'utilisateur existe et le mot de passe est correct
    const storedUser = JSON.parse(localStorage.getItem(username));
    if (storedUser && storedUser.password === password) {
        alert("Connexion réussie !");
        // Stocke la session utilisateur dans le localStorage
        localStorage.setItem('currentUser', username);
        window.location.href = "index.html"; // Redirige vers la page d'accueil
    } else {
        alert("Nom d'utilisateur ou mot de passe incorrect.");
    }
}

// Fonction de déconnexion
function logout() {
    localStorage.removeItem("currentUser");
    alert("Vous êtes maintenant déconnecté.");
    window.location.reload(); // Recharge la page pour mettre à jour l'état de connexion
}
