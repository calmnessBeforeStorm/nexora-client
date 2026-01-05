'use client';

import { useNotificationsStore } from '@/entities/notifications/model/store';

export const Notifications = () => {
  const { notifications, remove } = useNotificationsStore();

  return (
    <div className="fixed top-6 left-6 z-[100] flex flex-col gap-3">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`
            px-4 py-3 rounded-lg text-sm font-medium shadow-lg
            cursor-pointer transition-all
            ${
              n.type === 'success' &&
              'bg-green-500/90 text-white'
            }
            ${
              n.type === 'warning' &&
              'bg-yellow-400 text-black'
            }
            ${
              n.type === 'error' &&
              'bg-red-500/90 text-white'
            }
          `}
          onClick={() => remove(n.id)}
        >
          {n.message}
        </div>
      ))}
    </div>
  );
};
