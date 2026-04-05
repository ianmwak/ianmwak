# Hey, I'm Ian 👋
Self-directed systems tinkerer based in South Carolina. I build, break, and rebuild things — mostly home infrastructure, automation tools, and whatever rabbit hole I fell into this week.
Currently working as a Team Lead while running a homelab that keeps getting out of hand.

---

## 🖥️ What I'm Working With
- **Desktop PC** — Ryzen 7 5800X, 32GB RAM, RTX 4060 Ti 8GB — daily driver
- **HP G6 Laptop** — Intel CPU, RTX 4060, dual-boot Windows/Linux Mint — portable workflow
- **Dell Precision T1700** — Primary home server running Proxmox
- **Raspberry Pi 4** — Steam Link client for living room PC gaming
- **Creality Ender 3** — 3D printing homelab hardware and custom parts

---

## 🔧 Projects

### 🤖 Archon — Personal AI Assistant
A self-hosted AI assistant built on a 3-layer architecture: Markdown directives define what to do, the AI handles orchestration and decision-making, and deterministic Python scripts handle execution. Integrates with Gmail, Google Calendar, Google Drive, and a local finance database. The design philosophy is that LLMs are probabilistic — so anything requiring consistency gets pushed into testable, deterministic code. Built with AI-assisted development.

**Stack:** Python, Google APIs, Ollama, Open WebUI, SQLite

---

### 📊 Proxmox Monitoring via OpenClaw *(In Progress)*
Building a custom JavaScript skill for OpenClaw — a self-hosted AI agent platform with persistent memory and tool access across any model. The skill queries the Proxmox API to pull VM/container health, resource usage, and system status. Goal: check on my homelab from anywhere by messaging my agent — no VPN or SSH required.

**Stack:** JavaScript, Proxmox API, OpenClaw

---

### 💾 TrueNAS Home Storage Server
Building a NAS from the ground up as a TrueNAS VM on Proxmox with direct disk passthrough. Designed and 3D-printed a custom drive caddy on the Ender 3 to mount the WD Red inside the T1700 chassis. Planning to add an LSI 9211-8i HBA for proper PCIe passthrough as the setup scales.

**Stack:** Proxmox, TrueNAS (VM), disk passthrough, 4TB WD Red, Creality Ender 3

---

### 🛡️ Network-Wide Ad Blocking (Pi-hole)
Deployed Pi-hole as a VM on Proxmox to block ads at the DNS level across personal devices — no subscription, no browser extension required. Scoped to personal devices only to avoid disrupting shared network traffic.

**Stack:** Proxmox, Pi-hole, local DNS

---

### 🎮 Living Room PC Gaming via Steam Link
Configured a Raspberry Pi 4 over ethernet as a Steam Link client to stream PC games to a living room TV — no long HDMI cables, no clutter.

**Stack:** Raspberry Pi 4, Steam Link, Raspberry Pi OS

---

### 🖥️ GPU Passthrough to Proxmox VM *(In Progress)*
Passing a dedicated GPU through to a Proxmox VM for accelerated workloads. Working through IOMMU group configuration and driver compatibility on the T1700 — one of the more humbling Proxmox challenges.

**Stack:** Proxmox, IOMMU, VT-d, Linux kernel parameters

---

## 🗺️ What's Next
- **LSI 9211-8i HBA** — PCIe passthrough for TrueNAS
- **Project N.O.M.A.D.** — Micro-ATX AM4 build for offline-first local AI
- **ZimaBoard 2** — Dedicated OPNsense/WireGuard router and firewall
- **CompTIA Network+** — Active cert study (→ Security+ → cloud track)
- **UPS** — Power protection for the server stack (overdue)

---

## 🛠️ Skills & Tools
`Proxmox` `Linux CLI` `Pi-hole` `DNS` `Networking` `Python` `JavaScript` `Raspberry Pi` `Home Infrastructure` `VM Deployment` `TrueNAS` `3D Printing` `OpenClaw` `Google APIs` `SQLite`

---

## 📚 Background
AP CS · AP Physics 1 & 2 · PLTW STEM · Some university · Mostly self-directed from there

---

*I learn by doing. Most of what I know came from breaking something and figuring out why.*

---

## 📬 Contact
📧 ianmwak@gmail.com
