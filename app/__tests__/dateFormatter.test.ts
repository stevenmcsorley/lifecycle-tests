import { formatTime, parseTimeStringToDate } from '../src/scripts/services/dateFormatter';

describe('formatTime', () => {
  it('should return formatted time as HH:mm', () => {
    const date1 = new Date('2023-07-26T10:30:00');
    expect(formatTime(date1)).toBe('10:30');

    const date2 = new Date('2023-07-26T05:05:00');
    expect(formatTime(date2)).toBe('05:05');

    const date3 = new Date('2023-07-26T23:59:00');
    expect(formatTime(date3)).toBe('23:59');
  });

  it('should return "Invalid Date" for invalid date', () => {
    const invalidDate = new Date('invalid');
    expect(formatTime(invalidDate)).toBe('Invalid Date');
  });

  it('should return a valid Date object for a valid time string', () => {
    const timeString = '10:30';
    const expectedDate = new Date();
    expectedDate.setHours(10, 30, 0, 0);

    expect(parseTimeStringToDate(timeString)).toEqual(expectedDate);
  });

  it('should throw an error for an invalid time string', () => {
    const invalidTimeString = '25:70';
  
    expect(() => parseTimeStringToDate(invalidTimeString)).toThrowError('Invalid time string');
  });
});
