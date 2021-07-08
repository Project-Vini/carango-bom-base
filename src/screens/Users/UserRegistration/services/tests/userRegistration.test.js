import { userRegistrationService } from '..';

import { API_URL } from '../../../../../services/constants';

beforeAll(() => jest.spyOn(window, 'fetch'));

describe('User registration services', () => {
  beforeEach(() => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });
  });

  it('should call the fetch function with the correct url', async () => {
    const mockedName = 'Aaron';
    const mockedEmail = 'a@a.com';
    const mockedPassword = '12345678';
    userRegistrationService(mockedName, mockedEmail, mockedPassword);

    expect(window.fetch).toHaveBeenCalledWith(`${API_URL}/usuario`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: mockedName, email: mockedEmail, password: mockedPassword }),
    });
  });
});
