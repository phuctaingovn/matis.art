function sendEmail(e) {
    e.preventDefault();

    // Gán ngày giờ gửi
    document.querySelector('#date').value = new Date().toLocaleString('vi-VN');

    emailjs.sendForm('service_carrotxanh', 'customer-message', '#contact-form')
      .then(function (response) {
        alert("✅ Tin nhắn đã được gửi thành công!");
        document.getElementById("contact-form").reset();
      }, function (error) {
        console.error(error);
        alert("❌ Gửi thất bại. Vui lòng thử lại.");
      });
  }

  function sendSubscribeEmail(e) {
    e.preventDefault();

    // Gán ngày giờ gửi
    document.querySelector('#subscribe-date').value = new Date().toLocaleString('vi-VN');

    emailjs.sendForm('service_carrotxanh', 'customer-need-support', '#subscribe-form')
      .then(function (response) {
        alert("✅ Tin nhắn đã được gửi thành công!");
        document.getElementById("subscribe-form").reset();
      }, function (error) {
        console.error(error);
        alert("❌ Gửi thất bại. Vui lòng thử lại.");
      });
  }