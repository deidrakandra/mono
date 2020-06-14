import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { LookupService } from '../services/lookup/lookup.service';
import { Template } from '../services/template/template';
import { Faq, Glossary, HelpCenter, Video } from '../components/help-center/help-center.model';
import { ServiceConfig } from '../module-config';


export class MockLookupServiceDefaults extends LookupService {
  public keys;

  constructor(
    private httpClient: HttpClient,
    private forkJoin?: Object
  ) {
    super(httpClient, [`localhost:8080/api/content/base`]);
  }

  onLoadComplete(keys) {
    this.keys = keys;
  }

  doGet(): Promise<any> {
    return of(this.forkJoin).toPromise();
  }
}

export class MockContentServiceDefault extends MockLookupServiceDefaults {
  constructor(
    private httpClients: HttpClient,
    private forkJoins?: Object
  ) {
    super(httpClients, forkJoins);
  }

  lookupHelpCenter(key: string): HelpCenter {
    return this.lookupObject(`help.${key}`);
  }
}


export class MockLookupServiceApp extends LookupService {
  public keys;

  constructor(
    private httpClient: HttpClient,
    private forkJoin?: Object
  ) {
    super(httpClient, [`localhost:8080/api/content/base`, `localhost:8080/api/content/app`]);
  }

  onLoadComplete(keys) {
    this.keys = keys;
  }

  doGet(): Promise<any> {
    return of(this.forkJoin).toPromise();
  }
}


export class MockRouter {
  navigate(segment: string) { }
}


export class MockContentService {
  load() {}
  lookup() { }
  lookupHelpCenter() { }
}


export class MockConfigService {
  lookup() { }
  lookupNumber() { }
}


export class MockValidationService {
  getMessageFromErrors() {}
}


export const serviceConfigFixture: ServiceConfig = {
  host: 'host',
  contentIds: ['content'],
  configurationIds: ['config'],
  dictionaryServiceEndpoint: 'dictionary',
  configEndpoint: 'api'
};

export const templateFixture: Template = {
  footer: [
    {
      name: 'Contact Us',
      url: '/footer/contact-us.html',
      title: ''
    },
    {
      name: 'Disclaimer',
      url: '/footer/disclaimer.html',
      title: ''
    },
    {
      name: 'Privacy Policy',
      url: '/footer/privacy-policy.html',
      title: ''
    },
    {
      name: 'Government Warning',
      url: '/footer/government-warning.html',
      title: ''
    },
    {
      name: 'News',
      url: '/news',
      title: ''
    },
    {
      name: 'Training',
      url: '/training',
      title: ''
    }
  ],
  nda: {
    name: 'NIMH Data Archive',
    url: 'https://hippodev.nimhda.org',
    title: ''
  }
};

export const glossaryFixture: Glossary = {
  term: 'Data Dictionary',
  definition: 'The NDA Data Dictionary provides an electronic definition for each measure, questionnaire, assessment, etc that can be accepted into the NDA.',
  displayOrder: 100,
  lastPublished: 'Mar 19, 2018',
};

export const faqFixture: Faq = {
  question: 'What do I need to do before I start validating?',
  answer: `You can validate your data files to ensure they are harmonized to the NDA Data Dictionary without even having an account. The following prequisites must be in place before you can complete the process and upload: Your project must have a completed Data Submission Agreement Your project should have a completed Data Expected list Data files should be in harmonized CSV submission templates and if applicable, associated file directories`,
  displayOrder: 100,
  lastPublished: 'May 3, 2018',
};

export const videoFixture: Video = {
    title: 'Helpful Video',
    description: 'video describing this action',
    mediaGif: '',
    mediaMp4: 'https://s3.amazonaws.com/stage.nimhda.org/Documents/Tutorials/tutorial_launching-a-mindar.mp4',
    mediaWebM: '',
    lastPublished: 'Yesterday'
};

export const helpCenterFixture: HelpCenter = {
  overview: 'Page Overview',
  title: 'Help Title',
  lastPublished: 'Yesterday',
  faqs: [
    faqFixture
  ],
  glossary: [
    glossaryFixture
  ]
};
