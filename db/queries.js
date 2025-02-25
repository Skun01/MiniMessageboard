const pool = require('./pool');

async function getAllMessages(){
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertMessage(text, username, added){
    await pool.query(
        'INSERT INTO messages (text, username, added) VALUES ($1, $2, $3);',
        [text, username, added]
    );
}

async function deleteMessage(id){
    await pool.query(
        'DELETE FROM messages WHERE id = $1',
        [id]
    )
}

module.exports = {
    getAllMessages,
    insertMessage,
    deleteMessage,
}