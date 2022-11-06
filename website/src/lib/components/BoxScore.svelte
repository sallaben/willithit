<script lang="ts">
  import { addBet } from '$lib/state/bets'
  import { boxscore } from '$lib/state/boxscore'
	import type { PlayerStatistics } from '$lib/types'

  const visibleCategories: Array<keyof PlayerStatistics> = [ 
    '_points', 
    '_assists', 
    '_rebounds', 
    '_steals', 
    '_blocks', 
    '_three_points_made', 
    '_double_double', 
    '_triple_double'
  ]
</script>

{#if $boxscore}
  <div class="flex-col">
  {#each $boxscore.game.team as team}
     <h3>{team._market} {team._name}</h3>
     <table>
       <thead>
         <th>#</th>
         <th>Name</th>
         <th>Time</th>
         <th>Pts</th>
         <th>Ast</th>
         <th>Reb</th>
         <th>Stl</th>
         <th>Blk</th>
         <th>Thr</th>
         <th>2##</th>
         <th>3##</th>
       </thead>
       {#each team.players.player as player}
         <tr>
           <td class="background-light">{player._jersey_number}</td>
           <td class="background-light">{player._full_name}</td>
           <td class="background-light">{player.statistics._minutes}</td>
           {#each visibleCategories as category}
             <td
               class="cursor-pointer" 
               on:click={() => addBet(player, category, player.statistics[category])}
               on:keypress={() => addBet(player, category, player.statistics[category])}
               >
               {#if category === '_double_double' || category === '_triple_double'}
                 {player.statistics[category] === 'true' ? 'HIT!' : ''}
               {:else} 
                 {player.statistics[category]}
               {/if}
             </td>
           {/each}
         </tr>
       {/each}
     </table>
   {/each}
 </div>
{:else}
  <p>Loading...</p>
{/if}
