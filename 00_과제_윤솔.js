document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector("#loginBtn");
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
    const message = document.querySelector("#message");

    function handleLogin() {
        const id = usernameInput.value.trim();
        const pw = passwordInput.value.trim();

        if (id === "treasure" && pw === "0218") {
            message.style.color = "#0F1A50";
            message.textContent = "✅ 로그인을 했습니다!";
            setTimeout(() => {
                location.href = "./00_과제_윤솔02.html";
            }, 1000);
        } else {
            message.style.color = "#DF1A38";
            message.textContent = "❌ 아이디 또는 비밀번호가 틀렸습니다. ㅠㅠ";
        }
    }

    loginBtn.addEventListener("click", handleLogin);

    document.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            handleLogin();
        }
    });
});
