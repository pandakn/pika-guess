<script lang="ts">
  import { Confetti as C } from "svelte-confetti";
</script>

<div class="confetti-container">
  <C
    rounded={true}
    x={[-5, 5]}
    y={[0, 0.1]}
    delay={[0, 2000]}
    duration="3000"
    amount="200"
    fallDistance="80vh"
  />
</div>

<style>
  .confetti-container {
    @apply fixed -top-12 left-0 h-screen w-screen flex justify-center overflow-hidden pointer-events-none;
  }
</style>
