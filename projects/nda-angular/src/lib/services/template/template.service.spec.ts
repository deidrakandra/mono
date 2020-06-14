import { TemplateService } from './template.service';
import { templateFixture } from '../../test/test.fixture';
import { Link } from '../../components/link/link.model';

describe('Service: Template', () => {

  let templateService: TemplateService;

  beforeEach(() => {
    templateService = new TemplateService();
    templateService.load(templateFixture);
  });

  it('should be created', () => {
    expect(templateService).toBeTruthy();
  });
  
  it('should return well-formed footer menu items', () => {
    expect(templateService.getFooterMenuItems().length).toBe(templateFixture.footer.length);

    templateService.getFooterMenuItems().forEach((item: Link) => {
      expect(item.url).toContain(templateFixture.nda.url);
    });
  });
  
});