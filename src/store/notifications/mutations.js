export const mutations = {
  AddNotification(state, notification) {
    let guid = (Math.random().toString(32) + Date.now()).substring(2);
    state.notifications.push({ ...notification, id: guid });
    setTimeout(function() {
      state.notifications.splice(
        state.notifications.findIndex(
          itrNotification => itrNotification.id === guid
        ),
        1
      );
    }, 3000);
  }
};
