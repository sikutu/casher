<script>
    export let name
    export let price
    export let total
    
    export let i
    const cntUP = () => {
    i = i + 1
  }
  const reset = () => {
    i = 0
  }
  $:{
        total = price * i
    }
</script>
{name}<br>
{price}<br>
{total}<br>
<button on:click={cntUP}>cnt up</button>
<button on:click={reset}>reset</button><br>
