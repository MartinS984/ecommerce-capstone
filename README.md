# DevOps Capstone: Microservices E-Commerce Platform

## Project Goal
To build a scalable, production-grade microservices infrastructure using DevOps best practices.

## Tech Stack
- **Languages:** Go (Order), Python (Product), Node.js (Cart), React (Frontend)
- **Infra:** Docker, Kubernetes (Minikube/EKS), Terraform
- **CI/CD:** GitHub Actions (Lint, Build, Security Audit), ArgoCD
- **Observability:** Prometheus, Grafana, ELK Stack

## Service Matrix
| Service | Language | Port | Database | CI Status |
| :--- | :--- | :--- | :--- | :--- |
| **Order** | Go (Gin) | 8080 | - | ✅ Lint & Build |
| **Product** | Python (Flask) | 5000 | MongoDB | ✅ Flake8 & Build |
| **Cart** | Node.js (Express) | 3000 | Redis | ✅ Audit & Build |

## Progress Tracking
- [x] **Phase 1: Foundation**
    - [x] Repository Structure & Architecture Design
    - [x] Order Service Initialization (Go/Gin)
    - [x] Docker Multi-stage Builds (Go, Python, Node.js)
- [x] **Phase 2: Service Expansion & CI**
    - [x] Product Service Setup (Python/Flask)
    - [x] Cart Service Setup (Node.js/Express)
    - [x] **Monorepo CI Pipelines:** Implemented GitHub Actions with path filtering, linting, and security audits.
- [ ] **Phase 3: Kubernetes Orchestration (Local)**
    - [ ] Minikube Cluster Setup
    - [ ] K8s Manifests (Deployments & Services)
    - [ ] Inter-service Communication
- [ ] **Phase 4: AWS Cloud Infrastructure**
    - [ ] Terraform State Management
    - [ ] EKS Cluster Provisioning
