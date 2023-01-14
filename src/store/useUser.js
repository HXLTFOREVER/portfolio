import { defineStore } from "pinia";
import {
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { provider } from "@/firebase/index.js";
import { ref } from "vue";

export const useUser = defineStore("user", () => {
  const user = ref(null);
  const user_display_name = ref(null);

  const login = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider).then((result) => {
      const { user: u } = result;
      console.log(result);
      user.value = u;
      user_display_name.value = u.displayName;
    });
  };

  const logout = () => {
    const auth = getAuth();
    if (user.value !== null) {
      signOut(auth).then(() => {
        user.value = null;
        user_display_name.value = null;
      });
    }
  };

  const initUserState = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (u) => {
      if (u) {
        user.value = u.uid;
        user_display_name.value = u.displayName;
      } else {
        user.value = null;
        user_display_name.value = null;
      }
    });
  };

  return { user, user_display_name, login, logout, initUserState };
});
