Template.footer.helpers({
  isAdmin: function(){
    return isAdmin(Meteor.userId())

  }
})

function isAdmin(userId) {
  var user = Meteor.users.findOne({
    _id: userId
  });
  try {
    return ADMIN_USERS.indexOf(user.services.twitter.username) !== -1
  } catch (e) {
    return false;
  }
}
