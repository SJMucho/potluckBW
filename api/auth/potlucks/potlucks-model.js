const db = require("../../data/db-config");

function find(id) {
  return db("potlucks as p")
    .join("users as u", "p.user_id", "u.user_id")
    .where({ potluckID: id})
    .select("p.event_name", "p.date", "p.user_id as potluckID")
}

function findById(id) {
  const potluck = await db("potlucks").where({potluck_id}).select("potluck_id", "event_name", "date").first()
  return {
    ...potluck
  }
}

async function create(potluck) {
  // const [id] = await db("howtos").insert(howto)
  const [potluck_id] = await db("potlucks").insert({
    event_name: potluck.event_name,
    date: potluck.date,
    org_id: potluck.org_id
  })
  return findById(id)
}

function remove(id) {
  return db("potlucks").where({potluck_id}).del()
}


module.exports = {
  find,
  findById,
  create,
  remove
};
