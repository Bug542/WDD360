
<script lang="ts">
  let {
    label,
    value = $bindable(),
    multiline = false
  }: {
    label: string;
    value: string;
    multiline?: boolean;
  } = $props();

  let editing = $state(false);
  let draft = $state('');

  function startEditing() {
    draft = value;
    editing = true;
  }

  function save() {
    value = draft;
    editing = false;
  }

  function cancel() {
    draft = value;
    editing = false;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      cancel();
    } else if (event.key === 'Enter' && !multiline) {
      event.preventDefault();
      save();
    }
  }
</script>

<div class="field">
  <strong>{label}</strong>

  {#if editing}
    {#if multiline}
      <textarea
        bind:value={draft}
        onkeydown={handleKeydown}
        onblur={save}
      ></textarea>
    {:else}
      <input
        type="text"
        bind:value={draft}
        onkeydown={handleKeydown}
        onblur={save}
      />
    {/if}
  {:else}
    <button type="button" onclick={startEditing}>
      {value || 'Click to edit'}
    </button>
  {/if}
</div>

<style>
  .field {
    margin-bottom: 1rem;
    text-align: left;
  }

  strong {
    display: block;
    margin-bottom: 0.35rem;
  }

  button, input, textarea {
    font: inherit;
    padding: 0.5rem;
    width: 100%;
    box-sizing: border-box;
  }

  textarea {
    min-height: 100px;
  }
</style>
