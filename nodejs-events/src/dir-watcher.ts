import * as fs from 'fs'
import * as EventEmitter from 'events'

export const Main = () => {
  const watcher = new EventEmitter()

  const watchPath = __dirname + '/files'

  watcher.on('fileChanged', (eventType, filename) => {
    console.log(`File ${filename} has been changed`)
  })

  fs.watch(watchPath, (eventType, filename) => {
    watcher.emit('fileChanged', eventType, filename)
  })
}
