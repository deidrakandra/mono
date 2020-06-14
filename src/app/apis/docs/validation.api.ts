import { Api } from '../../shared/api-docs/api-doc.model';

export const  validationApi: Api = {
  id: 'validation',
  title: 'Validation Service',
  docs: [
    {
      method: `getMessageFromErrors(errors: ValidationErrors): string`,
      desc: `Retrieves the standard validation message defined in the cms resource bundle based on the errors passed in`,
      params: [
        {
          param: `errors: ValidationErrors`,
          desc: `Control errors reported from the form`
        }
      ],
      returns: `<code>string</code>`,
      notes: [
        `This is the basis of the <code class="highlight">errorMsg(controlName)</code> used in the templates`
      ]
    },
    {
      method: `getMessage(key: string): string`,
      desc: `Retrieves the standard validation message defined in the cms resource bundle based on the key passed in`,
      params: [
        {
          param: `key: string`,
          desc: `key from cms resource bundle`
        }
      ],
      returns: `<code>string</code>`,
      notes: [
        `This works best with static error messages. To pass in a context object to resolve against, see <code class="highlight">resolveMessage(key, contextObj)</code>`
      ]
    },
    {
      method: `getRequiredMessage(): string`,
      desc: `Retrieves the standard validation message for required fields`,
      params: [],
      returns: `<code>string</code>`,
      notes: [
        `This is the basis for the <code class="highlight">reqErrorMsg(controlName)</code> used in the templates`,
      ]
    },
    {
      method: `getDefaultMessage(): string`,
      desc: `Retrieves the standard validation message for errors that have no specific message`,
      params: [],
      returns: `<code>string</code>`,
      notes: []
    },
    {
      method: `resolveMessage(key: string, contextObj: any): string`,
      desc: `Retrieves the standard validation message defined in the cms resource bundle based on the key passed in and resolves any string templates with the params object passed along with it. String templates should be in the form of <code class="highlight">\${var}</code>.`,
      params: [
        {
          param: `key: string`,
          desc: `key from cms resource bundle`
        },
        {
          param: `contextObj: any`,
          desc: `context parameters in whatever form necessary to resolve any string templates embedded in validation message`
        }
      ],
      returns: `<code>string</code>`,
      notes: [
        `Example is`,
        `<code><pre>resolveMessage('validation.min-length', { 
 min : error.minlength.requiredLength
});</pre></code>`,
        `where <code class="highlight">validation.min-length</code> is <span class="bold">Minimum length is \${min}</span>`,
      ]
    },
  ]
};
