<script>
    import Child from "./Child.svelte";
    const names = [1, 2, 3]           //商品名
    const prices = [100, 200, 300]    //値段
    let n = names.length
    let totals = Array(n).fill(0)     //商品単位の合計金額の配列．初期値は全て0
    let total = 0
    let nom = Array(n).fill(0)
    const reset = () => {
      nom = Array(n).fill(0)
    }
    $:{
      total = 0
      for (let i=0; i <n; i++){
        total += totals[i]
      }
      total = total
      console.log(totals)
    }
  </script>
  {#each names as name, i }
    <Child name = {name} price = {prices[i]} bind:total = {totals[i]} i ={nom[i]}></Child>
  {/each}
  
  
  合計金額<br>
  {total}<br>
  <button on:click={reset}>reset</button><br>
  
  
  <style>
  
  </style>