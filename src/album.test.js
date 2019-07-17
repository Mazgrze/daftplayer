import { formatDuration } from './album';

describe('format duration tests', () => {
  it('formats 7s to 0:07', () => {
    expect(formatDuration(7)).toBe('0:07');
  });
  it('formats 189s to 3:09', () => {
    expect(formatDuration(189)).toBe('3:09');
  });
});
