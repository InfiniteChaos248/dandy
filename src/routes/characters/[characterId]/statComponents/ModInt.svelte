<script>
    export let value;

    function increment() {
    value += 1;
    }

    function decrement() {
      if(value > 0) {
        value -= 1;
      }      
    }

    function handleInput(event) {
    const val = parseInt(event.target.value, 10);
    if (!isNaN(val)) {
      value = val;
    }
    }

    function handleClick(event) {
      if(event.target.id === "inc") {
        increment();
      } else {
        decrement();
      }
    }

    let intervalId;
    function handleMouseDown(event) {
    intervalId = setInterval(() => {
      if(event.target.id === "inc") {
        increment();
      } else {
        decrement();
      }
    }, 200);
  }

  function handleMouseUp() {
    clearInterval(intervalId);
  }

  function handleMouseLeave() {
    clearInterval(intervalId);
  }
</script>

<div class="mod-int-container">
    <button id="dec" class="mod-int-button" on:click={handleClick} on:mousedown={handleMouseDown} on:mouseup={handleMouseUp} on:mouseleave={handleMouseLeave}>&lt;</button>
    <input type="number" class="mod-int" bind:value={value} on:input={handleInput} />
    <button id="inc" class="mod-int-button" on:click={handleClick} on:mousedown={handleMouseDown} on:mouseup={handleMouseUp} on:mouseleave={handleMouseLeave}>&gt;</button>
  </div>

<style>
    .mod-int-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: fit-content;        
    }

    .mod-int {
		cursor: none;
		outline: none;
    width: 30px;
		border: 1px solid blue;
    text-align: center;
    appearance: textfield;
    cursor: text;
	}	

    .mod-int-button {
        background-color: transparent;
        width: 15px;    
        cursor: pointer;
        text-align: justify;
        display: flex;
        justify-content: space-around;
        border: 1px solid green;
    }

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
	}
</style>