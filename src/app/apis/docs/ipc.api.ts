import { Api } from '../../shared/api-docs/api-doc.model';

export const ipcApi: Api = {
  id: 'ipc',
  title: 'Ipc Service',
  docs: [
    {
      method: `on(channel: string, listener: Function): void`,
      desc: `Listens to channel and calls the listener when a new message arrives`,
      params: [
        {
          param: `channel: string`,
          desc: `Name of channel to listen on`
        },
        {
          param: `listener: Function`,
          desc: `Function to be called when message is received, <code class="highlight">listener(event, args...)</code>`
        }
      ],
      returns: `<code>void</code>`,
      notes: [
        `Listener function is run inside <code class="highlight">zone</code> to ensure change detection is triggered`,
        `Ensures app is running inside electron context`,
        `Package is <code class="highlight">@nda/electron</code>`
      ]
    },
    {
      method: `send(channel: string[, arg1][, arg2][, ...]): void`,
      desc: `Dispatches ipc message to be picked up on corresponding electron channel`,
      params: [
        {
          param: `channel: string`,
          desc: `Name of channel to dispatch the message on`
        },
        {
          param: `args: any[]`,
          desc: `any number or type of args to be passed as json to electron`
        }
      ],
      returns: `<code>void</code>`,
      notes: [
        `Ensures app is running inside electron context`,
        `Package is <code class="highlight">@nda/electron</code>`
      ]
    },
  ]
};