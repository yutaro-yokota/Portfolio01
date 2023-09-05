'use strict';


  
  import * as THREE from "./build/three.module.js";
  import { FlyControls } from "./jsm/controls/FlyControls.js";
  
  let camera, scene, renderer;
  let controls;
  
  const CLOCK = new THREE.Clock();
  
  function init() {
    //camera
    camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      15000
      );
      camera.position.z = 1000;
      
      
      //scene
      scene = new THREE.Scene();
      const SIZE = 10;
      //geometry
      const GEOMETRY = new THREE.SphereGeometry( SIZE, SIZE, SIZE );
      const MATERIAL = new THREE.MeshPhongMaterial({
        color: 0XFFFF7A,
        specular: 0XFFFFEF,
        shininess: 1000, //光度
      });
      
      for(let i = 0; i < 25000; i++) {
        const MESH = new THREE.Mesh(GEOMETRY, MATERIAL);
        
        MESH.position.x = 8000 * (2.0 * Math.random() - 1.0);
        MESH.position.y = 8000 * (2.0 * Math.random() - 1.0);
        MESH.position.z = 8000 * (2.0 * Math.random() - 1.0);
        
        //回転
        MESH.rotation.x = Math.random() * Math.PI;
    MESH.rotation.y = Math.random() * Math.PI;
    MESH.rotation.z = Math.random() * Math.PI;
    
    scene.add(MESH);
  }
  
  //平行光源
  const DIRLIGHT = new THREE.DirectionalLight(0xffffff, 2);
  scene.add(DIRLIGHT);
  
  //renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  //マウス操作を行う
  controls = new FlyControls(camera, renderer.domElement);
  
  controls.movementSpeed = 250;
  controls.rollSpeed = Math.PI / 80;
  animate();
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  
  const DELTA = CLOCK.getDelta(); //経過した時間の取得
  controls.update(DELTA);
  renderer.render(scene, camera);
}

function textAnime() {
  const TEXT = new SplitType('.top__title');
  const DIVElEMENTS = document.querySelectorAll('.top__title>div');
  DIVElEMENTS.forEach(div => {
    div.removeAttribute('style');
    console.log(TEXT);
  });
  
  gsap.to(".char", {
    y: 0 /*テキストのY軸の操作*/,
    stagger: 0.05 /*テキスト間の遅延時間*/,
    delay: 0.2 /*アニメーションのスタートまでの遅延時間*/,
    duration: 0.5 /*アニメーションの時間*/,
    ease: "power4.out" /*イージングの設定*/
  });
  
  const CHARELEMENTS = document.querySelectorAll('.char');
  CHARELEMENTS.forEach(char => {
    char.addEventListener('mouseenter', () => {
      gsap.to(char, {
        scale: 1.5,
        duration: 0.3
      });
    });
    
    char.addEventListener('mouseleave', () => {
      gsap.to(char, {
        scale: 1,
        duration: 0.3
      });
    });
  });
}
  init();
  textAnime();






