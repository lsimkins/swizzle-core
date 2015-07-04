import Three from 'three'
import Engine from './engine'

var engine = Engine.factory(window.innerWidth, window.innerHeight)
document.body.appendChild(engine.canvas)

var geometry = new Three.BoxGeometry( 1, 1, 1 )
var material = new Three.MeshBasicMaterial( { color: 0x00ff00 } )
var cube = new Three.Mesh( geometry, material )
engine.add( cube )

engine.camera.position.z = 5
engine.start()

window.engine = engine
window.cube = cube