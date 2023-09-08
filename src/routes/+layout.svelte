<script>
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { initializeStores } from '@skeletonlabs/skeleton';
	import { Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	initializeStores()

	const drawerStore = getDrawerStore()
</script>

<Drawer>
	<div class="h-full w-full flex flex-col relative">
		<div class="flex items-start w-full justify-end absolute">
			<button class=" btn-icon btn mx-4 my-3" on:click={()=>{ drawerStore.close() }} aria-label="information close button">
				<img class="h-8 dark:invert" src="/close.png" alt="">
			</button>
		</div>

		<div class="w-full flex flex-col justify-center items-center h-full">
			<a href="https://github.com/Brajo280603" class="flex flex-col justify-center items-center">
				<img class="dark:invert h-52 md:h-96 " src="/github-lg.svg" alt="">
				<p class="text-xl">All My GitHub Projects</p>
			</a>
		</div>

	</div>
</Drawer>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="h-full btn-icon active:shadow-none btn" on:click={()=>{ drawerStore.open() }} aria-label="information open button">
					<img class="h-8 dark:invert" src="/info.png" alt="">
				</button>
			</svelte:fragment>
			
			<div class="flex-grow flex justify-center">
				<a href="/"><strong class="md:text-xl uppercase text-lg">My GitHub Projects</strong></a>
			</div>

			<svelte:fragment slot="trail">
				<LightSwitch></LightSwitch>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
