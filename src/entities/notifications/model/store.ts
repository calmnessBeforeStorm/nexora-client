'use client';

import { create } from 'zustand';
import { Notification, NotificationType } from './types';

interface NotificationsState {
  notifications: Notification[];

  push: (type: NotificationType, message: string) => void;
  remove: (id: string) => void;
}

export const useNotificationsStore = create<NotificationsState>((set) => ({
  notifications: [],

  push(type, message) {
    const id = crypto.randomUUID();

    set((state) => ({
      notifications: [...state.notifications, { id, type, message }],
    }));
  },

  remove(id) {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    }));
  },
}));
