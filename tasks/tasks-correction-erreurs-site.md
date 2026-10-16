## Relevant Files

- `app/page.tsx` - Assemble la page d’accueil et ses sections.
- `app/layout.tsx` - Configure le document, les polices, le thème et le bouton WhatsApp global.
- `app/globals.css` - Définit les styles globaux, les couleurs et les thèmes.
- `components/navigation.tsx` - Gère la navigation par ancres, la section active et le menu mobile.
- `components/hero-section.tsx` - Contient l’accueil, les liens sociaux et l’appel à l’action principal.
- `components/intro-section.tsx` - Contient l’introduction du portfolio.
- `components/about-section.tsx` - Contient la section À propos et l’image de profil.
- `components/development-section.tsx` - Présente les projets et leurs liens de démonstration/code.
- `components/design-section.tsx` - Gère la galerie design, ses filtres et l’aperçu d’image.
- `components/photography-section.tsx` - Gère la galerie photo, ses filtres et l’aperçu d’image.
- `components/community-section.tsx` - Présente les activités de community management.
- `components/clients-section.tsx` - Présente les clients et leurs logos.
- `components/experience-section.tsx` - Présente les expériences et les liens associés.
- `components/contact-section.tsx` - Contient les coordonnées et les liens de contact.
- `components/media-placeholder.tsx` - Affiche un remplacement neutre accessible lorsque le visuel d’un portfolio est absent.
- `components/WhatsAppButton.tsx` - Définit le bouton WhatsApp global et sa destination.
- `components/theme-toggle.tsx` - Gère le contrôle de changement de thème.
- `components/theme-provider.tsx` - Fournit le contexte de thème à l’application.
- `components/social.tsx` - Définit les liens vers les profils sociaux.
- `public/Daph.png` - Image de profil référencée dans la section À propos.
- `public/images/ImgProjets/` - Contient les visuels des projets du portfolio.
- `public/images/logoClient/` - Contient les logos des clients.
- `package.json` - Déclare les commandes de lint et de build disponibles pour la validation.
- `tasks/prd-correction-erreurs-site.md` - Définit le périmètre et les critères d’acceptation.
- `tasks/tasks-correction-erreurs-site.md` - Suit les tâches, sous-tâches et constats de l’audit.

### Notes

- Aucun script de test automatisé n’est défini dans `package.json`. Valider les changements avec le lint, le build et un parcours manuel reproductible dans le navigateur.
- La liste des fichiers est prévisionnelle : ne modifier que les fichiers concernés par les erreurs confirmées lors de l’audit.
- Ne pas publier sur Vercel dans le cadre de cette tâche.
- Les remplacements visuels et le chemin corrigé sont implémentés. `npm run lint` se termine avec 0 erreur et 13 avertissements. La compilation Next.js produit le bundle, mais le contrôle TypeScript échoue car l’installation présente ne contient pas la déclaration `lucide-react/dist/lucide-react.d.ts`. Le serveur local renvoie une erreur interne pendant la compilation (Turbopack : `EPERM` lors du renommage de fichiers générés ; Webpack n’a pas répondu pendant la fenêtre de vérification). La vérification HTTP/browser locale de 2.1 reste donc en attente. Aucun changement à `package.json`, `package-lock.json` ou `tsconfig.json` n’est conservé.

### Constats d’audit

- Le site publié répond sur Vercel. Les requêtes vers les 15 images suivantes renvoient HTTP 404 : `/ui-design-mockup.png`, `/brand-identity-design.png`, `/web-design-layout.png`, `/logo-design-collection.png`, `/print-design-poster.png`, `/app-interface-design.png`, `/professional-portrait.png`, `/mountain-landscape.png`, `/urban-street-scene.png`, `/wedding-photography.png`, `/wildlife-nature-photography.png`, `/modern-building-architecture.png`, `/modern-tech-logo.png`, `/startup-logo.png` et `/images/logoClient/klammshop.jng`.
- Le navigateur signale les échecs 404 comme erreurs de chargement de ressources. L’audit de cette sous-tâche n’a pas confirmé d’erreur JavaScript distincte.
- La version locale n’était pas disponible au moment de l’audit (`http://localhost:3000/` a refusé la connexion).
- Une mesure au format mobile n’a pas révélé de débordement horizontal (`scrollWidth` égal à la largeur de la fenêtre mesurée).
- La comparaison des références avec `public/` confirme que les six images de `components/design-section.tsx` et les six images de `components/photography-section.tsx` sont absentes.
- Dans `components/clients-section.tsx`, `/modern-tech-logo.png` et `/startup-logo.png` sont absents ; `/images/logoClient/klammshop.jng` ne correspond pas au fichier existant `/images/logoClient/klammshop.png`. Les autres logos référencés et les cinq visuels de projets ainsi que `Daph.png` sont présents.
- Les composants Design, Photographie et Clients mentionnent aussi `/placeholder.svg` comme solution de repli, mais ce fichier n’existe pas dans `public/`. Ces replis ne sont pas utilisés tant que les URL d’images renseignées restent non vides.
- Les sept cibles de navigation et l’ancre « À propos » du bouton principal correspondent à des identifiants de section existants. Les sections Clients et Expérience ne figurent pas dans les entrées de navigation ; aucune exigence ne confirme que leur absence est un défaut.
- Les galeries Design et Photographie utilisent désormais des visuels de remplacement neutres avec leurs libellés, et les logos clients sans fichier utilisent le même composant. Le chemin du logo KLAMM SHOP a été corrigé vers le fichier `.png` présent.

## Instructions for Completing Tasks

Mettre à jour cette liste après chaque sous-tâche terminée. Ne commencer qu’une seule sous-tâche à la fois et attendre l’accord de l’utilisateur avant de passer à la suivante.

## Tasks

- [x] 0.0 Créer une branche de fonctionnalité
  - [x] 0.1 Vérifier l’état du dépôt puis créer et utiliser une branche dédiée aux corrections.
- [x] 1.0 Auditer le site et identifier les erreurs reproductibles
  - [x] 1.1 Parcourir le site de référence et le site local, puis relever les erreurs console/réseau, les défauts d’affichage et les interactions défectueuses.
  - [x] 1.2 Comparer les ressources référencées dans les composants avec les fichiers disponibles dans `public/` et relever les liens/ancres invalides.
- [ ] 2.0 Corriger les ressources manquantes et les erreurs réseau liées au projet
  - [ ] 2.1 Corriger les chemins des ressources du projet qui provoquent des erreurs 404 et vérifier les réponses des ressources corrigées (vérification locale en attente).
  - [ ] 2.2 Corriger les références internes erronées et les cas d’affichage d’images manquantes confirmés par l’audit, sans masquer silencieusement les erreurs.
- [ ] 3.0 Corriger la navigation, les liens et les interactions existantes
  - [ ] 3.1 Vérifier la correspondance entre les entrées de navigation et les identifiants des sections, puis corriger les destinations non fonctionnelles.
  - [ ] 3.2 Vérifier le menu mobile (ouverture, fermeture et navigation vers les sections) et corriger les défauts reproductibles.
  - [ ] 3.3 Parcourir les appels à l’action, galeries, liens de projets, liens sociaux, moyens de contact et contrôles de thème ; corriger les actions ou destinations invalides qui relèvent du projet.
- [ ] 4.0 Corriger les défauts responsive et d’accessibilité sans refonte
  - [ ] 4.1 Tester les sections aux formats bureau et mobile et corriger les débordements horizontaux ou éléments inaccessibles confirmés.
  - [ ] 4.2 Vérifier au clavier les contrôles essentiels, leurs noms accessibles et la visibilité du focus, puis corriger les défauts constatés.
- [ ] 5.0 Valider les corrections avec lint, build et tests manuels
  - [ ] 5.1 Exécuter `npm run lint` et `npm run build`, puis corriger les erreurs liées aux changements.
  - [ ] 5.2 Refaire le parcours de validation sur bureau et mobile et confirmer l’absence d’erreurs applicatives console/réseau liées au projet, ainsi que le bon fonctionnement des liens et interactions corrigés.
