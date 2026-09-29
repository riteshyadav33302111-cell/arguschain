// PM2 process definitions for running the full ArgusChain stack:
//   chain (Hardhat node) -> backend (Express PEP/PDP) -> frontend (Vite)
// Usage: pm2 start ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "argus-chain",
      cwd: __dirname,
      script: "npx",
      args: "hardhat node --hostname 0.0.0.0 --port 8545",
      autorestart: true,
    },
    {
      name: "argus-backend",
      cwd: `${__dirname}/backend`,
      script: "npm",
      args: "run start",
      autorestart: true,
      env: { PORT: 3000 },
    },
    {
      name: "argus-frontend",
      cwd: `${__dirname}/frontend`,
      script: "npx",
      args: "vite --host 0.0.0.0 --port 5173 --strictPort",
      autorestart: true,
    },
  ],
};
