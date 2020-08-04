import { Component } from '@angular/core';
import { Object } from './Object';
import * as THREE from 'three';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Object = Object;


  display(shape,colour) {

    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    if (shape == "Cube") {
      var geometry = new THREE.BoxGeometry(1, 1, 1);
      var material = new THREE.MeshBasicMaterial({ color: colour });
      var cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      var animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();
    }
    if (shape == "Sphere") {
      var geometry1 = new THREE.SphereGeometry(1, 1, 1);
      var material1 = new THREE.MeshBasicMaterial({ color: colour });
      var sphere = new THREE.Mesh(geometry1, material1);
      scene.add(sphere);

      camera.position.z = 5;

      var animate = function () {
        requestAnimationFrame(animate);

        sphere.rotation.x += 0.01;
    
        renderer.render(scene, camera);
      };

      animate();
    }

    }

    

 
}
