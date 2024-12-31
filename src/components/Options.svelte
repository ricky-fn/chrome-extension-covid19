<script lang="ts">
    import { type ApiResponse } from "../types"
    import { formatNumber } from "../utils/number"
    import Spinner from "./Spinner.svelte"

    const fetchRankData = ():Promise<ApiResponse> => {
        return chrome.runtime.sendMessage({
            type: "rank",
        });
    }
    const openLink = () => {
        chrome.runtime.sendMessage({
            type: "url",
            url: "https://ricky-fn.github.io/VisualizerCovid19/"
        });
    }
</script>

<div class="min-w-[400px] p-5 bg-[#222]">
    <h2 class="text-red-400 text-xl font-bold">All Countries & Territories (by cases)</h2>
    
    <div class="mt-5 overflow-y-auto max-h-[480px]">
        {#await fetchRankData()}
            <Spinner/>
        {:then data} 
            {#each data.countriesSortedByActive as countryCode}
                <button type="button" class="bg-[#111] p-4 flex border-b-[1px] border-yellow-500 w-full text-left content-start" on:click={openLink}>
                    <div class="h-10 w-12 mr-2">
                        <img class="h-full block" src={data.countries[countryCode].flag} alt={data.countries[countryCode].name}>
                    </div>
                    <div class="flex-1">
                        <p class="text-[#c8c7c7] text-base leading-tight">{data.countries[countryCode].name}</p>
                        <p class="text-[#d12121]">{formatNumber(data.countries[countryCode].cases)} <span class="text-gray-300">total Cases</span></p>
                    </div>
                </button>
            {/each}
        {/await}
    </div>
</div>
