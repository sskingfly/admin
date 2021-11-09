const namespace = 'mall-admin'

export default {
  setItem(key, val) {
    const storage = this.getStorage()
    storage[key] = val
    window.localStorage.setItem(namespace, JSON.stringify(storage))
  },
  getItem(key) {
    return this.getStorage()[key]
  },
  getStorage() {
    return JSON.parse(window.localStorage.getItem(namespace) || "{}")
  },
  clearItem(key) {
    const storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(namespace, JSON.stringify(storage))
  },
  clearAll() {
    window.localStorage.clear()
  }
}