<script>
    function reset() {
        const element = document.getElementById("ds");
const checkboxes = element.querySelectorAll("input");
checkboxes.forEach(checkbox => {
    checkbox.checked = false;
});
    }
</script>

<div class="ds-box" id="ds">
    DEATH SAVES&nbsp;<span on:click={reset} on:keydown={reset} role="button" tabindex=0 class="ds-box-reset">RESET</span>
    <div class="ds-box-content">PASS&nbsp;<input type="checkbox">&nbsp;<input type="checkbox">&nbsp;<input type="checkbox"></div>
    <div class="ds-box-content">FAIL&nbsp;<input type="checkbox">&nbsp;<input type="checkbox">&nbsp;<input type="checkbox"></div>
</div>

<style>
    .ds-box {
		display: flex;
		flex-direction: column;
		width: fit-content;
		height: fit-content;
		border-style: dashed;
		border-width: 1px;
		padding: 1px;
	}

	.ds-box-content {
		display: flex;
		flex-direction: row;
		justify-content: end;
		border-style: solid;
		border-width: 1px;
		padding: 1px;
	}

    .ds-box-reset {
        cursor: pointer;
        border-style: solid;
        border-width: 1px;
        border-color: black;
        font-size: xx-small;
        font-style: bold;
        width: fit-content;
    }
</style>