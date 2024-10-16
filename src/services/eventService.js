// src/services/eventService.js

import mockData from './mockData';

// Mock functions for API calls
export const fetchEvents = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData.topEvents);
    }, 500); // Simulate network delay
  });
};

export const fetchEventById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const event = mockData.topEvents.find(event => event.id === parseInt(id));
      if (event) {
        resolve(event);
      } else {
        reject(new Error('Event not found'));
      }
    }, 500); // Simulate network delay
  });
};

export const bookTicket = async (eventId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Ticket booked for event ID: ${eventId}`);
    }, 500); // Simulate network delay
  });
};
