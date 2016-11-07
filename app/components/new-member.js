import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    registerMember(){
      alert("1");

      var params = {
        firstName: this.get('newFirstName'),
        lastName: this.get('newLastName'),
        screenName: $("#newScreenName").val(),
        city: this.get('newCity'),
        state: this.get('newState'),
        zipCode: this.get('newZipCode'),
        avatar: $("#newAvatar").val(),
        id: this.get('session').get('currentUser').uid,
      };
      console.log(params);
      if(params['firstName'] && params['lastName'] && params['screenName'] && params['city'] && params['state'] && params['zipCode']){
        alert("2");
            $("input").val("");
        this.sendAction('registerMember', params);
      }
    }
  }
});