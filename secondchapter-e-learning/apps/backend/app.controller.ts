
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('quotes')
  getQuotes() {
    return [{ id: 1, title: 'Mock Quote' }];
  }

  @Get('inquiries')
  getInquiries() {
    return [{ id: 1, question: 'Mock Inquiry' }];
  }

  @Get('user/profile')
  getProfile() {
    return { id: 1, name: 'John Doe' };
  }
}
