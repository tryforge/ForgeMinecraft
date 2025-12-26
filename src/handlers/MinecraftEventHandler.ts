import { GameRuleType, IPBan, Operator, Player, ServerState, TypedGameRule, UserBan } from "mc-server-management"
import { BaseEventHandler, ForgeClient } from "@tryforge/forgescript"
import { ForgeMinecraft } from ".."

export interface IMinecraftEvents {
    error: [Error]
    serverStarted: []
    serverStopping: []
    serverSaving: []
    serverSaved: []
    serverActivity: []
    serverStatus: [ServerState],
    playerJoined: [Player]
    playerLeft: [Player]
    operatorAdded: [Operator]
    operatorRemoved: [Operator]
    allowListAdded: [Player]
    allowListRemoved: [Player]
    banAdded: [UserBan]
    banRemoved: [Player]
    ipBanAdded: [IPBan]
    ipBanRemoved: [string]
    gameRuleUpdated: [TypedGameRule<GameRuleType>]
}

export class MinecraftEventHandler<T extends keyof IMinecraftEvents> extends BaseEventHandler<IMinecraftEvents, T> {
    register(client: ForgeClient) {
        // @ts-ignore
        client.getExtension(ForgeMinecraft, true).emitter.on(this.name, this.listener.bind(client))
    }
}