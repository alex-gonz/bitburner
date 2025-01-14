import { Factions } from "./Faction/Factions";
import { IPlayer } from "./PersonObjects/IPlayer";

export let LastExportBonus: number = 0;

const bonusTimer = 24*60*60*1000; // 24h
export function canGetBonus(): boolean {
    const now = (new Date()).getTime()
    console.log(now);
    console.log(LastExportBonus);
    console.log(now - LastExportBonus);
    if(now - LastExportBonus > bonusTimer) return true;
    return false;
}

export function onExport(p: IPlayer): void {
    if(!canGetBonus()) return;
    for (const facName of p.factions) {
        Factions[facName].favor++;
    }
    LastExportBonus = (new Date()).getTime();
}