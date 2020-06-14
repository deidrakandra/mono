import { Api } from '../../shared/api-docs/api-doc.model';

export const configApi: Api = {
  id: 'config',
  title: 'Configuration Service',
  docs : [
    {
      method: `lookup(key: string): string`,
      desc: `Retrieves a configuration value defined in the cms resource bundle`,
      params: [
        {
          param: `key: string`,
          desc: `key from cms resource bundle`
        }
      ],
      returns: `<code>string</code>`,
      notes: [`If key is not found in the resource bundle, the key value will be returned`]
    },
    {
      method: `lookupNumber(key: string): number | null`,
      desc: `Retrieves a configuration value defined in the cms resource bundle`,
      params: [
        {
          param: `key: string`,
          desc: `key from cms resource bundle`
        }
      ],
      returns: `<code class="p-right-sm">number</code> or <code class="p-left-sm">null</code>`,
      notes: [
        `Converts string value in resource bundle to number`,
        `If key is not found in the resource bundle, <code class="highlight">null</code> will be returned`
      ]
    },
    {
      method: `lookupObject(key: string): any`,
      desc: `Retrieves a configuration object defined in the cms resource bundle`,
      params: [
        {
          param: `key: string`,
          desc: `key from cms resource bundle`
        }
      ],
      returns: `<code>any</code>`,
      notes: [
        `If key is not found in the resource bundle, the key value will be returned`
      ]
    },
    {
      method: `lookupFlag(key: string): boolean`,
      desc: `Retrieves a configuration flag defined in the cms resource bundle`,
      params: [
        {
          param: `key: string`,
          desc: `key from cms resource bundle`
        }
      ],
      returns: `<code>boolean</code>`,
      notes: [
        `Truthy values are <code>"true"</code> or <code>"1"</code>`,
        `If key is not found in the resource bundle, the key value will be returned`
      ]
    },
    {
      method: `lookupOrNull(key: string): string | null`,
      desc: `Retrieves a configuration value defined in the cms resource bundle`,
      params: [
        {
          param: `key: string`,
          desc: `key from cms resource bundle`
        }
      ],
      returns: `<code>string</code> or <code>null</code>`,
      notes: [
        `If key is not found in the resource bundle, <code class="highlight">null</code> will be returned`
      ]
    }
  ]
};