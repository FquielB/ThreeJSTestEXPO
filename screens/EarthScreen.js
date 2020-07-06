import * as React from 'react';
import * as THREE from 'three';
import { Renderer, TextureLoader  } from 'expo-three';
import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';

export default function EarthScreen({ navigation }) {
  return (
    <GLView
        style={{ flex: 1 }}
        onContextCreate={onContextCreate}
      />
  );
}

const  onContextCreate = async (gl: ExpoWebGLRenderingContext  ) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
  const renderer = new Renderer({ gl });
  renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

  var geometry = new THREE.SphereGeometry(1, 32, 32);
  
  var material = new THREE.MeshPhongMaterial({
    map: new TextureLoader().load(require('../assets/earth.png'))
  });
  
  var earthmesh = new THREE.Mesh(geometry, material);
  scene.add(earthmesh);
  camera.position.z = 5;
  
  const animate = () => {
    requestAnimationFrame(animate);
    earthmesh.rotation.x += 0.07;
    earthmesh.rotation.y += 0.04;
    renderer.render(scene, camera);
    gl.endFrameEXP();
  }
  animate();

}