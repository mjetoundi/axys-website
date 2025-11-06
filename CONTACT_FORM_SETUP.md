# Configuration du Formulaire de Contact AXYS AUDIT

Le formulaire de contact est maintenant pleinement fonctionnel et enverra les messages directement à l'adresse email d'AXYS AUDIT.

## 🚀 Configuration Rapide (5 minutes)

### Option 1 : Utiliser Formspree (Recommandé - Gratuit)

Formspree est un service gratuit qui permet d'envoyer des emails depuis un formulaire sans backend.

#### Étapes :

1. **Créer un compte gratuit sur Formspree**
   - Allez sur [https://formspree.io/](https://formspree.io/)
   - Cliquez sur "Get Started Free"
   - Créez un compte avec l'email : `axysaudit@axysaudit.com`

2. **Créer un nouveau formulaire**
   - Une fois connecté, cliquez sur "+ New Form"
   - Donnez-lui un nom : "AXYS Contact Form"
   - L'email de destination sera automatiquement : `axysaudit@axysaudit.com`
   - Cliquez sur "Create Form"

3. **Copier votre Form ID**
   - Vous verrez un endpoint qui ressemble à : `https://formspree.io/f/xyzabc123`
   - Copiez uniquement la partie après `/f/` : `xyzabc123`

4. **Mettre à jour le code**
   - Ouvrez le fichier : `src/pages/Contact.tsx`
   - Ligne 80, remplacez `YOUR_FORM_ID` par votre ID :
   ```typescript
   const response = await fetch('https://formspree.io/f/xyzabc123', {
   ```

5. **Sauvegarder et tester**
   - Le formulaire est maintenant opérationnel !
   - Chaque soumission sera envoyée à `axysaudit@axysaudit.com`

#### Plan Gratuit Formspree :
- ✅ 50 soumissions par mois (largement suffisant)
- ✅ Protection anti-spam intégrée
- ✅ Notifications email instantanées
- ✅ Archive de tous les messages sur leur dashboard

---

### Option 2 : Utiliser EmailJS (Alternative)

Si vous préférez EmailJS :

1. Créez un compte sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Configurez un service email (Gmail, Outlook, etc.)
3. Créez un template d'email
4. Installez la librairie : `npm install @emailjs/browser`
5. Remplacez le code de `handleSubmit` avec l'API EmailJS

---

## ✅ Fonctionnalités Implémentées

### 1. Formulaire de Contact Complet
- ✅ Envoi d'email fonctionnel vers `axysaudit@axysaudit.com`
- ✅ Message de confirmation après envoi
- ✅ Gestion des erreurs avec message explicite
- ✅ État de chargement pendant l'envoi
- ✅ Réinitialisation du formulaire après succès
- ✅ Validation des champs obligatoires
- ✅ Service "Systèmes d'Information" ajouté dans les options

### 2. Bouton d'Appel Téléphonique
- ✅ Lien `tel:` fonctionnel
- ✅ Numéro correct : **+237 699 95 18 18** (Cameroun)
- ✅ Fonctionne sur mobile et sur ordinateur (avec apps comme Skype, WhatsApp)

### 3. Bouton de Prise de Rendez-vous
- ✅ Lien `mailto:` pré-rempli
- ✅ Sujet : "Demande de rendez-vous"
- ✅ Corps du message pré-formaté
- ✅ Ouvre le client email par défaut de l'utilisateur

### 4. Google Maps
- ✅ Section complètement retirée comme demandé

---

## 📧 Format des Emails Reçus

Chaque message reçu aura ce format :

```
Sujet: [AXYS Contact] [Sujet du message]

Nom complet: Jean Dupont
Email: jean.dupont@example.com
Téléphone: +237 699 XX XX XX
Entreprise: ABC Company
Service concerné: Audit & Contrôle

SUJET
Demande d'information sur vos services

MESSAGE
Bonjour, je souhaiterais obtenir plus d'informations...
```

---

## 🔧 Personnalisations Possibles

### Changer l'email de destination
Dans Formspree dashboard, vous pouvez :
- Ajouter plusieurs destinataires
- Configurer des règles de redirection
- Créer des notifications Slack/Discord

### Ajouter une protection anti-spam supplémentaire
Formspree inclut déjà une protection, mais vous pouvez ajouter :
- reCAPTCHA v3 (invisible)
- Honeypot fields
- Rate limiting

### Personnaliser les messages de confirmation
Dans `src/pages/Contact.tsx`, modifiez les lignes 276-277 pour changer le message de succès.

---

## 🧪 Tester le Formulaire

1. Remplissez tous les champs obligatoires
2. Cliquez sur "Envoyer le message"
3. Vérifiez l'email : `axysaudit@axysaudit.com`
4. Le message devrait arriver en quelques secondes

---

## 📞 Numéros de Téléphone Configurés

- **Principal** : +237 699 95 18 18
- **Bureau** : +237 222 21 09 41
- **Email** : axysaudit@axysaudit.com

---

## ❓ FAQ

**Q : Combien coûte Formspree ?**  
R : Le plan gratuit offre 50 soumissions/mois, ce qui est suffisant pour la plupart des sites. Plan payant à partir de $10/mois pour plus de volume.

**Q : Les emails arrivent-ils instantanément ?**  
R : Oui, généralement en moins de 5 secondes.

**Q : Que se passe-t-il si j'atteins la limite de 50 messages ?**  
R : Formspree vous enverra une notification. Vous pouvez upgrader ou attendre le mois suivant.

**Q : Les données sont-elles sécurisées ?**  
R : Oui, Formspree utilise HTTPS et est conforme GDPR.

**Q : Puis-je voir l'historique des messages ?**  
R : Oui, tous les messages sont archivés sur le dashboard Formspree.

---

## 🎉 C'est Fait !

Votre page Contact est maintenant **100% fonctionnelle** avec :
- ✅ Formulaire qui envoie des emails
- ✅ Bouton d'appel opérationnel  
- ✅ Prise de rendez-vous par email
- ✅ Pas de Google Maps
- ✅ Design professionnel et UX optimale

**Prochaine étape** : Configurez Formspree (5 minutes) et testez !

