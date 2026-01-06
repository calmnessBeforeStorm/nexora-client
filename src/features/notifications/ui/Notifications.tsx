'use client';

import { useEffect } from 'react';
import { useNotificationsStore } from '@/entities/notifications/model/store';

const NOTIFICATION_DURATION = 4000;

export const Notifications = () => {
  const notifications = useNotificationsStore((s) => s.notifications);
  const remove = useNotificationsStore((s) => s.remove);

  useEffect(() => {
    if (notifications.length === 0) return;

    const timers = notifications.map((n) =>
      setTimeout(() => {
        remove(n.id);
      }, NOTIFICATION_DURATION)
    );

    return () => timers.forEach((t) => clearTimeout(t));
  }, [notifications, remove]);

  return (
    <div className="fixed top-6 left-6 z-[100] flex flex-col gap-3">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`
            px-4 py-3 rounded-lg text-sm font-medium shadow-lg
            cursor-pointer transition-all
            ${n.type === 'success' ? 'bg-green-500/90 text-white' : ''}
            ${n.type === 'warning' ? 'bg-yellow-400 text-black' : ''}
            ${n.type === 'error' ? 'bg-red-500/90 text-white' : ''}
          `}
          onClick={() => remove(n.id)}
        >
          {n.message}
        </div>
      ))}
    </div>
  );
};
