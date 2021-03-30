const nodemailer = require("nodemailer");

const GMAIL_USER = process.env.GMAIL_USER || "";
const OAUTH2_CLIENT_ID = process.env.OAUTH2_CLIENT_ID || "";
const OAUTH2_CLIENT_SECRET = process.env.OAUTH2_CLIENT_SECRET || "";
const OAUTH2_REFRESH_TOKEN = process.env.OAUTH2_REFRESH_TOKEN || "";
const OAUTH2_ACCESS_TOKEN = process.env.OAUTH2_ACCESS_TOKEN || "";
const DESTINATION_EMAIL = "ed.sanz.martin@gmail.com";
const DEFAULT_SUBJECT = "✉️ ➡️ 👨🏽‍💻 ➡️ 💵";

/**
 * @typedef {Object} BodyParams
 * @property {string} name
 * @property {string} subject
 * @property {string} replyTo Email of the person contacting.
 * @property {string} message
 */

/**
 * @param {string} jsonBody body object receivbed from POST request.
 * @return {null|BodyParams} In case any required field is missing return null.
 */
function parseRequestBody(jsonBody) {
  let body = JSON.parse(jsonBody);

  let { message, name, replyTo, subject = DEFAULT_SUBJECT } = body;

  if (!message || !name || !replyTo) {
    return null;
  }

  return { message, name, replyTo, subject: subject || DEFAULT_SUBJECT };
}

/**
 * @typedef {Object} Nodemailer
 * @property {Object} transporter instance of Mail returned by nodemailer.createTranport
 * @property {Object} mail message config for nodemailer (https://nodemailer.com/message/).
 */

/**
 * @param {BodyParams} requestParams
 * @return {Nodemailer}
 */
function configureNodemailer(requestParams) {
  let { name, subject, replyTo, message } = requestParams;

  let transporter = nodemailer.createTransport({
    port: 587,
    host: "smtp.gmail.com",
    auth: {
      type: "OAuth2",
      user: GMAIL_USER,
      clientId: OAUTH2_CLIENT_ID,
      clientSecret: OAUTH2_CLIENT_SECRET,
      refreshToken: OAUTH2_REFRESH_TOKEN,
      accessToken: OAUTH2_ACCESS_TOKEN
    }
  });

  let mail = {
    from: { name, address: replyTo },
    text: message,
    subject,
    to: DESTINATION_EMAIL,
    replyTo
  };

  return { transporter, mail };
}

exports.handler = async function sendMessage(event) {
  if (event.httpMethod != "POST") {
    return {
      statusCode: 405
    };
  }

  if (!GMAIL_USER || !OAUTH2_CLIENT_ID || !OAUTH2_CLIENT_SECRET || !OAUTH2_REFRESH_TOKEN) {
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: "Internal account credentials couldn't be found." })
    };
  }

  try {
    let requestParams = parseRequestBody(event.body);

    if (!requestParams) {
      return {
        statusCode: 422,
        body: JSON.stringify({ message: "Missing parameters in request body" })
      };
    }

    var { transporter, mail } = configureNodemailer(requestParams);
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ type: error.name, trace: error.stack, message: error.message })
    };
  }

  return transporter.sendMail(mail).then(
    function handleFulfillment() {
      return {
        statusCode: 204
      };
    },
    function handleRejection(error) {
      // Error from gateway nodemailer.
      return {
        statusCode: 502,
        body: JSON.parse({ message: error })
      };
    }
  );
};
