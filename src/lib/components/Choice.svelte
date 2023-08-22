<script lang="ts">
  import { onMount } from "svelte";
  // components
  import Select from "./Select.svelte";
  import Countdown from "./Countdown.svelte";

  // stores
  import { pokemonStore } from "../store/pokemonStore";
  import { quizStore } from "../store/quizStore";
  import { countdownStore } from "../store/countdownStore";

  // service
  import { fetchPokemonsInfo } from "../services/pokemon";

  let countdown = $countdownStore; // 10 sec.
  let countdownInterval: number;

  const handleSelect = (event) => {
    const value = event.detail.value;

    quizStore.update((q) => ({
      ...q,
      selectedPoke: value,
      showConfetti: false,
    }));
  };

  const handleSubmit = async () => {
    clearInterval(countdownInterval); // Clear the countdown interval

    const quiz = $quizStore.selectedPoke;
    const isCorrect = quiz?.isCorrect;

    if (isCorrect) {
      quizStore.update((q) => ({
        ...q,
        score: q.score + 1,
        showConfetti: true,
      }));
    }

    pokemonStore.update((storeData) => ({ ...storeData, isLoading: true }));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const newPokemons = await fetchPokemonsInfo();
    pokemonStore.set({ data: newPokemons, isLoading: false });
    quizStore?.update((q) => ({
      ...q,
      selectedPoke: null,
    }));
  };

  onMount(() => {
    countdownInterval = setInterval(() => {
      if (countdown > 0) {
        countdown -= 1;
      } else {
        clearInterval(countdownInterval);
        handleSubmit(); // Auto-submit when countdown reaches 0
      }
    }, 1000);
  });
</script>

<div class="form-control gap-y-4">
  <div class="absolute top-5 md:top-12">
    <Countdown {countdown} />
  </div>
  {#each $pokemonStore.data as { name, isCorrect, id }}
    <Select on:select={handleSelect} {id} {name} {isCorrect} />
  {/each}
  <button
    disabled={!$quizStore.selectedPoke}
    class="btn btn-neutral"
    on:click={handleSubmit}>Submit</button
  >
</div>
