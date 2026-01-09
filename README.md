# 💰 Gestionnaire de Dettes PWA

Une application web progressive (PWA) simple et élégante pour gérer vos dettes et prêts personnels. **Fonctionne 100% hors ligne**, aucun serveur requis, toutes vos données restent sur votre appareil.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-Enabled-brightgreen.svg)](https://web.dev/progressive-web-apps/)

## ✨ Fonctionnalités

### 📊 Gestion Complète
- **Gestion des personnes** : Ajoutez et gérez plusieurs personnes
- **Dettes multiples** : Chaque personne peut avoir plusieurs prêts/dettes
- **Calculs automatiques** : 
  - Total par personne avec détail des sommes (ex: 500 + 1200 + 570 = 2270)
  - Total général de toutes les dettes
- **Affichage détaillé** : Visualisez toutes vos dettes en un coup d'œil

### 💱 Conversion de Devises
- **3 devises supportées** : Dirham marocain (DH), Dollar ($), Euro (€)
- **Taux de change fixes** : 1$ = 10 DH | 1€ = 10 DH
- **Basculement instantané** : Changez de devise d'un simple clic

### 🔐 Sécurité Locale
- **Protection par mot de passe** : Sécurisez vos données localement
- **Changement de mot de passe** : Modifiez votre mot de passe à tout moment
- **Aucune transmission** : Tout reste sur votre appareil

### 💾 Import/Export
- **Export JSON** : Sauvegardez vos données dans un fichier
- **Import JSON** : Restaurez vos données depuis une sauvegarde
- **Portabilité** : Transférez vos données entre appareils

### 📱 Progressive Web App
- **Installable** : Installez l'app sur votre écran d'accueil Android/iOS
- **100% Offline** : Fonctionne sans connexion Internet
- **Pas de store** : Installation directe depuis votre navigateur
- **Mode standalone** : S'ouvre comme une app native

## 🚀 Installation

### Option 1 : Utiliser depuis GitHub Pages (Recommandé)

1. **Visitez l'application** sur votre téléphone :
   ```
   https://ismailkraou.github.io/Gestion-des-dettes/
   ```

2. **Installer sur Android** :
   - Ouvrez Chrome
   - Un bandeau "Installer l'application" apparaîtra
   - Cliquez sur **Installer**
   - OU : Menu Chrome (⋮) → **Installer l'application**

3. **Installer sur iOS** :
   - Ouvrez Safari
   - Appuyez sur le bouton Partager
   - Sélectionnez **Sur l'écran d'accueil**

### Option 2 : Hébergement Local

1. **Clonez le repository** :
   ```bash
   git clone https://github.com/ismailkraou/Gestion-des-dettes
   cd votre-repo
   ```

2. **Lancez un serveur web local** :
   
   Avec Python :
   ```bash
   python -m http.server 8000
   ```
   
   Avec Node.js :
   ```bash
   npx serve
   ```

3. **Accédez à l'application** :
   ```
   http://localhost:8000
   ```

## 📂 Structure du Projet

```
debt-manager/
├── index.html         # Application principale (HTML/CSS/JS)
├── manifest.json      # Configuration PWA
├── styles.css         # Style css file
├── sw.js              # Service Worker (gestion offline)
├── icons              # icons folder
├── README.md          # Documentation
└── LICENSE            # Licence MIT
```

## 🎯 Utilisation

### Premier Lancement
1. Créez un **mot de passe** pour protéger vos données
2. Commencez par **ajouter une personne**
3. Ajoutez des **dettes** pour cette personne

### Ajouter une Dette
1. Cliquez sur **"💵 Ajouter une dette"**
2. Sélectionnez la personne
3. Entrez le montant en DH
4. Cliquez sur **Ajouter**

### Changer de Devise
- Cliquez simplement sur **DH**, **$**, ou **€** en haut à droite
- Tous les montants sont automatiquement convertis

### Exporter vos Données
1. Ouvrez le **menu** (☰ en haut à droite)
2. Cliquez sur **"📤 Exporter les données"**
3. Un fichier JSON sera téléchargé

### Importer une Sauvegarde
1. Ouvrez le **menu** (☰)
2. Cliquez sur **"📥 Importer les données"**
3. Sélectionnez votre fichier JSON

## 🛠️ Technologies Utilisées

- **HTML5** - Structure de l'application
- **CSS3** - Design moderne et responsive
- **Vanilla JavaScript** - Logique applicative (pas de framework)
- **LocalStorage API** - Stockage local des données
- **Service Worker** - Fonctionnement offline
- **Web App Manifest** - Configuration PWA

## 🔒 Confidentialité & Sécurité

### ✅ Ce que l'application FAIT
- Stocke toutes vos données **localement** sur votre appareil
- Protège vos données avec un **mot de passe local**
- Fonctionne **100% hors ligne**

### ❌ Ce que l'application NE FAIT PAS
- **Aucune transmission** de données vers un serveur
- **Aucun tracking** ou analytics
- **Aucune connexion** Internet requise après installation
- **Aucune collecte** d'informations personnelles

> ⚠️ **Important** : Vos données sont stockées uniquement sur votre appareil. Si vous supprimez les données du navigateur ou désinstallez l'app, vos données seront perdues. **Pensez à exporter régulièrement vos données !**

## 📱 Compatibilité

### Navigateurs Supportés
- ✅ Chrome/Edge (Android & Desktop) - Recommandé
- ✅ Safari (iOS & macOS)
- ✅ Firefox (Android & Desktop)
- ✅ Samsung Internet
- ✅ Opera

### Systèmes d'Exploitation
- ✅ Android 5.0+
- ✅ iOS 11.3+
- ✅ Windows 10+
- ✅ macOS 10.12+
- ✅ Linux (toutes distributions modernes)

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment vous pouvez aider :

1. **Fork** le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une **Pull Request**

### Idées de Contributions
- 🌍 Traductions (Anglais, Arabe, Français)
- 🎨 Thèmes (Mode sombre, couleurs personnalisées)
- 📊 Graphiques et statistiques
- 🔔 Notifications et rappels
- 📅 Dates d'échéance pour les dettes
- 💬 Notes pour chaque dette
- 🏷️ Catégories/tags

## 🐛 Signaler un Bug

Si vous rencontrez un problème :

1. Vérifiez que vous utilisez la **dernière version**
2. Consultez les [Issues existantes](https://github.com/ismailkraou/Gestion-des-dettes/issues)
3. Créez une nouvelle issue avec :
   - Description du problème
   - Étapes pour reproduire
   - Navigateur et version
   - Captures d'écran si possible

## 📝 Roadmap

### Version 1.0 (Actuelle) ✅
- [x] Gestion des personnes et dettes
- [x] Conversion de devises
- [x] Protection par mot de passe
- [x] Export/Import JSON
- [x] PWA installable
- [x] Fonctionnement 100% offline

### Version 1.1 (À venir) 🚧
- [ ] Mode sombre
- [ ] Dates d'échéance
- [ ] Notes pour chaque dette
- [ ] Historique des paiements
- [ ] Statistiques et graphiques

### Version 2.0 (Futur) 💭
- [ ] Synchronisation cloud optionnelle
- [ ] Notifications de rappel
- [ ] Catégories personnalisables
- [ ] Multi-devises personnalisées
- [ ] Thèmes personnalisables

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👨‍💻 Auteur

Créé avec ❤️ pour gérer les dettes personnelles de manière simple et privée.

## 🙏 Remerciements

- Icônes : Emojis natifs
- Design inspiré par les principes de Material Design
- Communauté PWA pour les best practices

## 📞 Support

- 🐛 **Bugs** : [Ouvrir une issue](https://github.com/ismailkraou/Gestion-des-dettes/issues)
- 💡 **Suggestions** : [Discussions](https://github.com/ismailkraou/Gestion-des-dettes/discussions)
- 📧 **Contact** : ismail.kraou@gmail.com

---

⭐ **Si ce projet vous est utile, n'hésitez pas à lui donner une étoile !**

Made with 💰 for better debt management
