<script lang="ts">
  import { slide } from 'svelte/transition';
  import emailjs from '@emailjs/browser';
  import Loading from '$src/components/Loading.svelte';
  import Heading from '$src/components/Heading.svelte';
  import { config } from '$src/store/Config';
  import { t } from '$src/store/Language';

  // Email form values
  let name: string = '';
  let email: string = '';
  let message: string = '';

  // Mail send status
  type MessageStatus = 'pending' | 'sending' | 'success' | 'error';
  let mailSendStatus: MessageStatus = 'pending';
  let showMailForm = true;

  const reShowMailForm = () => {
    mailSendStatus = 'pending';
    showMailForm = true;
  };

  const sendEmail = () => {
    // Update state in UI
    mailSendStatus = 'sending';

    // Grab users input from the form
    const templateParams = {
      from_name: name,
      from_email: email,
      message_body: message,
    };
    
    emailjs.send(
      config.contact.mailerConfig.service_id,
      config.contact.mailerConfig.template_id,
      templateParams,
      config.contact.mailerConfig.user_id,
      )
      .then((response) => {
        console.log('SUCCESS!');
        mailSendStatus = response.status === 200 ? 'success' : 'error';
        showMailForm = false;
      })
      .catch((error) => {
        console.log('FAILED...', error.text);
        mailSendStatus = 'error';
      });
  };
</script>

<form
  on:submit|preventDefault={sendEmail}
  class="contact-form"
  name="website-contact-form"
>
  <Heading level="h2" color="var(--accent-4)">
    {$t('contact.email')}
  </Heading>
  {#if showMailForm && mailSendStatus != 'sending'}
    <div class="user-details">
      <div class="input-group">
        <label for="name">
          {$t('contact.email.name')}
        </label>
        <input
          bind:value={name}
          required
          minlength="2"
          maxlength="30"
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div class="input-group">
        <label for="email">Email</label>
        <input
          bind:value={email}
          required
          minlength="5"
          maxlength="40"
          type="email"
          name="email"
          id="email"
        />
      </div>
    </div>
    <label for="message">
      {$t('contact.email.message')}
    </label>
    <textarea
      bind:value={message}
      required
      minlength="20"
      maxlength="500"
      name="message"
      id="message"
      rows="5"
    />
    <button type="submit">
      {$t('contact.email.send')}
    </button>
  {/if}

  {#if mailSendStatus === 'sending'}
    <Loading title="Sending" hideHomeButton={true} />
  {:else if mailSendStatus !== 'pending'}
    <div class="response-info" transition:slide>
      {#if mailSendStatus === 'success'}
        <p class="success">
          Message Sent :)
        </p>
      {:else if mailSendStatus === 'error'}
        <p class="error">
          Snap! Failed to send :(
        </p>
      {/if}
      <button type="button" on:click={reShowMailForm}>
        Return to Message
      </button>
    </div>
  {/if}
</form>

<style lang="scss">
  h2 {
    font-size: 2rem;
    margin: 1rem 0;
    color: var(--accent);
    &:before {
      content: '>';
      margin-right: 6px;
      opacity: 0.8;
    }
  }
  form {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 500px;
    .user-details {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1rem;
      .input-group {
        flex: 1;
        width: 200px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        input {
          width: 100%;
        }
      }
    }
    .response-info {
      background: var(--card-background);
      border-radius: var(--curve-factor);
      padding: 1rem;
      text-align: center;
      p {
        font-size: 1.25rem;
        margin: 0.5rem;
        font-weight: bold;
        &.success {
          color: var(--success);
        }
        &.error {
          color: var(--error);
        }
      }
      button {
        background: none;
        border: none;
        font-size: 0.75rem;
        margin: 0;
      }
    }
    input,
    textarea,
    button {
      background: var(--card-background);
      border: var(--card-border);
      color: var(--foreground);
      border-radius: 4px;
      font-size: 1.25rem;
      padding: 0.25rem 0.5rem;
      margin: 0.5rem 0;
      font-family: FiraCode, monospace;
      transition: all ease-in-out 0.25s;
      &:focus {
        outline: none;
      }
    }
    textarea {
      resize: vertical;
      min-height: 5rem;
      max-height: 15rem;
    }
    label {
      margin-right: 0.5rem;
    }
    button {
      cursor: pointer;
      &:hover {
        background: var(--accent);
        color: var(--card-background);
      }
    }
  }
</style>