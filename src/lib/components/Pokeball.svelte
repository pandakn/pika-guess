<script lang="ts">
  import PokeballIcon from "../../assets/icons/pokeball.png";
</script>

<div
  class="absolute w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
>
  <img src={PokeballIcon} alt="pokeball" class="w-full h-full pokeball" />
</div>

<style>
  .pokeball {
    animation: shake 1.25s cubic-bezier(0.36, 0.07, 0.19, 0.97) 3;
  }

  @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0);
    }
    20% {
      transform: translate(-10px, 0) rotate(-20deg);
    }
    30% {
      transform: translate(10px, 0) rotate(20deg);
    }
    50% {
      transform: translate(-10px, 0) rotate(-10deg);
    }
    60% {
      transform: translate(10px, 0) rotate(10deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
</style>
