import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  model(){
    return Ember.RSVP.hash({
      member: this.store.findRecord('member', this.get('session').get('currentUser').uid),
    })
  },
  actions: {

    editInfo(member, params){
      console.log(member.get('firstName'));
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined){
          member.set(key, params[key]);
        }
      });
      member.save();
      this.transitionTo('members');
    },

    destroyMember(member){
      member.destroyRecord();
      this.transitionTo('index');
    },
    savePost(params) {
      console.log(params);
      var newPost = this.store.createRecord('post', params);
      var member = params['member'];
      member.get('posts').addObject(newPost);
      newPost.save().then(function() {
        return member.save();
      });
      this.transitionTo('members');
    }
  }
});
