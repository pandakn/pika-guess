<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let id: string;
  export let name: string;
  export let isCorrect: boolean;

  const dispatch = createEventDispatcher();

  const select = () => {
    dispatch("select", {
      value: { id, name, isCorrect },
    });
  };
</script>

<label class="p-8 bg-white rounded-lg cursor-pointer label">
  <span class="text-2xl">{name}</span>
  <input
    on:click={select}
    type="radio"
    name="pokemon"
    class="text-2xl radio checked:bg-neutral"
    value={name}
  />
</label>
