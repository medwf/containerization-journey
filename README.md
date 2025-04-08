# 🐳 Containerization Journey: Docker to Kubernetes

Welcome to the **Containerization Journey**! This repository is a hands-on learning path for mastering:

- Docker
- Docker Compose
- Docker Swarm
- Kubernetes

Each section includes concepts, examples, mini-projects, and commands to try out on your own machine.

---

## 📁 Repository Structure

```bash
$ tree
.
├── 01-docker-basics
├── 02-dockerfiles-and-images
├── 03-docker-compose
├── 04-docker-volumes-networks
├── 05-docker-swarm
├── 06-kubernetes-basics
├── 07-kubernetes-advanced
├── cheatsheets
└── README.md
```

## 🚀 Getting Started

> **Prerequisites**: Install Docker & Kubernetes (e.g., via Docker Desktop, Minikube, or k3s)

Clone this repo:

```bash
git clone https://github.com/medwf/ontainerization-journey.git
cd containerization-journey
```

---

## 🧭 Learning Path

### 🔹 `01-docker-basics/`

- What is Docker?
- Docker CLI essentials
- Docker Hub & Images
- Running containers
- Hands-on: Hello Docker!

### 🔹 `02-dockerfiles-and-images/`

- Writing your own Dockerfile
- Building custom images
- Tags & layers
- Hands-on: Create a simple Node.js app image

### 🔹 `03-docker-compose/`

- Compose file structure
- Services, volumes, and networks
- Hands-on: Multi-container setup (e.g., Nginx + App + DB)

### 🔹 `04-docker-volumes-networks/`

- Persistent data with volumes
- Docker bridge networks
- Custom networks for services
- Hands-on: Data persistence demo

### 🔹 `05-docker-swarm/`

- What is Docker Swarm?
- Initializing Swarm & creating services
- Scaling containers
- Hands-on: Simple cluster demo

### 🔹 `06-kubernetes-basics/`

- What is Kubernetes?
- Pods, Deployments, Services
- Hands-on: Minikube + kubectl tutorial

### 🔹 `07-kubernetes-advanced/`

- ConfigMaps & Secrets
- Volumes & Persistent Volume Claims (PVC)
- Ingress Controllers
- Helm (optional bonus)

---

## 📎 Cheatsheets

- `docker-commands.md`
- `docker-compose.md`
- `swarm.md`
- `kubernetes.md`

---

## 📚 Resources

- [Docker Docs](https://docs.docker.com/)
- [Kubernetes Docs](https://kubernetes.io/docs/)
- [Play with Docker](https://labs.play-with-docker.com/)
- [Katacoda Kubernetes Playground](https://www.katacoda.com/courses/kubernetes)

---
