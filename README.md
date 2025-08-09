# Homemade Delivery - Application de Livraison de Repas Faits Maison

Homemade Delivery est une application web full-stack permettant la gestion complète d’un service de livraison de repas faits maison.  
Le backend est développé en Spring Boot avec PostgreSQL, et le frontend en React avec TypeScript.

---

<img width="2479" height="1269" alt="Capture d'écran 2025-04-13 150826" src="https://github.com/user-attachments/assets/0aa6bebb-d940-4e03-9abb-6a477a0475c3" />

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

### Prérequis

- Java 21+  
- Maven  
- PostgreSQL  
- Node.js & npm ou yarn  

---
