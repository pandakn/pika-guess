<script lang="ts">
  export let name: string;
  export let img: string;
</script>

<div
  class="flex flex-col items-center justify-between max-w-xs p-5 mx-auto my-5 h-80"
>
  <img src={img} alt={name} class="w-full h-full poke-image" />
</div>

<style>
  .poke-image {
    image-rendering: pixelated;
  }
</style>
