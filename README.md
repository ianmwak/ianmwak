# Hey, I'm Ian 👋
Self-directed systems tinkerer based in South Carolina. I build, break, and rebuild things — mostly home infrastructure, automation tools, and whatever rabbit hole I fell into this week.
Currently working as a Team Lead while running a homelab that keeps getting out of hand.
---
## 🖥️ What I'm Working With
- **Desktop PC** — Ryzen 7 5800X, 32GB RAM, RTX 4060 Ti 8GB — daily driver and OpenClaw host
- **HP G6 Laptop** — Intel CPU, RTX 4060, dual-boot Windows/Linux Mint — 3D model slicing and portable workflow (built-in microSD reader)
- **Dell Precision T1700** — Primary home server running Proxmox
- **Raspberry Pi 4** — Steam Link client for living room PC gaming
- **4TB NAS drive** — TrueNAS build in progress
- **Creality Ender 3** — 3D printing homelab hardware and custom parts
---
## 🔧 Projects

### 💾 TrueNAS Home Storage Server
Building a NAS from the ground up as a TrueNAS VM running on Proxmox. Currently using direct disk passthrough with a 4TB WD Red as the first storage drive. Designed and 3D-printed a custom drive caddy on the Ender 3 to mount the drive inside the T1700 chassis. Planning to add an LSI 9211-8i HBA for proper PCIe passthrough as the setup scales.

**Stack:** Proxmox, TrueNAS (VM), disk passthrough, 4TB WD Red, Creality Ender 3

---

### 📊 Proxmox Monitoring via OpenClaw *(In Progress)*
Building a custom JavaScript skill for OpenClaw — a self-hosted AI agent platform that maintains persistent memory and tools across any model. The skill queries the Proxmox API to pull VM/container health, resource usage, and system status. Once deployed, I'll be able to check on my homelab from anywhere by messaging my OpenClaw agent — no VPN or SSH required.

**Stack:** JavaScript, Proxmox API, OpenClaw

---

### 🛡️ Network-Wide Ad Blocking (Pi-hole)
Deployed Pi-hole as a VM on Proxmox to block ads at the DNS level across personal devices — no subscription, no browser extension required. Intentionally scoped to personal devices only to avoid disrupting shared network traffic.

**Stack:** Proxmox, LXC containers, Pi-hole, local DNS configuration

---

### 🎮 Living Room PC Gaming via Steam Link
Configured a Raspberry Pi 4 over ethernet as a Steam Link client to stream PC games to a living room TV — no long HDMI cables, no clutter.

**Stack:** Raspberry Pi 4, Steam Link, ethernet, Raspberry Pi OS

---

### 🖥️ GPU Passthrough to Proxmox VM *(In Progress)*
Attempting to pass a dedicated GPU through to a Proxmox VM for accelerated workloads. Currently working through IOMMU group configuration and driver compatibility on a Dell Precision T1700 — one of the more humbling Proxmox challenges.

**Stack:** Proxmox, IOMMU, VT-d, Linux kernel parameters

---

### 🎮 Modded Minecraft Server
Running a Crafty controller dashboard on Proxmox for a self-hosted modded Minecraft server. Pending final modpack selection and live testing with friends.

**Stack:** Proxmox VM, Crafty Controller, Java

---
## 🗺️ What's Next
- **HBA Card** — Adding an LSI 9211-8i for proper PCIe passthrough to TrueNAS
- **Meshnet** — NordVPN meshnet on the server for remote status monitoring
- **UPS** — Power protection for the server stack (overdue)
- **NAS Expansion** — Additional drives and redundancy planning for TrueNAS
---
## 🛠️ Skills & Tools
`Proxmox` `Linux CLI` `Pi-hole` `DNS` `Networking` `Python` `JavaScript` `Raspberry Pi` `Home Infrastructure` `VM Deployment` `Container Setup` `TrueNAS` `3D Printing` `OpenClaw`
---
## 📚 Background
AP CS · AP Physics 1 & 2 · PLTW STEM · Some university · Mostly self-directed from there
---
*I learn by doing. Most of what I know came from breaking something and figuring out why.*
---
## 📬 Contact
📧 ianmwak@gmail.com
