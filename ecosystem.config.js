module.exports = {
  apps: [
    {
      name: "web_app",
      script: "pnpm",
      args: "start",
      cwd: "/home/ubuntu/web_app",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
