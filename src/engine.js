import Three from 'three'

class Engine {
  constructor(renderer, scene, camera) {
    this._renderer = renderer
    this._scene = scene
    this._camera = camera

    this._isRunning = false
  }

  get scene() {
    return this._scene
  }

  get camera() {
    return this._camera
  }

  get renderer() {
    return this._renderer
  }

  get canvas() {
    return this.renderer.domElement
  }

  get isRunning() {
    return this._isRunning
  }

  add(object) {
    this.scene.add(object)
  }

  remove(object) {
    this.scene.remove(object)
  }

  start() {
    if (this.isRunning) {
      return this
    }

    this._isRunning = true
    requestAnimationFrame(time => this.onFrame(time))

    return this
  }

  stop() {
    this._isRunning = false
    return this
  }

  onFrame(time) {
    if (!this.isRunning) {
      return
    }

    this.update(time)
    this.renderer.render(this.scene, this.camera)

    requestAnimationFrame(time => this.onFrame(time))
  }

  update(time) {
    
  }

  static factory(width = 600, height = 800) {
    var renderer = new Three.WebGLRenderer({alpha: true, antialias: true})
    var scene = new Three.Scene()
    var camera = new Three.PerspectiveCamera(75, width/height, 0.1, 1000)

    renderer.setSize(width, height)

    return new Engine(renderer, scene, camera)
  }
}

export default Engine