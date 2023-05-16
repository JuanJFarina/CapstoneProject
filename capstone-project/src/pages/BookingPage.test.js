import { initializeTimes } from './BookingPage';
import { updateTimes } from './BookingPage';
import { fetchAPI } from '../Api.js';

jest.mock('../Api.js', () => ({
  fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
  test('should call fetchAPI with the correct date and return the result', () => {
    const mockDate = new Date('2023-05-17');
    const mockResponse = ['17:00', '17:30', '18:30'];
    
    fetchAPI.mockReturnValue(mockResponse);
    
    const result = initializeTimes(mockDate);
    
    expect(fetchAPI).toHaveBeenCalledWith(mockDate);
    expect(result).toEqual(mockResponse);
  });
});

describe('updateTimes', () => {
    test('should call fetchAPI with the correct date and return the result', () => {
        const mockDate = new Date('2023-05-17');
        const mockResponse = ['17:00', '17:30', '18:30'];
  
        fetchAPI.mockReturnValue(mockResponse);
  
        const result = updateTimes(mockDate);
  
        expect(fetchAPI).toHaveBeenCalledWith(mockDate);
        expect(result).toEqual(mockResponse);
    });
});