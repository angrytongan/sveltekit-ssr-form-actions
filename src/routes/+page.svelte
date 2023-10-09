<script lang="ts">
    import type { ActionData } from './$types';

    export let form: ActionData;

    $: console.log(form);
</script>

<form method="POST">
    <input type="text" name="textfield" />
    <input type="submit" />
</form>

<pre>
{JSON.stringify(form, null, ' ')}
</pre>
