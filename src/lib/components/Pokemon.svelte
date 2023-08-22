<script async script lang="ts">
  import Card from "./Card.svelte";
  import { pokemonStore } from "../store/pokemonStore";

  const urlGif = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated`;
</script>

<div class="">
  {#each $pokemonStore.data as { name, id, isCorrect }}
    {#if isCorrect}
      <Card {name} img={`${urlGif}/${id}.gif`} />
    {/if}
  {/each}
</div>
