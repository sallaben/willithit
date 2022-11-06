<script lang="ts">
	import { onMount } from 'svelte'
  import x2js from 'x2js'
  import BoxScore from '$lib/components/BoxScore.svelte'
  import Bet from '$lib/components/Bet.svelte'
  import { bets } from '$lib/state/bets'
  import { boxscore } from '$lib/state/boxscore'

  async function fetchBoxScore() {
    const response = await fetch('./api/boxscore')
    const xmlData = await response.text()
    const parser = new x2js()
    $boxscore = parser.xml2js(xmlData)
  }

  onMount(fetchBoxScore)
</script>

<div class="flex-center">
  <div class="flex-col display-width">
    <div class="flex-col flex-align-start">
      <h1>Will It Hit?</h1>
      <h3>Live sports bet progress tracker</h3>
    </div> 
    <!-- todo: display schedule, select game (do it on a prior page?) -->
    <div class="flex-row">
      <div class="width-50">
        <BoxScore />
      </div>
      <div class="width-50">
        <div class="flex-col flex-wrap">
          <h3>Active Bets</h3>
          {#if $bets.length === 0}
            <div>
              <p>Click on a player's box score entry to track a new bet for that statistic.</p>
            </div>
          {/if}
          {#each $bets as data}
            <Bet {data} />
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .display-width {
    width: 50vw;
  }
  .width-50 {
    width: 50%;
  }
</style>
