<script>
  export let repoLink = "";
  export let repoName = "";
  export let madeWith = "";
  export let repoIcon = "";
  export let ifSvg = false;
  export let svgElement = "";
  export let colorInvert = false;
  export let repoDesc = "";
</script>

<a class="flex card card-hover p-4 w-72 sm:h-auto flex-col items-center  antialiased px-5" href="{repoLink}" target="_blank">
  <div class="repoIcon p-5 grow h-3/4 {colorInvert ? "dark:invert":""}">
    {#if ifSvg}
        {@html svgElement}
    {:else}
        <img class="sm:h-auto h-full w-full" src="{repoIcon}" alt="">
    {/if}
  </div>
  <div class="flex flex-col items-center mt-2 h-1/4 justify-between">
    <div class="repoName text-lg font-bold">
      <p>{repoName}</p>
    </div>
    <div class="repoDesc font-light text-xs text-center">
      <p>{repoDesc == null?"...":repoDesc}</p>
    </div>
    <div class="madeWith dark:font-thin font-semibold tracking-widest  " style="font-size: 0.5rem;">
      <p>Made with <span class="font-bold text-xs" >{madeWith == null? "Love" : madeWith}</span></p>
    </div>
  </div>
</a>