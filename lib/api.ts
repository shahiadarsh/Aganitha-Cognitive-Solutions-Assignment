import type { Link } from '@/types';

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function getLinks(): Promise<Link[]> {
  const response = await fetch(`${API_BASE_URL}/api/links`);
  if (!response.ok) {
    throw new Error('Failed to fetch links');
  }
  return response.json();
}

export async function createLink(originalUrl: string, customCode?: string): Promise<Link> {
  const response = await fetch(`${API_BASE_URL}/api/links`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ originalUrl, customCode: customCode || undefined }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to create link');
  }
  return response.json();
}

export async function deleteLink(shortCode: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/api/links/${shortCode}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete link');
  }
}