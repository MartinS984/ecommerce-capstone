# DevOps Capstone: Microservices E-Commerce Platform

## Project Goal
To build a scalable, production-grade microservices infrastructure using DevOps best practices, deployed via GitOps.

## Tech Stack
- **Languages:** Go (Order), Python (Product), Node.js (Cart)
- **Cloud Provider:** AWS (EKS, ECR, VPC - *Phase 4 Verified*)
- **Infrastructure as Code:** Terraform (S3/DynamoDB Remote State)
- **Container Orchestration:** Kubernetes / Minikube
- **Continuous Delivery:** ArgoCD (GitOps)

## GitOps Architecture (Phase 5)
- **Tool:** ArgoCD
- **Source of Truth:** This GitHub Repository (`/k8s` folder)
- **Deployment Strategy:** Declarative & Automated
- **Self-Healing:** Enabled (ArgoCD automatically reverts manual cluster changes to match Git)

## Progress Tracking
- [x] **Phase 1: Foundation** (Go/Gin Service & Multi-stage Docker)
- [x] **Phase 2: Service Expansion & CI** (Python, Node.js, GitHub Actions)
- [x] **Phase 3: Kubernetes Orchestration (Local)** (Minikube & Manifests)
- [x] **Phase 4: AWS Cloud Infrastructure**
    - [x] Terraform Remote State
    - [x] EKS Cluster & ECR Provisioning
    - [x] Cloud Verification & Teardown
- [x] **Phase 5: GitOps & Observability**
    - [x] Install & Configure ArgoCD
    - [x] Implement Declarative GitOps Workflow (Local Sync)
    - [ ] Prometheus & Grafana Monitoring
    - [ ] ELK Stack Logging
