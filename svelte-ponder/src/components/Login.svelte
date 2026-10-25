
<script lang="ts">
  let email = $state('');
  let password = $state('');
  let message = $state('');

  function handleLogin(event: SubmitEvent) {
    event.preventDefault();

    if (!email.trim() || !password) {
      message = 'Please enter your email and password.';
      return;
    }

    message = `Welcome, ${email}!`;
  }
</script>

<h1>Login</h1>

<form onsubmit={handleLogin}>
  <label for="email">Email:</label>
  <input
    id="email"
    type="email"
    bind:value={email}
  />

  <label for="password">Password:</label>
  <input
    id="password"
    type="password"
    bind:value={password}
  />

  <button type="submit">Log In</button>
</form>

{#if message}
  <p role="status">{message}</p>
{/if}
