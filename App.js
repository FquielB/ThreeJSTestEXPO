import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as THREE from 'three';
import { Renderer } from 'expo-three';
import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
//Testing Commentario
//Adding changes?

global.THREE = global.THREE || THREE;

export default function App() {
  return (
      <GLView
        style={{ flex: 1 }}
        onContextCreate={onContextCreate}
      />
    );
}

const onContextCreate = (gl= ExpoWebGLRenderingContext  ) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 1000);
  const renderer = new Renderer({ gl });
  renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 5;
  
  const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.07;
    cube.rotation.y += 0.04;
    renderer.render(scene, camera);
    gl.endFrameEXP();
  }
  animate();

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
