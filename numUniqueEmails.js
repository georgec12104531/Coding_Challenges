const convertEmail = (email) => {
  let [local, domain] = email.split("@")
  local = local.split(".")
                .join("")

  let plusIndex = local.indexOf("+") === -1 ? local.length + 1 : local.indexOf("+")

  local = local.slice(0, plusIndex)
              
  return `${local}@${domain}`
}

const numUniqueEmails = function(emails) {
  const uniqEmails = emails.reduce((hash, email) => {
    hash[convertEmail(email)] = 0;
    return hash
  }, {})

  return Object.keys(uniqEmails).length
}
