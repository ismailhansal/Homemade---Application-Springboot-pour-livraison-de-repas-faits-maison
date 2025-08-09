# Homemade Delivery - Application de Livraison de Repas Faits Maison

Homemade Delivery est une application web full-stack permettant la gestion complète d’un service de livraison de repas faits maison.  
Le backend est développé en Spring Boot avec PostgreSQL, et le frontend en React avec TypeScript.

---

## Fonctionnalités principales

- Gestion des utilisateurs (clients, cuisiniers)  
- Catalogue dynamique des plats et menus proposés par les cuisiniers  
- Système de commande avec panier, validation et historique  
- Suivi en temps réel des livraisons  
- Authentification et autorisation sécurisées avec JWT  
- Interface d’administration pour gérer utilisateurs, commandes et statistiques  

---

## Architecture technique

### Backend (Spring Boot)

- **Spring Boot 3.4.5**  
- **Spring Data JPA** pour la gestion des entités et accès à la base PostgreSQL  
- **Spring Security** avec JWT (JSON Web Tokens) pour sécuriser l’authentification et les accès  
- **Spring Web MVC** pour exposer une API RESTful  
- **PostgreSQL** comme base de données relationnelle  
- **JUnit & Mockito** pour les tests unitaires  
- **spring-security-test** pour tester la sécurité  

### Frontend (React + TypeScript)

- React avec TypeScript pour un typage strict  
- React Router pour la navigation  
- Axios pour les appels API REST  
- Formik et Yup pour la gestion et validation des formulaires  
- Tailwind CSS pour le design  

---

## Installation & démarrage

### Prérequis

- Java 21+  
- Maven  
- PostgreSQL  
- Node.js & npm ou yarn  

---

### Backend

1. Cloner le dépôt  
   ```bash
   git clone https://github.com/ton-utilisateur/homemade-delivery.git
   cd homemade-delivery/backend
