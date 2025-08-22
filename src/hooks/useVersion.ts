import { useEffect, useState } from 'react';

interface VersionResponse {
  version: string;
  description?: string;
}

export const useVersion = () => {
  const [version, setVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch('/api/version', { method: 'GET' });
        if (!response.ok) throw new Error('Failed to fetch version');
        const data: VersionResponse = await response.json();
        setVersion(data.version);
      } catch {
        setError('Could not load version info');
      } finally {
        setLoading(false);
      }
    };
    fetchVersion();
  }, []);

  return { version, loading, error };
};
