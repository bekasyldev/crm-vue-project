import { defineStore } from 'pinia';

// Define the interface for authentication-related properties
interface AuthStoreProps {
  email: string;
  name: string;
  status: boolean;
}

// Define the default state for the authentication store
const defaultValue: { user: AuthStoreProps } = {
  user: {
    email: '',
    name: '',
    status: false,
  },
};

// Define the authentication store
export const useAuthStore = defineStore('auth', {
  state: () => defaultValue,

  getters: {
    // Getter to check if the user is authenticated
    isAuth: (state) => state.user.status,
  },

  actions: {
    // Action to clear the store's state
    clear() {
      this.$patch(defaultValue);
    },

    // Action to set authentication-related data
    set(input: AuthStoreProps) {
      this.$patch({ user: input });
    },
  },
});
