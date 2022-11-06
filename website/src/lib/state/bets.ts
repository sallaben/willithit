import { writable } from "svelte/store";
import type { Player, Bet, PlayerStatistics } from '$lib/types'

export const bets = writable<Bet[]>([])

export function addBet(player: Player, category: keyof PlayerStatistics, value: string) {
  const newBet: Bet = {
    player,
    category,
    value,
  }
  bets.update((data) => [...data, newBet])
}

export function removeBet(bet: Bet) {
  bets.update((data) => data.filter((test) => test !== bet))
}
