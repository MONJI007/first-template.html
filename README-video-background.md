# Guide d'utilisation de l'arrière-plan vidéo

## 🎥 Fonctionnalités

- **Lecture automatique** : La vidéo se lance automatiquement en boucle
- **Sans son** : Par défaut muette pour une meilleure expérience utilisateur
- **Responsive** : S'adapte à tous les écrans
- **Overlay personnalisable** : Texte et boutons superposés sur la vidéo
- **Interactions** : Clic pour pause/play, survol pour activer le son
- **Fallback** : Image de fond si la vidéo ne peut pas être chargée

## 📁 Structure des fichiers

```
├── index.html              # Page principale avec la section vidéo
├── first-template.css      # Styles CSS pour l'arrière-plan vidéo
├── video-background.js     # Fonctionnalités JavaScript
└── README-video-background.md  # Ce fichier
```

## 🚀 Installation

1. **Ajoutez votre vidéo** : Placez votre fichier vidéo dans le dossier du projet
2. **Modifiez le chemin** : Changez `src="votre-video.mp4"` dans `index.html`
3. **Formats supportés** : MP4, WebM, OGV

## ⚙️ Personnalisation

### Changer la vidéo
```html
<video autoplay muted loop id="myVideo">
    <source src="ma-video.mp4" type="video/mp4">
    <source src="ma-video.webm" type="video/webm">
</video>
```

### Modifier le contenu de l'overlay
```html
<div class="video-overlay">
    <div class="content">
        <h1>Votre titre</h1>
        <p>Votre description</p>
        <button class="cta-button">Votre bouton</button>
    </div>
</div>
```

### Ajuster l'opacité de l'overlay
```css
.video-overlay {
    background: rgba(0, 0, 0, 0.3); /* 0.3 = 30% d'opacité */
}
```

## 🎨 Styles CSS personnalisables

### Couleurs du bouton
```css
.cta-button {
    background: linear-gradient(45deg, #votre-couleur1, #votre-couleur2);
}
```

### Taille du texte
```css
.video-overlay h1 {
    font-size: 4rem; /* Taille du titre */
}

.video-overlay p {
    font-size: 1.8rem; /* Taille de la description */
}
```

## 📱 Responsive Design

Le design s'adapte automatiquement aux écrans mobiles :
- Texte redimensionné
- Boutons adaptés
- Vidéo optimisée pour tous les appareils

## 🔧 Fonctions JavaScript disponibles

### Changer la vidéo dynamiquement
```javascript
changeVideo('nouvelle-video.mp4');
```

### Ajuster la luminosité de l'overlay
```javascript
adjustOverlayBrightness(0.5); // 50% d'opacité
```

## 💡 Conseils d'optimisation

1. **Taille de fichier** : Gardez vos vidéos sous 10MB pour un chargement rapide
2. **Résolution** : 1920x1080 maximum pour de bonnes performances
3. **Format** : Privilégiez MP4 pour la compatibilité
4. **Compression** : Utilisez des outils comme HandBrake pour optimiser

## 🐛 Résolution des problèmes

### Vidéo ne se lance pas
- Vérifiez que le fichier existe
- Assurez-vous que le format est supporté
- Testez dans différents navigateurs

### Performance lente
- Réduisez la résolution de la vidéo
- Compressez le fichier
- Utilisez un format plus léger

### Problèmes sur mobile
- Vérifiez que `autoplay` est supporté
- Testez avec différentes tailles d'écran

## 🌟 Exemples d'utilisation

- **Sites d'entreprise** : Présentation de l'entreprise
- **Portfolios** : Démonstration de projets
- **Sites événementiels** : Ambiance et dynamisme
- **Landing pages** : Impact visuel immédiat

## 📞 Support

Pour toute question ou problème, consultez la documentation ou contactez l'équipe de développement.