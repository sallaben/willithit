<script lang="ts">
  import { removeBet } from '$lib/state/bets'
	import type { Bet, BoxScoreData } from '$lib/types'

  export let data: Bet

  function checkHit(): boolean {
    const value = data.player.statistics[data.category]
    if (data.condition === 'over') {
      return value > data.value
    } else if (data.condition === 'under') {
      return value < data.value
    }
    return value === data.value
  }

  $: data, data.hit = checkHit()
</script>

<div class="bet flex-row" class:hit={data.hit}>
  <div class="flex-col">
    <div>
      <strong>{data.player._full_name}</strong>
    </div>
    <div>{data.category.substring(1).replaceAll('_', ' ').toUpperCase()}</div>
  </div>
  <div>
    {#if data.category === '_triple_double' || data.category === '_double_double'}
      <select bind:value={data.value}>
        <option value="true">YES</option>
        <option value="false">NO</option>
      </select>
    {:else}
      <select bind:value={data.condition}>
        <option value="over">OVER</option>
        <option value="under">UNDER</option>
        <option value="equal">EQUAL</option>
      </select>
      <input type="number" bind:value={data.value} />
    {/if}
  </div>
  <div>
    <button on:click={() => removeBet(data)}>Delete</button>
  </div>
</div>

<style>
  .bet {
    border: 1px solid black;
    justify-content: space-between;
  }
  .hit {
    background-color: lightgreen;
  }
</style>
