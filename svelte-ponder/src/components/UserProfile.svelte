
<script lang="ts">
  import InlineField from './InlineField.svelte';
  import { useInlineEdit } from '../lib/useInlineEdit.svelte';

  const profile = useInlineEdit({
    name: 'Sample User',
    email: 'user@example.com',
    bio: 'I am learning Svelte!'
  });
</script>

<main>
  <h1>User Profile</h1>
  <p>Click on a field to edit it.</p>

  <InlineField
    label="Name"
    bind:value={profile.draft.name}
  />

  <InlineField
    label="Email"
    bind:value={profile.draft.email}
  />

  <InlineField
    label="Bio"
    bind:value={profile.draft.bio}
    multiline={true}
  />

  {#if profile.isDirty}
    <div class="actions">
      <button onclick={profile.save}>
        Save Changes
      </button>

      <button onclick={profile.cancel}>
        Cancel
      </button>
    </div>
  {/if}
</main>

<style>
  main {
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    background: #242424;
    border-radius: 12px;
  }

  h1 {
    text-align: center;
  }

  .actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  button {
    padding: 0.6rem 1rem;
    cursor: pointer;
  }
</style>
