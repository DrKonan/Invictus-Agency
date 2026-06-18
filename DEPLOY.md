# Déploiement Invictus Agency

## 1. Premier déploiement sur Netlify

1. Va sur https://app.netlify.com → **Add new site** → **Import an existing project**.
2. Connecte GitHub et sélectionne le repo `DrKonan/Invictus-Agency`.
3. Paramètres de build :
   - **Branch to deploy** : `main`
   - **Build command** : *(laisse vide)*
   - **Publish directory** : `.`
4. **Deploy site**.
5. Une fois en ligne, note l'URL Netlify (ex: `invictus-agency.netlify.app`) — on peut brancher le vrai domaine plus tard.

## 2. Activer l'admin (Netlify Identity + Git Gateway)

Étapes obligatoires pour que `/admin/` fonctionne :

1. Dashboard Netlify → onglet **Site configuration** → **Identity** → **Enable Identity**.
2. Toujours dans **Identity** :
   - **Registration preferences** → choisir **Invite only** (sinon n'importe qui peut créer un compte).
   - **Git Gateway** → **Enable Git Gateway** (en bas de la page Identity).
3. Inviter un utilisateur : onglet **Identity** → **Invite users** → ton email. Tu reçois un email avec un lien d'activation.
4. Définir un mot de passe via le lien.

## 3. Accéder à l'admin

- URL : `https://<ton-site>.netlify.app/admin/`
- Login avec l'email/mot de passe créés ci-dessus.
- Tu peux maintenant éditer :
  - Site & contact (infos globales, contact, hero de chaque page)
  - Réalisations / Portfolio / Galeries / Équipe
- Chaque sauvegarde commit dans le repo GitHub → Netlify redéploie automatiquement.

## 4. Brancher un domaine personnalisé (optionnel)

Dashboard Netlify → **Domain management** → **Add custom domain**. Suivre les instructions DNS.
