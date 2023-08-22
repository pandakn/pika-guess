<script lang="ts">
  export let countdown: number;
</script>

<!-- countdown -->
<span class="font-mono text-8xl countdown text-neutral">
  <span style={`--value:${countdown};`} />
</span>
