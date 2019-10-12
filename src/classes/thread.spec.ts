import { Thread } from './thread';

describe('Thread', () => {
  it('should create an instance', () => {
    expect(new Thread(
      'Lee Changho wins',
      {
        file: '',
      },
      'A come from behind win'
    )).toBeTruthy();
  });

  it('should demand all fields for the form data', () => {

  });
});
