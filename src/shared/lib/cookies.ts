export const sessionStorage = {
  save(session: any) {
    localStorage.setItem('session', JSON.stringify(session));
  },
  clear() {
    localStorage.removeItem('session');
  },
};
