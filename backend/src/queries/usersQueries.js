const db = require('../models');

module.exports.updateUserTokens = async (data, userId) => {
  const [updatedCount] = await db.User.update(
      { accessToken: data.accessToken, refreshToken: data.refreshToken },
      { where: { id: userId }});
  if (updatedCount !== 1) {
    throw new Error('CONSTANTS_ERROR_MESSAGES.USER_UPDATE');
  }
  
};
