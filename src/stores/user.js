import { defineStore } from 'pinia';
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    isLogginUser: false
  }),
  actions: {
    async register(value) {

      const userCred = await auth.createUserWithEmailAndPassword(
        value.email, value.password
      );

      await usersCollection.doc(userCred.user.uid).set({
        name: value.name,
        email: value.email,
        age: value.age,
        country: value.country
      });

      userCred.user.updateProfile({
        displayName: value.name
      });

      this.isLogginUser = true;
    },
    async authenticate(value) {

      await auth.signInWithEmailAndPassword(value.email, value.password)

      this.isLogginUser = true
    },
    async signOut() {
      await auth.signOut();

      this.isLogginUser = false
    }
  }
});
