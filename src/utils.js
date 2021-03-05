function partiallyApply(fn, ...initialArgs) {
	return function partiallyApplied(...laterArgs) {
		return fn(...initialArgs, ...laterArgs);
	};
}

function getMostRecentEmail(emailList) {
	if (Array.isArray(emailList) && emailList.length) {
		return emailList.pop();
	}
	return false;
}

function filterNewEmails(oldEmails, possibleNewEmails) {
	if (!oldEmails.length) {
		// We don't have any old emails, so all of them must be new
		return possibleNewEmails;
	}

	const oldEmailIds = oldEmails.map(email => email.mail_id);
	return possibleNewEmails.filter(newEmail => !oldEmailIds.includes(newEmail.mail_id));
}

function syncLocalEmails(localEmails, emailIds) {
	return localEmails.filter(email => !emailIds.includes(email.mail_id));
}

module.exports.partiallyApply = partiallyApply;
module.exports.getMostRecentEmail = getMostRecentEmail;
module.exports.filterNewEmails = filterNewEmails;
module.exports.syncLocalEmails = syncLocalEmails;
