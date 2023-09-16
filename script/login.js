document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // หยุดการส่งฟอร์ม

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // ตรวจสอบข้อมูลล็อกอิน ในตัวอย่างนี้เป็นตัวอย่างเท่านั้น
        if (username === "ohmboy" && password === "1478") {
            // ล็อกอินสำเร็จ
            window.location.href = "Home.html"; // ไปยังหน้าหลัก
        } else {
            // ล็อกอินไม่สำเร็จ
            alert("Login failed. Please check your username and password.");
        }
    });
});