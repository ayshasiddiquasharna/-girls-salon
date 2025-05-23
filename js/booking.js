
const paymentMethod = document.getElementById("paymentMethod");
const mobilePaymentFields = document.getElementById("mobilePaymentFields");
const bankPaymentField = document.getElementById("bankPaymentField");
const bookingForm = document.getElementById("bookingForm");
const successMessage = document.getElementById("successMessage");

paymentMethod.addEventListener("change", () => {
    mobilePaymentFields.classList.add("hidden");
    bankPaymentField.classList.add("hidden");

    if (paymentMethod.value === "bkash" || paymentMethod.value === "nagad") {
        mobilePaymentFields.classList.remove("hidden");
    } else if (paymentMethod.value === "bank") {
        bankPaymentField.classList.remove("hidden");
    }
});

bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    successMessage.classList.remove("hidden");
    bookingForm.reset();
    mobilePaymentFields.classList.add("hidden");
    bankPaymentField.classList.add("hidden");
});
