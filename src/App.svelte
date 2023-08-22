<script lang="ts">
  // components
  import Choice from "./lib/components/Choice.svelte";
  import Pokemon from "./lib/components/Pokemon.svelte";
  import Confetti from "./lib/components/Confetti.svelte";
  import Pokeball from "./lib/components/Pokeball.svelte";
  import Score from "./lib/components/Score.svelte";

  // stores
  import { pokemonStore } from "./lib/store/pokemonStore";
  import { quizStore } from "./lib/store/quizStore";
  import BackgroundMusic from "./lib/components/BackgroundMusic.svelte";
</script>

<main class="container px-5 mx-auto my-5 md:my-10">
  <div class="flex justify-end mb-2 gap-x-2">
    <Score score={$quizStore.score} />
    <BackgroundMusic />
  </div>
  <h3
    class="text-3xl font-semibold text-center rounded text-neutral sm:text-4xl md:text-5xl"
  >
    What's this Pokémon's name?
  </h3>
  {#if $quizStore.showConfetti}
    <Confetti />
  {/if}

  {#if $pokemonStore.isLoading}
    <Pokeball />
  {:else}
    <Pokemon />
    <Choice />
  {/if}
</main>
