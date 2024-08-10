const db = require("./index");

async function allMessagesGet() {
  try {
    const messages = db.query("SELECT * FROM messages");
    return messages;
  } catch (e) {
    console.log(e);
  }
}

async function addMessagePost(username, messageContent, added) {
  const text = "INSERT INTO messages(username, text, added) VALUES($1, $2, $3)";
  const values = [username, messageContent, added];

  try {
    db.query(text, values);
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  allMessagesGet,
  addMessagePost,
};
