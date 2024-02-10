function generateOTP() {
    var otpDisplay = document.getElementById('otpDisplay');
    
    // Generate a random 6-digit OTP
    var otp = Math.floor(100000 + Math.random() * 900000);
    
    otpDisplay.textContent = `Your OTP is: ${otp}`;
}
