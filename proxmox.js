process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const PROXMOX_TOKEN = process.env.PROXMOX_TOKEN
const PROXMOX_HOST = process.env.PROXMOX_HOST
const PROXMOX_NODE = process.env.PROXMOX_NODE

async function getServerStatus() {
    const nodesResponse = await fetch(`https://${PROXMOX_HOST}/api2/json/nodes`, {
        headers: {
            'Authorization': `PVEAPIToken=${PROXMOX_TOKEN}`
        }
    });

    const vmsResponse = await fetch(`https://${PROXMOX_HOST}/api2/json/nodes/${PROXMOX_NODE}/qemu`, {
        headers: {
            'Authorization': `PVEAPIToken=${PROXMOX_TOKEN}`
        }
    });

    const nodesJson = await nodesResponse.json();
    const vmsJson = await vmsResponse.json();

    const vms = vmsJson.data;
    const truenas = vms.find(vm => vm.name === 'truenas');
    const truenasSummary = {
        name: truenas?.name,
        status: truenas?.status,
        cpu: truenas ? (truenas.cpu * 100).toFixed(2) : '0.00',
        ramUsedGB: truenas ? (truenas.mem / 1024 / 1024 / 1024).toFixed(2) : '0.00',
        ramTotalGB: truenas ? (truenas.maxmem / 1024 / 1024 / 1024).toFixed(2) : '0.00',
        uptimeHours: truenas ? (truenas.uptime / 3600).toFixed(2) : '0.00',
    };

    const nodeList = nodesJson.data;
    const server = nodeList.find(n => n.node === PROXMOX_NODE);
    const summary = {
        cpu: server ? (server.cpu * 100).toFixed(2) : '0.00',
        ramUsedGB: server ? (server.mem / 1024 / 1024 / 1024).toFixed(2) : '0.00',
        ramTotalGB: server ? (server.maxmem / 1024 / 1024 / 1024).toFixed(2) : '0.00',
        uptimeHours: server ? (server.uptime / 3600).toFixed(2) : '0.00',
    };

    const message = `Server Status:\nCPU: ${summary.cpu}%\nRAM: ${summary.ramUsedGB}GB / ${summary.ramTotalGB}GB\nUptime: ${summary.uptimeHours} hours\n\n` +
        `TrueNAS Status: ${truenasSummary.status}\nCPU: ${truenasSummary.cpu}%\nRAM: ${truenasSummary.ramUsedGB}GB / ${truenasSummary.ramTotalGB}GB\nUptime: ${truenasSummary.uptimeHours} hours`;
    console.log(message);
}

getServerStatus();