const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerconfig");

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  async function main() {
    try {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"craves Republic " <cravesrepublic@gmail.com>', // sender address
        to,
        subject,
        html,
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }

  // Call the main function to send the email and await its completion
  await main();
};

module.exports = sendEmail;
