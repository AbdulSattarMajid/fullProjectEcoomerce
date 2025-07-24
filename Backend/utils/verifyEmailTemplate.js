function verifyEmailTemplate({ name, url }) {
  return `
    <!DOCTYPE html>
    <html>
      <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Hello ${name},</h2>
        <p>Thank you for registering! Please verify your email by clicking the link below:</p>
        <a href="${url}" style="background-color:#4CAF50;color:white;padding:10px 20px;text-decoration:none;border-radius:5px;">Verify Email</a>
        <p>If you did not request this, you can safely ignore this email.</p>
      </body>
    </html>
  `;
}
export default verifyEmailTemplate;
