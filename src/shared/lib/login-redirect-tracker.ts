const KEY = 'login-redirect-attempts';

export function trackLoginRedirect(): number {
  const now = Date.now();

  const raw = localStorage.getItem(KEY);
  const attempts: number[] = raw ? JSON.parse(raw) : [];

  const recent = attempts.filter((t) => now - t < 10_000);
  recent.push(now);

  localStorage.setItem(KEY, JSON.stringify(recent));

  return recent.length;
}
