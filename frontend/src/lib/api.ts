// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

/**
 * Send feedback/contact form to backend
 */
export async function sendFeedback(data: {
  name: string;
  email: string;
  message: string;
}) {
  const response = await fetch(`${API_BASE_URL}/send-feedback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to send feedback');
  }

  return response.json();
}

/**
 * Generic API request helper
 */
export async function apiRequest<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }));
    throw new Error(error.message || `Request failed with status ${response.status}`);
  }

  return response.json();
}
