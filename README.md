# Web Component de Personnalisation de Logo

Ce projet implémente un Web Component interactif permettant la personnalisation d'un logo avec diverses options de texte, couleurs, arrière-plan, et images. Les utilisateurs peuvent également déplacer les éléments du logo à l'intérieur d'une zone définie grâce à une fonctionnalité de glisser-déposer (drag-and-drop).

## Fonctionnalités Principales

### 1. **Personnalisation de Texte**
   - **Texte principal** : Le texte principal du logo peut être modifié via un champ de texte.
   - **Sous-texte** : Un sous-texte optionnel peut être ajouté sous le texte principal.
   - **Taille du texte** : La taille du texte principal et du sous-texte peut être ajustée grâce à des curseurs (`<input type="range">`).
   - **Couleur du texte** : Les couleurs du texte principal et du sous-texte peuvent être personnalisées.

### 2. **Personnalisation de Couleur et de Bordure**
   - **Couleur de bordure** : Possibilité de définir la couleur de la bordure du texte principal.
   - **Couleur d'arrière-plan** : Choix de différentes couleurs et motifs pour l’arrière-plan du logo.

### 3. **Ajout d'Images**
   - **Sélection d'image de logo** : L’utilisateur peut choisir parmi une liste d'images pour ajouter une icône ou un logo dans la zone de personnalisation.
   - **Taille de l'image** : La taille de l'image peut être ajustée dynamiquement à l’aide d’un curseur pour s’adapter à la composition globale du logo.

### 4. **Fonctionnalité de Drag-and-Drop (Déplacement des Éléments)**
   - **Déplacement des éléments** : Les éléments (texte principal, sous-texte et image) peuvent être déplacés en cliquant et en faisant glisser directement dans la zone de logo.
   - **Restrictions de déplacement** : Les éléments sont restreints à rester dans les limites de la zone `#logoDisplay`, ce qui garantit qu’ils ne sortent pas de la zone définie.

## Utilisation

1. **Personnalisation de texte** : Utilisez les champs de texte pour entrer le contenu du logo, puis ajustez la couleur et la taille du texte avec les sélecteurs de couleur et les curseurs.
2. **Arrière-plan** : Choisissez un arrière-plan parmi les options disponibles dans le menu déroulant pour améliorer la présentation visuelle.
3. **Ajout d'image** : Sélectionnez une image à ajouter au logo et ajustez sa taille selon vos préférences.
4. **Déplacement des éléments** : Cliquez et faites glisser les éléments pour les positionner à l'intérieur de la zone de logo. Les éléments resteront à l'intérieur des limites définies.

## Technologies Utilisées

- **HTML5** : Structure de la page et des éléments interactifs.
- **CSS3 (Flexbox)** : Mise en forme, centrage et disposition des éléments.
- **JavaScript** : Logique de personnalisation, gestion des événements de glisser-déposer, et ajustement dynamique des propriétés du logo.

---

Cela fournit une vue d'ensemble claire des fonctionnalités principales et des instructions d'utilisation pour les utilisateurs ou développeurs souhaitant intégrer ou tester ce Web Component.
