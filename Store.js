import { observable, autorun } from 'mobx'

class authorStore {
  @observable authorName =  'kby'
}

var store = new authorStore

export default store

autorun(() => {
  console.log('store.authorName')
})