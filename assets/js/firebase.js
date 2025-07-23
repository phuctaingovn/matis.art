 // Firebase init
  const firebaseConfig = {
    apiKey: "AIzaSyAZ03GnwPZijVP9Pvw3tSn5U4Lejyjjye4",
    authDomain: "carrotxanh-e54c1.firebaseapp.com",
    databaseURL: "https://carrotxanh-e54c1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "carrotxanh-e54c1",
    storageBucket: "carrotxanh-e54c1.appspot.com",
    messagingSenderId: "75948839694",
    appId: "1:75948839694:web:24b8ca6388bcf605bf3d5f"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.database();

  // 1. Tổng số lượt truy cập
  const visitsRef = db.ref('stats/visits');
  visitsRef.transaction(v => (v || 0) + 1);
  visitsRef.on('value', snap => {
    document.getElementById('visit-counter').textContent = snap.val() || 0;
  });

  // 2. Đang truy cập (presence)
  const presenceRef = db.ref('presence/');
  let clientId = localStorage.getItem('clientId');
  if (!clientId) {
    clientId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem('clientId', clientId);
  }
  const myRef = presenceRef.child(clientId);

  function updatePresence() {
    myRef.set({ lastSeen: Date.now() });
    myRef.onDisconnect().remove();
  }
  updatePresence();
  setInterval(updatePresence, 15000);

  presenceRef.on('value', snap => {
    const now = Date.now();
    let count = 0;
    snap.forEach(child => {
      if (now - (child.val().lastSeen || 0) < 30000) count++;
    });
    document.getElementById('online-counter').textContent = count;
  });