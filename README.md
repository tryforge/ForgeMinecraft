<div align="center">

<img height="150" width="150" src="https://raw.githubusercontent.com/tryforge/ForgeMinecraft/main/assets/ForgeMinecraft.png" alt="ForgeMinecraft">

# ForgeMinecraft
ForgeMinecraft is an extension that provides real-time Minecraft server management via the management server protocol, alongside various functions for retrieving status and metadata from Java and Bedrock servers.

<a href="https://github.com/tryforge/ForgeMinecraft/"><img src="https://img.shields.io/github/package-json/v/tryforge/ForgeMinecraft/main?label=@tryforge/forge.minecraft&color=5c16d4" alt="@tryforge/forge.minecraft"></a>
<a href="https://github.com/tryforge/ForgeScript/"><img src="https://img.shields.io/github/package-json/v/tryforge/ForgeScript/main?label=@tryforge/forgescript&color=5c16d4" alt="@tryforge/forgescript"></a>
<a href="https://discord.gg/hcJgjzPvqb"><img src="https://img.shields.io/discord/997899472610795580?logo=discord" alt="Discord"></a>

</div>

---

## Contents

1. [Installation](#installation)
2. [Management Server](#management-server)
3. [Documentation](https://docs.botforge.org/p/ForgeMinecraft/)

<h3 align="center">Installation</h3><hr>

1. Run the following command to install the required `npm` packages:
    ```bash
    npm i @tryforge/forge.minecraft
    ```

2. Here’s an example of how your main file should look:
    ```js
    const { ForgeClient } = require("@tryforge/forgescript")
    const { ForgeMinecraft } = require("@tryforge/forge.minecraft")

    const minecraft = new ForgeMinecraft({
        events: [
            "playerJoined",
            "serverStarted"
        ],
        server: {
            host: "0.0.0.0"
            port: 3000
            token: "YourAuthToken"
        }
    })

    const client = new ForgeClient({
        ...options // The options you currently have
        extensions: [
            minecraft
        ]
    })

    client.commands.load("commands")
    minecraft.commands.load("minecraft")

    client.login("YourToken")
    ```

    > ℹ️ **Note**\
    > View all available client options [here](https://tryforge.github.io/ForgeMinecraft/interfaces/IForgeMinecraftOptions.html).

<h3 align="center">Management Server</h3><hr>

