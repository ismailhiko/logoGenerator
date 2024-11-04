// Fonction pour mettre à jour le logo
function updateLogo() {
    // Récupérer les valeurs des champs du formulaire
    const mainText = document.getElementById('mainText').value;
    const subText = document.getElementById('subText').value;
    const textColor = document.getElementById('textColor').value;
    const subTextColor = document.getElementById('subTextColor').value;
    const boxColor = document.getElementById('boxColor').value;
    const backgroundUrl = document.getElementById('backgroundSelect').value;

    // Récupérer les tailles des textes
    const mainTextSize = document.getElementById('mainTextSize').value;
    const subTextSize = document.getElementById('subTextSize').value;

    // Récupérer l'image et sa taille
    const imageUrl = document.getElementById('imageSelect').value;
    const imageSize = document.getElementById('imageSize').value;

    // Appliquer les tailles de texte
    document.getElementById('displayMainText').style.fontSize = `${mainTextSize}px`;
    document.getElementById('displaySubText').style.fontSize = `${subTextSize}px`;
  
    // Mettre à jour le texte et la couleur du logo
    document.getElementById('displayMainText').textContent = mainText;
    document.getElementById('displaySubText').textContent = subText;
    document.getElementById('displayMainText').style.color = textColor;
    document.getElementById('displaySubText').style.color = subTextColor;
    document.getElementById('displayMainText').style.borderColor = boxColor;

    const logoDisplay = document.getElementById('logoDisplay');
    if (backgroundUrl) {
        logoDisplay.style.backgroundImage = `url(${backgroundUrl})`;
      } else {
        logoDisplay.style.backgroundImage = 'none'; // Aucun arrière-plan si option vide
      }

    // Gérer l'image de logo dans le conteneur dédié
    const logoImageContainer = document.getElementById('logoImageContainer');
    logoImageContainer.innerHTML = ""; // Vider le conteneur pour éviter les duplications
    if (imageUrl) {
        const logoImage = document.createElement('img');
        logoImage.src = imageUrl;
        logoImage.style.width = `${imageSize}px`; // Ajuster la taille de l'image
        logoImage.style.height = 'auto';
        logoImageContainer.appendChild(logoImage);
    } 
  }
  

  document.querySelectorAll('.draggable').forEach(element => {
    element.addEventListener('mousedown', mouseDownHandler);

    function mouseDownHandler(e) {
        e.preventDefault();

        let startX = e.clientX;
        let startY = e.clientY;
        let elemRect = element.getBoundingClientRect();
        let offsetX = startX - elemRect.left;
        let offsetY = startY - elemRect.top;

        // Add event listeners for dragging
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);

        function mouseMoveHandler(e) {
            const logoDisplay = document.getElementById('logoDisplay');
            const displayRect = logoDisplay.getBoundingClientRect();
            const elemWidth = elemRect.width;
            const elemHeight = elemRect.height;

            // Calculate new position
            let newX = e.clientX - displayRect.left - offsetX;
            let newY = e.clientY - displayRect.top - offsetY;

            // Ensure element stays within the boundaries
            if (newX < 0) newX = 0;
            if (newY < 0) newY = 0;
            if (newX + elemWidth > displayRect.width) newX = displayRect.width - elemWidth;
            if (newY + elemHeight > displayRect.height) newY = displayRect.height - elemHeight;

            element.style.left = `${newX}px`;
            element.style.top = `${newY}px`;
        }

        function mouseUpHandler() {
            // Remove mousemove and mouseup event listeners
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }
    }
});
