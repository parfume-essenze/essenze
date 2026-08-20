import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function IntroAnimation({ onFinish }) {
  const mountRef = useRef(null);
  const [phase, setPhase] = useState('3d');

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.035);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);
    mount.appendChild(renderer.domElement);

    // Central gem
    const gemGeo = new THREE.OctahedronGeometry(1.8, 1);
    const gemMat = new THREE.MeshPhongMaterial({
      color: 0xc8a96e, emissive: 0x3a2000,
      specular: 0xffffff, shininess: 200,
      transparent: true, opacity: 0.85,
    });
    const gem = new THREE.Mesh(gemGeo, gemMat);
    scene.add(gem);

    const wireGem = new THREE.Mesh(gemGeo, new THREE.MeshBasicMaterial({
      color: 0xffd700, wireframe: true, transparent: true, opacity: 0.18,
    }));
    scene.add(wireGem);

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.9, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xffd700, transparent: true, opacity: 0.25 })
    );
    scene.add(core);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(3.2, 0.04, 8, 120),
      new THREE.MeshBasicMaterial({ color: 0xc8a96e, transparent: true, opacity: 0.5 })
    );
    ring.rotation.x = Math.PI / 2.5;
    scene.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.8, 0.025, 8, 100),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15 })
    );
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.z = Math.PI / 6;
    scene.add(ring2);

    // Particles
    const count = 1800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [[1.0,0.84,0.43],[1.0,1.0,1.0],[0.8,0.6,0.2]];
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i*3]   = r*Math.sin(phi)*Math.cos(theta);
      positions[i*3+1] = r*Math.sin(phi)*Math.sin(theta);
      positions[i*3+2] = r*Math.cos(phi);
      const c = palette[Math.floor(Math.random()*3)];
      colors[i*3]=c[0]; colors[i*3+1]=c[1]; colors[i*3+2]=c[2];
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
      size: 0.065, vertexColors: true, transparent: true, opacity: 0.8, sizeAttenuation: true
    }));
    scene.add(particles);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const gLight = new THREE.PointLight(0xffd700, 3, 20);
    gLight.position.set(4,4,4);
    scene.add(gLight);
    const bLight = new THREE.PointLight(0x4444ff, 1.5, 15);
    bLight.position.set(-4,-2,3);
    scene.add(bLight);
    const wLight = new THREE.PointLight(0xffffff, 2, 12);
    wLight.position.set(0,5,2);
    scene.add(wLight);

    let animId;
    let t = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.005;
      gem.rotation.x = t * 0.3;
      gem.rotation.y = t * 0.5;
      wireGem.rotation.x = -t * 0.2;
      wireGem.rotation.y = t * 0.6;
      const pulse = 1 + Math.sin(t * 2) * 0.08;
      core.scale.set(pulse, pulse, pulse);
      ring.rotation.y = t * 0.4;
      ring2.rotation.y = -t * 0.25;
      particles.rotation.y = t * 0.05;
      particles.rotation.x = t * 0.02;
      gLight.position.x = Math.sin(t * 0.7) * 6;
      gLight.position.z = Math.cos(t * 0.7) * 6;
      bLight.position.x = Math.cos(t * 0.5) * 5;
      bLight.position.z = Math.sin(t * 0.5) * 5;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  const handleClick = () => {
    setPhase('out');
    setTimeout(() => onFinish(), 900);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999, cursor: 'pointer', background: '#000',
        opacity: phase === 'out' ? 0 : 1, transition: 'opacity 0.9s ease',
      }}
    >
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />

      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        pointerEvents: 'none',
      }}>
        <div style={{
          fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: '300',
          letterSpacing: '0.5em', color: '#fff', textTransform: 'uppercase',
          fontFamily: '"Georgia", serif',
          textShadow: '0 0 80px rgba(200,169,110,0.9), 0 0 30px rgba(255,215,0,0.4)',
          animation: 'essenze-appear 1.5s ease forwards',
        }}>
          ESSENZE
        </div>
        <div style={{
          width: '80px', height: '1px',
          background: 'linear-gradient(90deg, transparent, #c8a96e, transparent)',
          margin: '20px 0', animation: 'line-grow 1.8s ease forwards',
        }} />
        <div style={{
          fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)', letterSpacing: '0.5em',
          color: 'rgba(200,169,110,0.8)', textTransform: 'uppercase', fontFamily: 'sans-serif',
          animation: 'essenze-appear 2s ease forwards',
        }}>
          Premium Parfumeria
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '50px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
        animation: 'bounce-prompt 2.5s ease-in-out infinite 1.2s',
        pointerEvents: 'none',
      }}>
        <div style={{
          fontSize: '0.72rem', letterSpacing: '0.4em', color: 'rgba(255,255,255,0.4)',
          textTransform: 'uppercase', fontFamily: 'sans-serif',
        }}>Kirish uchun bosing</div>
        <div style={{ color: 'rgba(200,169,110,0.55)', fontSize: '0.9rem' }}>◆</div>
      </div>

      <style>{`
        @keyframes essenze-appear {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes line-grow {
          from { width: 0; opacity: 0; }
          to   { width: 80px; opacity: 1; }
        }
        @keyframes bounce-prompt {
          0%,100% { opacity:0.4; transform:translateX(-50%) translateY(0); }
          50%      { opacity:1;   transform:translateX(-50%) translateY(7px); }
        }
      `}</style>
    </div>
  );
}
